import { BrowserRouter, Routes,Route } from "react-router-dom";


import Body from "./components/Body";
import Profile  from "./components/Profile"
import Login from "./components/Login"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed.jsx";
import Connections from "./components/Connections.jsx";

function App() {
  
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
         
            <Route path="/" element={<Body />} >
               <Route path="/" element={<Feed />} />
               <Route path="/login" element={< Login />}/>
               <Route path="/profile" element={< Profile />}/>
               <Route path="/connections" element={< Connections />}/>
            </Route>
        </Routes>
      
       </BrowserRouter>
     </Provider>

      {/* <NavBar /> */}
        
    </>
  );
}

export default App;
