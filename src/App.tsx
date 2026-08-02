
import Footer from "./Pages/Foooter";
import   Header from "./Pages/Header"

import { Outlet } from "react-router-dom";


function App() {
  return (
    <>

    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default App;
