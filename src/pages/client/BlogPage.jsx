import React from 'react';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';

// Basado en mundo-auto/cliente/blog.html
const BlogPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="blog-section">
                    <h1>Blog de Mundo Auto</h1>
                    <p>Guías, tutoriales y consejos para el cuidado de tu vehículo.</p>

                    <div className="blog-grid">
                        <div className="blog-post">
                            <h4>Guía para el Cambio de Aceite de Motor</h4>
                            <p>Aprende a realizar un cambio de aceite de forma segura para alargar la vida de tu motor.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zEPecqlQAx8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="blog-post">
                            <h4>Tutorial de Instalación de Pastillas de Freno</h4>
                            <p>Un video paso a paso para reemplazar tus pastillas de freno y asegurar tu seguridad.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/EpxuCZ5YekE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="blog-post">
                            <h4>Mantenimiento Básico del Sistema de Frenos</h4>
                            <p>Conoce la importancia de revisar el líquido de frenos y el estado de tus discos.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/DUFyLESK3-I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="blog-post">
                            <h4>Cómo Instalar un Kit de Luces LED</h4>
                            <p>Mejora la iluminación de tu auto con este sencillo tutorial de instalación de luces LED.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/knVi86zZGdo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        
                        <div className="blog-post">
                            <h4>Guía para Elegir un Volante Deportivo</h4>
                            <p>Te mostramos cómo escoger el volante Momo ideal para la personalización de tu vehículo.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/bELtcvg2vSI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BlogPage;