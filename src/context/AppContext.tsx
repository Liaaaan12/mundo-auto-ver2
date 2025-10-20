import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// === TIPOS ===
export interface Product { id: string; name: string; price: number; img: string; }
export interface CartItem extends Product { quantity: number; }
export interface User { username: string; role: 'client' | 'admin'; age?: number; password?: string; }
interface AppContextType {
    cart: CartItem[]; user: User | null; products: Product[]; cartTotal: number; cartItemCount: number; 
    addToCart: (product: Product) => void; removeFromCart: (productId: string) => void; 
    login: (username: string, password: string, isAdmin?: boolean) => boolean; 
    register: (username: string, password: string, age: number) => boolean; logout: () => void; 
    processCheckout: () => void;
}

const MOCK_PRODUCTS: Product[] = [
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

const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => { /* ... */ const context = useContext(AppContext); if (context === undefined) { throw new Error('useAppContext debe usarse dentro de un AppProvider'); } return context; };

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => { return JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]; });
    const [user, setUser] = useState<User | null>(() => { const storedUser = localStorage.getItem('loggedInUser'); return storedUser ? (JSON.parse(storedUser) as User) : null; });
    const [products] = useState<Product[]>(MOCK_PRODUCTS);

    useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);

    const addToCart = (product: Product): void => { /* ... */ };
    const removeFromCart = (productId: string): void => { /* ... */ };
    const login = (username: string, password: string, isAdmin: boolean = false): boolean => { 
        if (isAdmin && username === 'admin' && password === 'admin') {
             const adminUser: User = { username: 'admin', role: 'admin' };
             localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
             setUser(adminUser);
             alert('Inicio de sesión de administrador exitoso. ¡Bienvenido!');
             return true;
         }
         // ... (Lógica de login cliente)
         return false;
    };
    const register = (username: string, password: string, age: number): boolean => { /* ... */ return true; };
    const logout = (): void => { /* ... */ };
    
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    const value: AppContextType = {
        cart, user, products, cartTotal, cartItemCount, 
        addToCart, removeFromCart, login, register, logout, processCheckout: () => setCart([]),
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};