import React from "react";
import { Card} from "@mui/material";
import Category from "../Components/Category";
import NavBar from "../Components/NavBar";
import landscape from "../media/books/landScape.jpg";
const Home = () => {
  return (
    <>
      <NavBar />
      <Card style={{ marginRight: "30px", marginLeft: "30px", margin: "50px" }}>
        <div style={{ marginLeft: "auto", width: "70%", marginRight: "auto" }}>
          <img
            src={landscape}
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div style={{ width: "80%", marginLeft: "auto" }}>
          {/* <TextField
           
            label="Search input"
            
          /> */}
        </div>
        <div>
          <Card>
            <Category category="Frictional Books"/>
            <Category category="Thriller Books"/>
            <Category category="Love Stories"/>
            <Category category="Top Rated"/>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default Home;
