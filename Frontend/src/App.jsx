import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/login";
import { SignUp } from "./pages/SignUp";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Rides } from "./pages/Rides";
import { EndRide } from "./pages/EndRide";
import { ReportBike } from "./pages/ReportBike";
import { NavBar } from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/endride" element={<EndRide />} />
          <Route path="/reportbike" element={<ReportBike />} />
        </Routes>
      </Container>
    </>
  );
}

// import './App.css'

// import { useState, useEffect } from "react";

// const url = "http://127.0.0.1:3000/bicycles";

// function App() {
//   const [loadData, setLoadData] = useState(true);

//   const fetchBikes = async () => {
//     setLoadData(true);
//     try {
//       const response = await fetch(url);
//       const bikes = await response.json();
//       // to see the data fetched in the console
//       console.log(bikes);
//     } catch (error) {
//       setLoadData(false);
//     }
//   };

//   useEffect(() => {
//     fetchBikes();
//   }, []);

//   // if there's an error while fetching the data
//   if (!loadData) {
//     return (
//       <>
//         <h1>Error occurred while fetching data</h1>
//       </>
//     );
//   }

//   // data was fetched correctly
//   return (
//     <>
//       <h1>data -bikes- fetched correctly</h1>
//     </>
//   );
// }

export default App;
