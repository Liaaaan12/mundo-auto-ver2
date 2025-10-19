import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css';

// Basado en mundo-auto/admin/roles.html
const RolesPage = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Gestión de Roles</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="admin-table fade-in">
                    <h3>Lista de Roles</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre del Rol</th>
                                <th>Descripción</th>
                                <th>Permisos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Administrador</td>
                                <td>Acceso total al sistema</td>
                                <td>Todos</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar rol: Administrador')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar rol: Administrador')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Vendedor</td>
                                <td>Gestión de órdenes y clientes</td>
                                <td>Ver/Editar/Eliminar Órdenes, Clientes</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar rol: Vendedor')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar rol: Vendedor')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default RolesPage;