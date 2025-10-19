import React from 'react';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';
import { useAppContext } from '../../context/AppContext.jsx';

const CatalogPage = () => {
    const { products, addToCart } = useAppContext();

    // Función simplificada para manejar la adición al carrito y la simulación del modal
    const handleProductClick = (product) => {
        addToCart(product);
    };

    // Agrupamos los productos por la categoría definida en el HTML original
    const productCategories = {
        'Motores': ['motor-l200', 'motor-yaris', 'motor-f150', 'motor-accent'],
        'Sistemas de Frenos': ['frenos-suzuki', 'pastillas-bosh', 'liquido-frenos'],
        'Cajas de Cambio': ['caja-ford', 'caja-chevy'],
        'Accesorios': ['volante-momo', 'butacas-fibra', 'luces-led'],
        'Aceites y Fluidos': ['aceite-castrol', 'anticongelante-prestone'],
        'Servicio Técnico': ['diagnostico'],
    };

    const getProductDetails = (id) => products.find(p => p.id === id);

    return (
        <>
            <Header />
            <main>
                <section className="product-catalog">
                    <h1>Catálogo de Productos</h1>
                    <p>Filtra por marca, modelo, año y tipo de pieza.</p>

                    {Object.entries(productCategories).map(([categoryName, productIds], index) => (
                        <div className="product-card-large fade-in" key={categoryName} style={{ animationDelay: `${0.2 * index}s` }}>
                            <h2>{categoryName}</h2>
                            <div className="category-grid">
                                {productIds.map(productId => {
                                    const product = getProductDetails(productId);
                                    if (!product) return null;
                                    
                                    return (
                                        <div 
                                            key={product.id}
                                            className="item" 
                                            onClick={() => handleProductClick(product)}
                                        >
                                            <img src={product.img} alt={product.name} />
                                            <h4>{product.name}</h4>
                                            <p>${product.price.toLocaleString('es-CL')} CLP</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CatalogPage;