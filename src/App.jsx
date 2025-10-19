import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// RUTA REPARADA
import { AppProvider, useAppContext } from './context/AppContext.jsx';

// Páginas de Cliente (Rutas verificadas)
import LoginPage from './pages/client/LoginPage.jsx'; 
import HomePage from './pages/client/HomePage.jsx';
import CatalogPage from './pages/client/CatalogPage.jsx';
import ContactPage from './pages/client/ContactPage.jsx';
import PaymentPage from './pages/client/PaymentPage.jsx';
import NosotrosPage from './pages/client/NosotrosPage.jsx';
import BlogPage from './pages/client/BlogPage.jsx';

// Páginas de Administración (Rutas verificadas)
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ProductsPage from './pages/admin/ProductsPage.jsx'; 
import OrdersPage from './pages/admin/OrdersPage.jsx';
import UsersPage from './pages/admin/UsersPage.jsx';
import RolesPage from './pages/admin/RolesPage.jsx';
import ConfigPage from './pages/admin/ConfigPage.jsx';


// Componente para proteger las rutas de administrador
const AdminRoute = ({ children }) => {
    const { user } = useAppContext();
    if (!user || user.role !== 'admin') {
        return <Navigate to="/mi-cuenta/admin" replace />; 
    }
    return children;
};

// Rutas definitivas
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

const App = () => {
    return (
        <Router>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </Router>
    );
};

export default App;