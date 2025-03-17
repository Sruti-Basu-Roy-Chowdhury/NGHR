import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Pages/First";  
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";  
import Signup from "./Pages/Signup";  
import Otp from "./Pages/Otp";
import Otp1 from "./Pages/Otp2"; 
import Dashboard from "./Pages/Dashboard";
import Adhaar from "./Pages/Adhaar";
import Otp2 from "./Pages/Otp3";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4"; 
import Step5 from "./Pages/Step5"; 
import Step6 from "./Pages/Step6"; 
import Step7 from "./Pages/Step7"; 
import Step8 from "./Pages/Step8"; 
import Step9 from "./Pages/Step9"; 
import Step10 from "./Pages/Step10"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PhoneVerify" element={<Otp1 />} />
        <Route path="/Adhaar" element={<Adhaar />} />
        <Route path="/Verify" element={<Otp2 />} />
        <Route path="/Step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/step8" element={<Step8 />} />
        <Route path="/step9" element={<Step9 />} />
        <Route path="/step10" element={<Step10/>} />


      </Routes>
    </Router>
  );
}

export default App;
