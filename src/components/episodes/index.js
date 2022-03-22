import React from "react";
import { gql, useQuery } from "@apollo/client"
import Items from "../Item"

const query_episodes = gql`
query{
    episodesByIds(ids: [1, 10]) {
      name
      characters {
        name
      }
    }
  }`;


function Episodes(){

    const { loading, data } = useQuery(query_episodes)

    if(loading) return <div><p>Carregando... 0_0</p></div>

    return(
        <div>
        {
           data.episodesByIds.map((item, index) => 
            <Items key={index} item={item}/>
           )
        }
        </div>
    )
}

export default Episodes
