import React from "react";
import { ListItem, List } from "@mui/material";

export default function Watchlist(props) {

    
    /* Mapping through the items array and returning a list item for each item in the array. */
    const itemsList = props.items.map((item) => (
        <ListItem >
            {item.title}
        </ListItem>
    ));
    

    return (
        <div>
            <List 
                sx={{ color: '#fff' }}
                style={{ fontFamily: "Comfortaa" }}  
            >
                {itemsList}
            </List>
        </div>
    )
}