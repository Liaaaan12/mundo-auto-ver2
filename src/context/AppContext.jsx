import React, { createContext, useState, useEffect, useContext } from 'react';

// Productos simulados (Mock Data)
const MOCK_PRODUCTS = [
    { id: 'motor-l200', name: 'Motor Mitsubishi L200', price: 500000, img: 'imagenes/motor mitsubishi l200.jpg' },
    { id: 'frenos-suzuki', name: 'Kit de Frenos Susuki Swift sport', price: 120000, img: 'imagenes/Susuki Swift Sport Kits de frenos.jpg' },
    { id: 'volante-momo', name: 'Volante deportivo Momo', price: 150000, img: 'imagenes/volante momo deportivo.jpg' },
    { id: 'pastillas-bosh', name: 'Pastillas de Freno Bosh', price: 45000, img: 'imagenes/pastillas de frenos bosh.jpg' },
    { id: 'liquido-frenos', name: 'Liquido para frenos', price: 20000, img: 'imagenes/luqido para frenos.jpg' },
    { id: 'motor-yaris', name: 'Motor Toyota Yaris Sport', price: 900000, img: 'imagenes/motor toyota yaris.jpg' },
    { id: 'motor-f150', name: 'Motor Ford F-150', price: 1200000, img: 'imagenes/motor ford f150.jpg' },
    { id: 'motor-accent', name: 'Motor Hyundai Accent', price: 450000, img: 'imagenes/motor hyundai accent.jpg' },
    { id: 'caja-ford', name: 'Caja de Cambios Automática Ford Ranger (usada)', price: 480000, img: 'imagenes/caja cambios automaticos ford ranger.jpg' },
    { id: 'caja-chevy', name: 'Caja de Cambios Manual Chevrolet Spark (nuevo)', price: 220000, img: 'imagenes/caja cambios manual chevrolet spark.jpg' },
    { id: 'butacas-fibra', name: 'Butacas deportivas de fibra', price: 500000, img: 'imagenes/Butacas deportivas fibra.jpg' },
    { id: 'luces-led', name: 'Kit de Luces LED', price: 25000, img: 'imagenes/kit de luces led.jpg' },
    { id: 'aceite-castrol', name: 'Aceite de Motor Castrol', price: 50000, img: 'imagenes/aceite de motor castrol.jpg' },
    { id: 'anticongelante-prestone', name: 'Anticogelante Prestone', price: 30000, img: 'imagenes/anticogelante prestone.jpg' },
    { id: 'diagnostico', name: 'Diagnóstico de Fallas', price: 25000, img: 'imagenes/faros.jpg' },
];

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    // Inicialización de estado desde localStorage
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedInUser')) || null);
    const [products] = useState(MOCK_PRODUCTS);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Lógica de Carrito
    const addToCart = (product) => {
        const productToAdd = { id: product.id, name: product.name, price: product.price, img: product.img };
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === productToAdd.id);
            if (productInCart) {
                return prevCart.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
        });
        alert(`${productToAdd.name} ha sido agregado al carrito.`);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    // Lógica de Autenticación
    const login = (username, password, isAdmin = false) => {
        if (isAdmin) {
            if (username === 'admin' && password === 'admin') {
                const adminUser = { username: 'admin', role: 'admin' };
                localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
                setUser(adminUser);
                alert('Inicio de sesión de administrador exitoso. ¡Bienvenido!');
                return true;
            } else {
                alert('Usuario o contraseña incorrectos.');
                return false;
            }
        } else {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const clientUser = users.find(u => u.username === username && u.password === password);
            if (clientUser) {
                const updatedUser = { ...clientUser, role: 'client' };
                localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
                setUser(updatedUser);
                alert('Inicio de sesión de cliente exitoso. ¡Bienvenido!');
                return true;
            } else {
                alert('Usuario o contraseña incorrectos.');
                return false;
            }
        }
    };
    
    const register = (username, password, age) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (age < 18) {
            alert('Debes ser mayor de 18 años para registrarte.');
            return false;
        }
        if (users.some(u => u.username === username)) {
            alert('El nombre de usuario ya existe.');
            return false;
        }
        users.push({ username, password, age, role: 'client' });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso. ¡Inicia sesión ahora!');
        return true;
    };

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null);
        alert('Has cerrado sesión.');
    };
    
    // Lógica de Pago
    const processCheckout = () => {
        localStorage.removeItem('cart');
        setCart([]);
    };

    const value = {
        cart, user, products, cartTotal, cartItemCount, 
        addToCart, removeFromCart, login, register, logout, processCheckout,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};