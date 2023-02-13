import { Container, Card } from "react-bootstrap";
// Background image credit goes to the artist Jon&Roy, its a slight variation of some of their art.

export function BGImgOverlay() {
    return (
        <Container id="BGContainer" className="fixed-bottom">
            <img src="public\Background.png" id="BGImage"></img>
        </Container>
    );
}
