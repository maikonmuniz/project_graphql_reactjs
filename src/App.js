import React from "react";
import { client } from "./config/client-graphql";
import { ApolloProvider } from "@apollo/client";
import Episode from "./components/episodes"
import Item from "./components/Item"


function App(){

  return (
    <ApolloProvider client={client}>
      <div>
      <Episode />
      
      </div>
    </ApolloProvider>
  );
}

export default App;