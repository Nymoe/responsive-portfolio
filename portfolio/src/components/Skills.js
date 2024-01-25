import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import icon from '../icon.jpg';

export default function Skills() {
    return (
        <Container id="skills-main">
            <Row>
                <h1>Programmation</h1>
                <h3>Java</h3>
                <h3>C/C++</h3>
                <h3>Python</h3>
                <h3>Bash</h3>
                <h3>SQL</h3>
                <h3>JavaScript</h3>
            </Row>
            <Row>
                <h1>Développement Web</h1>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JavaScript</h3>
                <h3>React JS</h3>
                <h3>Node JS</h3>
            </Row>
            <Row>
                <h1>Outils de développement</h1>
                <h3>GitHub</h3>
                <h3>Visual Studio Code</h3>
                <h3>IntelliJ</h3>
                <h3>Eclipse</h3>
            </Row>
        </Container>
    );
}