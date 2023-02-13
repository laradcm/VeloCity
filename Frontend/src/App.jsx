import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Rides } from "./pages/Rides";
import { EndRide } from "./pages/EndRide";
import { ReportBike } from "./pages/ReportBike";
import { NavBar } from "./component/NavBar";
import { FootBar } from "./component/FootBar";
import { BGImgOverlay } from "./component/BGImgOverlay";

function App() {
    return (
        <>
            <NavBar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rides" element={<Rides />} />
                    <Route path="/endride" element={<EndRide />} />
                    <Route path="/reportbike" element={<ReportBike />} />
                </Routes>
            </Container>
            <BGImgOverlay />
            <FootBar />
        </>
    );
}

export default App;