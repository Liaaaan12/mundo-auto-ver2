import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';
import { useAppContext } from '../../context/AppContext.jsx'; 

const HomePage = () => {
    const { addToCart, products } = useAppContext();
    const featuredProducts = products.filter(p => ['motor-l200', 'frenos-suzuki', 'volante-momo'].includes(p.id));

    const handleProductClick = (product) => {
        if (window.confirm(`¿Desea agregar ${product.name} al carrito por $${product.price.toLocaleString('es-CL')} CLP?`)) {
            addToCart(product);
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <h1>REPUESTOS Y ACCESORIOS DE ALTA CALIDAD EN CHILE</h1>
                    <p>Tu tienda online de confianza para autopartes de vehículos nuevos y usados.</p>
                    <Link to="/catalogo" className="cta-button">Explora el Catálogo</Link>
                </section>

                <section className="product-catalog">
                    <h2>Productos Destacados</h2>
                    <div className="product-grid">
                        {featuredProducts.map((product, index) => (
                            <div 
                                key={product.id}
                                className="product-card fade-in" 
                                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                                onClick={() => handleProductClick(product)}
                            >
                                <img src={product.img} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>${product.price.toLocaleString('es-CL')} CLP</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="blog-section">
                    <h2>Consejos de Mantenimiento</h2>
                    <p>Guías, tutoriales y consejos para el cuidado de tu vehículo.</p>
                    <div className="blog-grid">
                        {/* Asumimos que las imágenes se cargan desde /public/imagenes */}
                        <div className="blog-post fade-in" style={{ animationDelay: '0.2s' }}>
                            <img src="/imagenes/liquido.jpg" alt="Revisión de fluidos" />
                            <h4>Revisión de niveles de fluidos esenciales</h4>
                            <p>Una guía rápida para verificar el aceite, refrigerante y líquido de frenos.</p>
                        </div>
                        <div className="blog-post fade-in" style={{ animationDelay: '0.4s' }}>
                            <img src="/imagenes/baterias.jpg" alt="Cuidado de la batería" />
                            <h4>Consejos para el cuidado de la batería</h4>
                            <p>Mantén tu batería en buen estado para evitar quedarte varado.</p>
                        </div>
                        <div className="blog-post fade-in" style={{ animationDelay: '0.6s' }}>
                            <img src="/imagenes/motor.jpg" alt="Motor de auto con humo" />
                            <h4>Qué hacer si el motor se sobrecalienta</h4>
                            <p>Pasos a seguir si la temperatura del motor sube más de lo normal.</p>
                        </div>
                        <div className="blog-post fade-in" style={{ animationDelay: '0.8s' }}>
                            <img src="/imagenes/faros.jpg" alt="Auto con faros opacos" />
                            <h4>Cómo limpiar los faros opacos</h4>
                            <p>Restaura la claridad de tus faros y mejora la visibilidad nocturna.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;