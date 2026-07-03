<<<<<<< HEAD
<<<<<<< HEAD
import FindUsPage from "./pages/find-us";

export default function App() {
  return <FindUsPage />;
}
=======
import OurService from "./components/OurService";
import Student from "./components/Student";
import Visitor from "./components/Visitor";


=======
import OurService from "./Services/OurService";
import {Main as VisaMain} from "./Services/Visa-Services/Migration-services/Main";
import Main from "./Services/Destination-Country/Main";
import Student from "./Services/Visa-Services/Student-services/Student";
import Visitor from "./Services/Visa-Services/Visitor-services/Visitor";
>>>>>>> 215c367 (New)

function App() {
  return (
    <>
     <Main/>
    </>

  );
}

export default App;
>>>>>>> d9b4c14 (OurService)
