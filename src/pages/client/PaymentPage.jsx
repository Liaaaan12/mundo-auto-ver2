import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';
import { useAppContext } from '../../context/AppContext.jsx';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    const { cart, cartTotal, processCheckout } = useAppContext();
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [activeTab, setActiveTab] = useState('card');

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        // Simulación de procesamiento de pago
        processCheckout();
        setPaymentSuccessful(true);
    };

    const totalFormatted = `$${cartTotal.toLocaleString('es-CL')} CLP`;

    // Redirección si el carrito está vacío después de cargar
    useEffect(() => {
        if (cart.length === 0 && !paymentSuccessful) {
             // Podríamos redirigir a /catalogo si está vacío al inicio
        }
    }, [cart, paymentSuccessful]);

    return (
        <>
            <Header />
            <main>
                <section className="payment-section fade-in">
                    <h1 id="payment-title" style={{ display: paymentSuccessful ? 'none' : 'block' }}>Confirmación y Pago</h1>
                    <p id="payment-subtitle" style={{ display: paymentSuccessful ? 'none' : 'block' }}>Finaliza tu pedido a continuación.</p>

                    <div id="payment-interface" style={{ display: paymentSuccessful ? 'none' : 'flex' }}>
                        <div className="payment-summary payment-col">
                            <h2>Resumen de la Compra</h2>
                            <div id="cart-summary">
                                {cart.length === 0 ? (
                                    <p>El carrito está vacío.</p>
                                ) : (
                                    cart.map(item => (
                                        <p key={item.id}>{item.name} ({item.quantity} unid.) - ${item.price.toLocaleString('es-CL')} CLP</p>
                                    ))
                                )}
                            </div>
                            
                            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                            <p className="total-price">Total: {totalFormatted}</p>
                        </div>

                        <div className="payment-method-container payment-col">
                            <h2>Método de Pago</h2>
                            
                            <div className="payment-tabs">
                                <button className={`tab-button ${activeTab === 'card' ? 'active' : ''}`} onClick={() => setActiveTab('card')}>
                                    <i className="fas fa-credit-card"></i> Tarjeta
                                </button>
                                <button className={`tab-button ${activeTab === 'transfer' ? 'active' : ''}`} onClick={() => setActiveTab('transfer')}>
                                    <i className="fas fa-university"></i> Transferencia
                                </button>
                            </div>

                            <div id="card-payment" className={`payment-tab-content ${activeTab === 'card' ? 'active' : ''}`}>
                                <form id="card-form" onSubmit={handlePaymentSubmit}>
                                    <label htmlFor="card-number">Número de Tarjeta</label>
                                    <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required pattern="\d{16}" title="Debe contener 16 dígitos." />
                                    
                                    <label htmlFor="card-name">Nombre en la Tarjeta</label>
                                    <input type="text" id="card-name" placeholder="Nombre Apellido" required />

                                    <div className="card-details-row">
                                        <div>
                                            <label htmlFor="card-expiry">Expiración (MM/AA)</label>
                                            <input type="text" id="card-expiry" placeholder="MM/AA" required pattern="\d{2}/\d{2}" title="Formato MM/AA." />
                                        </div>
                                        <div>
                                            <label htmlFor="card-cvv">CVV</label>
                                            <input type="text" id="card-cvv" placeholder="CVV" required pattern="\d{3,4}" title="3 o 4 dígitos." />
                                        </div>
                                    </div>
                                    <button type="submit" className="pay-button" disabled={cart.length === 0}>Pagar <span className="total-price-button">{totalFormatted}</span></button>
                                </form>
                            </div>

                            <div id="transfer-payment" className={`payment-tab-content ${activeTab === 'transfer' ? 'active' : ''}`}>
                                <h3>Selecciona tu Banco</h3>
                                <p className="transfer-notice">Serás redirigido para completar la transferencia. El pedido se confirmará al recibir el comprobante.</p>
                                <div className="bank-options">
                                    <a href="#" className="bank-button cta-button" onClick={() => alert('Simulando redirección a Banco Estado')}><i className="fas fa-bank"></i> Banco Estado</a>
                                    <a href="#" className="bank-button cta-button" onClick={() => alert('Simulando redirección a Banco Falabella')}><i className="fas fa-bank"></i> Banco Falabella</a>
                                    <a href="#" className="bank-button cta-button" onClick={() => alert('Simulando redirección a Banco de Chile')}><i className="fas fa-bank"></i> Banco de Chile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="success-message" className="payment-success-message" style={{ display: paymentSuccessful ? 'block' : 'none' }}>
                        <i className="fas fa-check-circle success-icon"></i>
                        <h2>¡Gracias por tu compra!</h2>
                        <p>Tu pedido ha sido procesado con éxito y será enviado a la dirección proporcionada. Recibirás una confirmación por correo electrónico.</p>
                        <Link to="/" className="cta-button">Volver al inicio</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default PaymentPage;