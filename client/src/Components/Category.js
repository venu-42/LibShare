import React from 'react'
import { Card, Typography } from "@mui/material";

import NavBar from "../Components/NavBar";
import landscape from "../media/books/landScape.jpg";
import TextField from "@mui/material/TextField";
import BookCard from "../Components/BookCard";
const Category = (props) => {
  return (
    <div cointainer style={{marginLeft: "100px",marginRight: "100px",marginTop: "30px",marginBottom: "30px"}}>
        
              <Typography
                component="div"
                style={{ textAlign: "left", fontSize: 18,textDecoration: "underline",marginLeft: "5%"}}
              >
                {props.category}
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
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                  <div
                    style={{
                      width: "22%",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <BookCard />
                  </div>
                </div>
              </div>
            
    </div>
  )
}

export default Category