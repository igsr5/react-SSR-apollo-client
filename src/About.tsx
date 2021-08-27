import React from 'react';
import { gql, useQuery } from "@apollo/client";

const GET_ALL_FILMS = gql`
    query AllFilms{
        allFilms {
            films {
                title
            }
        }
    }

`;

const About: React.FC = () => {
    const { data, error } = useQuery(GET_ALL_FILMS);
    console.log(error)
    return (
      <div>
        <h1>About</h1>
        <p>{data}</p>
      </div>
    );
}

export default About;