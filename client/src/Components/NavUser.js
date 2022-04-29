import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
const NavUser = () => {
  return (
    <div style={{ marginRight: "30px", marginLeft: "30px", marginTop: "15px" }}>
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
              <Tab label="My Books" />
              <Tab label="Rented" />
              <Tab label="Requests" />
            </div>
          </Tabs>
        </Box>
      </Card>
    </div>
  );
};

export default NavUser;
