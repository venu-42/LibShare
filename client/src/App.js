import "./App.css";
import Home from "./Screens/Home";
import BookDetails from "./Screens/BookDetails";
import MyProfile from "./Screens/MyProfile";
import Login from "./Screens/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myprofile" element={<MyProfile />} />
            <Route exact path="/bookdetails" element={<BookDetails />} />
          </Routes>
        </Router>
      </div>
      {/* <MyProfile/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <BookDetails/> */}
    </>
  );
}

export default App;
