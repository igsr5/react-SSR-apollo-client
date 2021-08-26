import React from 'react';

interface HomeProps {
    name: string;
}

const Home: React.FC<HomeProps> = (props) => {
    return <h1>Hello { props.name }</h1>
}

export default Home;