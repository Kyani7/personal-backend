import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurService from "./Services/OurService";
import {Main as VisaMain} from "./Services/Visa-Services/Migration-services/Main";
import Main from "./Services/Destination-Country/Main";
import Student from "./Services/Visa-Services/Student-services/Student";
import Visitor from "./Services/Visa-Services/Visitor-services/Visitor";
import {Main as MainPage} from "./Services/Main";
import FindUsPage from "./Pages/find-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/find-us" element={<FindUsPage />} />
        <Route path="/migration" element={<VisaMain />} />
        <Route path="/destination" element={<Main />} />
        <Route path="/student" element={<Student />} />
        <Route path="/visitor" element={<Visitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function App() {
  return (
    <>
     <MainPage/>
    </>

  );
}

export default App;
