import React from "react";
import styled from './index.module.css'

function Item({ item }){

    return(
    <section className={styled.container}> 
        <div className={styled.div_item}>
            <p>{item.name}</p>
            <p>{item.characters.name}</p>
        </div>
    </section>
    )
}

export default Item