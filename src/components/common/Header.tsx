import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext, CartItem } from '../../context/AppContext.tsx';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cart: CartItem[];
    removeFromCart: (id: string) => void;
    cartTotal: number;
    cartItemCount: number;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, removeFromCart, cartTotal }) => {
    if (!isOpen) return null;
    // ... (JSX del Modal) ...
    return (
        <div id="cart-modal" className="cart-modal" style={{ display: 'flex' }} onClick={onClose}>
            <div className="cart-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Tu Carrito</h2>
                <div id="cart-items">
                    {cart.length === 0 ? (<p>El carrito está vacío.</p>) : (
                        cart.map(item => (<div key={item.id} className="cart-item">
                                <div className="cart-item-details"><h5>{item.name}</h5><p>{item.quantity} x ${item.price.toLocaleString('es-CL')} CLP</p></div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>))
                    )}
                </div>
                <div className="cart-summary-footer">
                    <p>Total: <span id="cart-total">${cartTotal.toLocaleString('es-CL')} CLP</span></p>
                    {cart.length > 0 && (<Link to="/pago" className="checkout-btn" onClick={onClose}>Ir a Pagar</Link>)}
                </div>
            </div>
        </div>
    );
};

const Header: React.FC = () => {
    const { cart, removeFromCart, cartTotal, cartItemCount, user, logout } = useAppContext();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <>
            <header>
                <div className="logo">MUNDO REPUESTOS</div>
                <nav>
                    <Link to="/">Inicio</Link>
                    <a href="#" className="cta-button">Mundo Autos</a> 
                    <Link to="/catalogo">Catálogo</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contacto">Contacto</Link>
                    
                    {user ? (
                        <a href="#" className="cta-button" onClick={handleLogout}>Cerrar Sesión</a>
                    ) : (
                        <Link to="/mi-cuenta" className="cta-button">Mi Cuenta</Link>
                    )}
                    
                    <a href="#" className="cart-icon" onClick={() => setIsCartOpen(true)}>
                        🛒<span id="cart-count" className="cart-count">{cartItemCount}</span>
                    </a>
                </nav>
            </header>
            <CartModal 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                removeFromCart={removeFromCart}
                cartTotal={cartTotal}
                cartItemCount={cartItemCount}
            />
        </>
    );
};

export default Header;