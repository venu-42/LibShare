import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import UserPic from "../media/images/user1.jpg";
import NavBar from "../Components/NavBar";
import BookPic from "../media/books/RDPD.webp";
import Button from '@mui/material/Button';
import RequestCard from "../Components/RequestCard";
const BookDetails = () => {
  const owners = [
    { Name: "M.Sushanth Kumar", Email: "sushanthkumar870@gmail.com", Phone: "7896541235",Address: "aosubciv fuvhauisnsbdsvnus fcasbvbcsib" },
    { Name: "S.Venugopal Reddy ", Email: "venugopalreddy04@gmail.com", Phone: "7896541235",Address: "fuvhauisnsbdsvnus fcasbvbcsib" },
    { Name: "M.Sai Nethra", Email: "sainethra@gmail.com", Phone: "7896541235", Address: "aosubciv fcasbvbcsib"},
    { Name: "S.Akhil", Email: "akhil@gmail.com", Phone: "7896541235",Address: "aosubciv" },
  ];
  return (
    <div>
      <NavBar />
      <Card
        style={{
          marginTop: "30px",
          width: "35%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%" }}>
            <div style={{ margin: "10%" }}>
              <img
                src={BookPic}
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                alt="..."
              />
            </div>
          </div>
          <div
            style={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  Name: Rich dad poor dad
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  Author: Robet T.Kiyasaki
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  category: Finance
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  Book available: 6
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div>
        {/* <Card style={{ width: "70%",marginLeft: "auto",marginRight: "auto",marginTop:"20px"}}>
          <div style={{ display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
            <div style={{ width: "20%",display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center"  }}>
              <img
                src={UserPic}
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                alt="..."
              />
            </div>
            <div style={{ width: "60%",display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Name: Venugopal
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Address: Room.no:A319,H-10;
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Price: RS10 per day
                </Typography>
              </div>
            </div>
            </div>
            <div style={{ width: "20%",marginLeft: "auto",marginRight: "auto",marginTop:"20px" }}>
            <Button size="small" variant="outlined">Connect</Button>

            </div>
          </div>
        </Card> */}
        {
              owners.map(card =>(
                <RequestCard Name={card.Name} Email={card.Email} Phone={card.Phone} Address={card.Address}/>
              ))
            }
      </div>
    </div>
  );
};

export default BookDetails;
