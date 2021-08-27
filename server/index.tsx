import path from "path";
import fs from "fs";
import fetch from 'cross-fetch';

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { renderToStringWithData } from "@apollo/client/react/ssr";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/*", async (req: express.Request, res: express.Response) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'https://graphql.org/swapi-graphql/',
      fetch
    }),
    cache: new InMemoryCache(),
  });

  const app = await renderToStringWithData(
    <StaticRouter location={req.url}>
      <App client={client} />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id=r"root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
});