import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import icon from '../icon.jpg';

export default function Home() {
    return (
        <Container class="main">
            <Row id="grid">
                <h1>Développeur Web</h1>
                <h3>Nom Complet : Belal Bounasri</h3>
                <h3>Occupation : Étudiant en génie logiciel</h3>
                <h3>École : École de Technologie Supérieure</h3>
                <h3>Objectif : Devenir un Full-Stack Développeur</h3>
            </Row>
            <Row id="imgRight">
                <Col>
                    <div>
                        <img src={icon} alt="Nices img" id="img"></img>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
}