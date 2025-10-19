import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-grid">
                <div className="footer-logo-section">
                    <div className="footer-logo">MUNDO REPUESTOS</div>
                    <p>Transformando vehículos con pasión, precisión y los mejores accesorios del mercado.</p>
                </div>
                <div className="footer-links">
                    <h4>ENLACES</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/catalogo">Servicios</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>SÍGUENOS</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/mundoauto" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/mundoauto" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div className="footer-payments">
                    <h4>MEDIOS DE PAGO</h4>
                    <img src="https://via.placeholder.com/200x120.png?text=QR+Red+compra" alt="Medios de Pago Redcompra" />
                    <p>Aceptamos todas las tarjetas en tienda.</p>
                </div>
                <div className="footer-qr">
                    <h4>HABLEMOS</h4>
                    <img src="https://via.placeholder.com/150x150.png?text=QR+WhatsApp" alt="Código QR de WhatsApp" />
                    <p>¡Escanea este QR y háblanos!</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Mundo Repuestos. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;