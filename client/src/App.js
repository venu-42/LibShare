import './App.css';
import Home from './Screens/Home';
import BookDetails from './Screens/BookDetails';
import MyProfile from './Screens/MyProfile';
import Login from './Screens/LoginScreen'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <>
    {/* {
      <div>
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/myprofile" component={MyProfile}/>
          <Route exact path="/bookdetails" component={BookDetails}/>
        <Switch>
          </Router>
      </div>
    } */}
    <MyProfile/>
    {/* <Login/> */}
    {/* <Home/> */}
    {/* <BookDetails/> */}
     
    </>
  );
}

export default App;
