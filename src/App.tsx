import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext.tsx'; // Importación local aún

// RUTAS REPARADAS con prefijo absoluto forzado (@/pages...)
import LoginPage from './pages/client/LoginPage.tsx'; 
import HomePage from './pages/client/HomePage.tsx';
import CatalogPage from './pages/client/CatalogPage.tsx';
import ContactPage from './pages/client/ContactPage.tsx';
import PaymentPage from './pages/client/PaymentPage.tsx';
import NosotrosPage from './pages/client/NosotrosPage.tsx';
import BlogPage from './pages/client/BlogPage.tsx';

import AdminDashboard from './pages/admin/AdminDashboard.tsx';
import ProductsPage from './pages/admin/ProductsPage.tsx'; 
import OrdersPage from './pages/admin/OrdersPage.tsx';
import UsersPage from './pages/admin/UsersPage.tsx';
import RolesPage from './pages/admin/RolesPage.tsx';
import ConfigPage from './pages/admin/ConfigPage.tsx';


interface AdminRouteProps {
    children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
    const { user } = useAppContext();
    if (!user || user.role !== 'admin') {
        return <Navigate to="/mi-cuenta/admin" replace />; 
    }
    return children;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas Públicas (Cliente) */}
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/pago" element={<PaymentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />

            {/* Rutas de Autenticación */}
            <Route path="/mi-cuenta" element={<LoginPage />} /> 
            <Route path="/mi-cuenta/cliente" element={<LoginPage />} />
            <Route path="/mi-cuenta/admin" element={<LoginPage isAdminLogin={true} />} />

            {/* Rutas de Administración (Protegidas) */}
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/productos" element={<AdminRoute><ProductsPage /></AdminRoute>} />
            <Route path="/admin/ordenes" element={<AdminRoute><OrdersPage /></AdminRoute>} />
            <Route path="/admin/usuarios" element={<AdminRoute><UsersPage /></AdminRoute>} />
            <Route path="/admin/roles" element={<AdminRoute><RolesPage /></AdminRoute>} />
            <Route path="/admin/configuraciones" element={<AdminRoute><ConfigPage /></AdminRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </Router>
    );
};

export default App;