import React from 'react';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';

// Basado en mundo-auto/cliente/contacto.html
const ContactPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado. Simulación exitosa.');
    };

    return (
        <>
            <Header />
            <main>
                <section className="contact-form-section fade-in">
                    <div className="contact-form-container">
                        <div className="contact-form-box">
                            <h2>Envíanos un Mensaje</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                                <label htmlFor="mensaje">Tu Mensaje</label>
                                <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
                                <button type="submit" className="send-button"><i className="fas fa-paper-plane"></i> Enviar Ahora</button>
                            </form>
                        </div>
                        <div className="contact-info-box">
                            <p>Estamos listos para escuchar tus ideas. Contáctanos y demos el primer paso para llevar tu auto al siguiente nivel.</p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Portales 1497, 4160000 Tomé, Tomé, Bio Bio</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span>+569 75962490</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>Mundo.autost@gmail.com</span>
                                </div>
                            </div>
                            <div className="horario-atencion">
                                <h4>Horario de Atención</h4>
                                <div className="horario-item">
                                    <i className="fas fa-clock"></i>
                                    <div>
                                        <p>Lunes a Viernes: 08:30 - 19:00</p>
                                        <p>Sábados: 09:00 - 15:00</p>
                                        <p>Domingos y festivos cerrado</p>
                                    </div>
                                </div>
                            </div>
                            <div className="google-maps">
                                <iframe src="https://maps.google.com/maps?q=Portales%201497%2C%20Tom%C3%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;