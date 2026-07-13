import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main as VisaMain} from "./Services/Visa-Services/Migration-services/Main";
import Main from "./Services/Destination-Country/Main";
import Student from "./Services/Visa-Services/Student-services/Student";
import Visitor from "./Services/Visa-Services/Visitor-services/Visitor";
import {Main as MainPage} from "./Services/Main";
import FindUsPage from "./Pages/find-us";
import CompanyProfilePage from "./Pages/company-profile";
import WhoAreWePage from "./Pages/who-are-we";
import DirectorMessagePage from "./Pages/director-message";
import PartnersPage from "./Pages/partners";
import EventsPage from "./Pages/events";
import MilestonesPage from "./Pages/milestones";
import StoriesPage from "./Pages/stories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/find-us" element={<FindUsPage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/who-are-we" element={<WhoAreWePage />} />
        <Route path="/director-message" element={<DirectorMessagePage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/migration" element={<VisaMain />} />
        <Route path="/destination" element={<Main />} />
        <Route path="/student" element={<Student />} />
        <Route path="/visitor" element={<Visitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
