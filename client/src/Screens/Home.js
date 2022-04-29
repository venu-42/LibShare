import React from "react";
import { Card} from "@mui/material";
import Category from "../Components/Category";
import NavBar from "../Components/NavBar";
import landscape from "../media/books/landScape.jpg";
const Home = () => {
  const thrillerData = [
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
  ];
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
            <Category category="Frictional Books" data={thrillerData}/>
            <Category category="Thriller Books" data={thrillerData}/>
            <Category category="Love Stories" data={thrillerData}/>
            <Category category="Top Rated" data={thrillerData}/>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default Home;
