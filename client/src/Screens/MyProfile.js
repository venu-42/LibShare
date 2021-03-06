import { Card } from "@mui/material";
import React, { useState } from "react";
import BookCard from "../Components/BookCard";
import NavBar from "../Components/NavBar";
import UserCard from "../Components/UserCard";
import RequestCard from "../Components/RequestCard";
import "../CSS/SubNav.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("My Books");
  const navBarClickHandler = (e) => {
    setActiveSection(e.target.innerText);
  };
  const [option, setoption] = React.useState("All");

  const handleChange = (event) => {
    setoption(event.target.value);
  };

  const MyBooks = [
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
  ];
  const OnRent = [
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
  ];
  const Rented = [
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
    { Name: "Posted Internships", Author: "J.K.Rowling", Rating: "4/5" },
  ];

  const Requested = [
    { Name: "M.Sushanth Kumar", Email: "sushanthkumar870@gmail.com", Phone: "7896541235",Address: "aosubciv fuvhauisnsbdsvnus fcasbvbcsib" },
    { Name: "S.Venugopal Reddy ", Email: "venugopalreddy04@gmail.com", Phone: "7896541235",Address: "fuvhauisnsbdsvnus fcasbvbcsib" },
    { Name: "M.Sai Nethra", Email: "sainethra@gmail.com", Phone: "7896541235", Address: "aosubciv fcasbvbcsib"},
    { Name: "S.Akhil", Email: "akhil@gmail.com", Phone: "7896541235",Address: "aosubciv" },
  ];

  return (
    <>
      <NavBar />
      <Card style={{ marginRight: "30px", marginLeft: "30px", margin: "50px" }}>
        <UserCard />
        {/* <NavUser style={{marginTop:"10px"}}/> */}
        <div
          style={{ marginRight: "30px", marginLeft: "30px", marginTop: "15px" }}
        >
          <Card>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs centered>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {
                    <div className={"candidate__navBar"}>
                      <p
                        className={`candidate__nav ${
                          activeSection === "My Books" ? "active-tab" : ""
                        }`}
                        onClick={navBarClickHandler}
                      >
                        My Books
                      </p>
                      <p
                        className={`candidate__nav ${
                          activeSection === "Rented" ? "active-tab" : ""
                        }`}
                        onClick={navBarClickHandler}
                      >
                        Rented
                      </p>
                      <p
                        className={`candidate__nav ${
                          activeSection === "Requests" ? "active-tab" : ""
                        }`}
                        onClick={navBarClickHandler}
                      >
                        Requests
                      </p>
                    </div>
                  }
                </div>
              </Tabs>
            </Box>
          </Card>
        </div>

        {activeSection === "My Books" && (
          <>
            <Card
              style={{
                marginTop: "2%",
                marginRight: "30px",
                marginLeft: "30px",
              }}
            >
              <div style={{ marginLeft: "3%", marginTop: "2%" }}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <Select
                    value={option}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"OnRent"}>On Rent</MenuItem>
                  </Select>
                </FormControl>
              </div>
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
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {option === "All" &&
                    MyBooks.map((card) => (
                      <BookCard
                        Name={card.Name}
                        Author={card.Author}
                        Rating={card.Rating}
                      />
                    ))}
                  {option === "OnRent" &&
                    OnRent.map((card) => (
                      <BookCard
                        Name={card.Name}
                        Author={card.Author}
                        Rating={card.Rating}
                      />
                    ))}
                </div>
              </div>
            </Card>
          </>
        )}
        {activeSection === "Rented" && (
          <>
            <Card
              style={{
                marginTop: "2%",
                marginRight: "30px",
                marginLeft: "30px",
              }}
            >
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
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {Rented.map((card) => (
                    <BookCard
                      Name={card.Name}
                      Author={card.Author}
                      Rating={card.Rating}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </>
        )}
        {
          activeSection === "Requests" && (
            <>
            {
              Requested.map(card =>(
                <RequestCard Name={card.Name} Email={card.Email} Phone={card.Phone} Address={card.Address}/>
              ))
            }
   
            </>
          )
        }
      </Card>
    </>
  );
};

export default MyProfile;
