
import Footer from "./Components/layout/Foooter";
import   Header from "./Components/layout/Header"

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
