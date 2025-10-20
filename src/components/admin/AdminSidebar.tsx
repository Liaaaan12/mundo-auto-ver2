import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.tsx';

const AdminSidebar: React.FC = () => {
    const { logout } = useAppContext();
    
    const handleLogout = () => {
        logout();
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><NavLink to="/admin" end><i className="fas fa-tachometer-alt"></i> Dashboard</NavLink></li>
                    <li><NavLink to="/admin/productos"><i className="fas fa-boxes"></i> Productos</NavLink></li>
                    <li><NavLink to="/admin/ordenes"><i className="fas fa-clipboard-list"></i> Órdenes</NavLink></li>
                    <li><NavLink to="/admin/usuarios"><i className="fas fa-users"></i> Usuarios</NavLink></li>
                    <li><NavLink to="/admin/roles"><i className="fas fa-user-tag"></i> Roles</NavLink></li>
                    <li><NavLink to="/admin/configuraciones"><i className="fas fa-cogs"></i> Configuraciones</NavLink></li>
                    <li>
                        <a href="#" className="logout-link" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default AdminSidebar;