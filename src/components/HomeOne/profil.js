import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './profil.css';

function Profil() {
    const [text] = useTypewriter({
        words: ['A passionate developer', 'A creative thinker', 'A lifelong learner'],
        loop: true,
        delaySpeed: 200,
    });

    return (
        <section>
            <div id="profil" className="container-profil">
                <h1 style={{ textAlign: "center" }}>Personal</h1>
                <p style={{ textAlign: "center" }}>Hobi dan Data diriku</p>

                <Row>
                    {/* Card: Film */}
                    <Col sm="6">
                        <Card body style={cardStyle}>
                            <CardTitle tag="h5">Film</CardTitle>
                            <CardText>
                                Di waktu luang, saya sering menghabiskan waktu untuk menonton film, terutama yang sudah lama saya nantikan. Kebiasaan ini bermula saat saya masih duduk di bangku SMP. Saat liburan kenaikan kelas, saya dan adik-kakak sering menghabiskan waktu bersama sambil menonton film. Sampai sekarang, film favorit saya masih Avengers: Endgame.
                            </CardText>
                        </Card>
                    </Col>

                    {/* Card: Membaca */}
                    <Col sm="6">
                        <Card body style={cardStyle}>
                            <CardTitle tag="h5">Membaca</CardTitle>
                            <CardText>
                                Membaca juga masih menjadi favoritku selama ini entah itu novel, berita, majalah, maupun berita yang aku sendiri pun tidak tahu mengapa aku membacanya. Tetapi aku sangat menikmati jika aku menemukan fakta yang mencengangkan dan fakta yang tidak pernah terpikirkan oleh otakku sendiri.
                            </CardText>
                        </Card>
                    </Col>

                    {/* Card: Profil */}
                    <Col md={{ offset: 3, size: 6 }} sm="12">
                        <Card body style={cardStyle}>
                            <CardTitle tag="h5">Profil</CardTitle>
                            <CardText>
                                <div className="profile-info">
                                    
                                        <dt>Nama Lengkap</dt>
                                        <dd>Elisa Ambarwati</dd>
                                        <dt>Tempat, Tanggal Lahir</dt>
                                        <dd>Kab. Semarang, 28 Agustus 2008</dd>
                                        <dt>Alamat</dt>
                                        <dd>Reksosari, Kabupaten Semarang, Jawa Tengah</dd>
                                        <dt>Kewarganegaraan</dt>
                                        <dd>Indonesia</dd>
                                        <dt>Pendidikan</dt>
                                        <dd>SD Reksosari 01 - SMP 3 Suruh - SMK Telekomunikasi Tunas Harapan</dd>
                                   
                                </div>
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

const cardStyle = {
    margin: "20px",
    backgroundColor: "#f5f5f5",
    borderBottom: "2px dashed #fa8072",
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
};

export default Profil;
