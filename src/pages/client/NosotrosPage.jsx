import React from 'react';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';
import { Link } from 'react-router-dom';

// Rutas de las imágenes
const personaCambiandoAceite = '/imagenes/liquido.jpg';

// Basado en mundo-auto/cliente/nosotros.html
const NosotrosPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="acerca-nosotros-section">
                    <div className="diferencia-container fade-in">
                        <div className="diferencia-imagen">
                            <img src="https://images.unsplash.com/photo-1549488344-9964bd0811e7?q=80&w=1470&auto=format&fit=crop" alt="Edificio de Mundo Auto Tomé" />
                        </div>
                        <div className="diferencia-contenido">
                            <h2>¿Qué nos diferencia?</h2>
                            <p>
                                Nuestra misión es brindar un servicio personalizado, cercano y de calidad, siempre atendido por sus propios dueños, lo que nos permite
                                entregar una atención más comprometida, honesta y enfocada en las necesidades reales de cada cliente.
                            </p>
                            <p>
                                Nos dedicamos al cuidado y mantenimiento integral de vehículos, ofreciendo una amplia variedad de productos y servicios pensados para
                                satisfacer las necesidades de nuestros clientes.
                            </p>
                            <div className="diferencia-grid">
                                <div className="diferencia-item">
                                    <i className="fas fa-users"></i>
                                    <p><strong>500+</strong><br />Clientes Felices</p>
                                </div>
                                <div className="diferencia-item">
                                    <i className="fas fa-tools"></i>
                                    <p><strong>13+</strong><br />Años de Experiencia</p>
                                </div>
                                <div className="diferencia-item">
                                    <i className="fas fa-headset"></i>
                                    <p><strong>24/7</strong><br />Soporte Técnico</p>
                                </div>
                                <div className="diferencia-item">
                                    <i className="fas fa-wrench"></i>
                                    <p><strong>1000+</strong><br />Instalaciones Exitosas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="beneficios-container fade-in">
                        <div className="beneficios-contenido">
                            <h2>¡Beneficios Exclusivos en Mundo Autos!</h2>
                            <ul className="beneficios-list">
                                <li>
                                    <i className="fas fa-check-circle"></i> Todos nuestros **neumáticos** cuentan con **servicio de montaje, balanceo y cambio de válvulas totalmente gratuito** por la compra de tus neumáticos.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> **Cambio de aceite** con filtro gratis (consulta condiciones en tienda).
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> **Revisión y cambio de ampolletas** para tu vehículo.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> **Baterías** de todos los amperajes con instalación gratis.
                                </li>
                            </ul>
                            <div className="beneficios-buttons">
                                <span className="info-button">¡Servicio profesional y rápido!</span>
                                <span className="info-button">13+ años de experiencia</span>
                            </div>
                            <div className="agenda-wa-container">
                                <p>¡Agenda ahora!</p>
                                <a href="https://wa.me/56987654321" className="whatsapp-button">
                                    <i className="fab fa-whatsapp"></i> Agenda por WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="beneficios-imagen">
                            <img src={personaCambiandoAceite} alt="Persona cambiando el aceite del motor" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default NosotrosPage;