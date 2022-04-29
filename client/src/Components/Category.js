import React from 'react'
import { Card, Typography } from "@mui/material";

import BookCard from "../Components/BookCard";
const Category = ({category,data}) => {
 
  return (
    <div cointainer style={{marginLeft: "100px",marginRight: "100px",marginTop: "30px",marginBottom: "30px"}}>
        
              <Typography
                component="div"
                style={{ textAlign: "left", fontSize: 18,textDecoration: "underline",marginLeft: "5%"}}
              >
                {category}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  { data.map((card) => (
                      <BookCard
                        Name={card.Name}
                        Author={card.Author}
                        Rating={card.Rating}
                      />
                    ))}
                </div>
              </div>
            
    </div>
  )
}

export default Category