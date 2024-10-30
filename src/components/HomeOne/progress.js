import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Progress } from 'reactstrap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './progress.css';

function Profil() {
    const [text] = useTypewriter({
        words: ['Beberapa yang aku kuasai'],
        loop: false,
        delaySpeed: 200,
    });

    return (
        <section>
            <div id="profil" className="container-progress">
                <h1 style={{ textAlign: "center" }}>Keahlian</h1>
                <p style={{ textAlign: "center" }}>{text} <Cursor cursorStyle="|" cursorColor="red" /></p>

                <Row className="justify-content-center">
                    {['HTML', 'CSS', 'JavaScript', 'Reactjs'].map((skill, index) => {
                        const progressValue = [80, 60, 40, 30][index];
                        const progressColor = ['success', 'info', 'warning', 'danger'][index];
                        
                        return (
                            <Col key={skill} sm="6" md="3" xs="12" className="mb-3">
                                <Card className="skill-card" style={{ margin: "20px" }}>
                                    <CardBody>
                                        <CardTitle tag="h5">{skill}</CardTitle>
                                        <CardText>
                                            <Progress 
                                                animated 
                                                color={progressColor} 
                                                value={progressValue} 
                                                className="my-3"
                                            />
                                            <span>{progressValue}%</span>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
}

export default Profil;
