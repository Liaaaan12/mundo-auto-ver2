import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css';

// Basado en mundo-auto/admin/usuarios.html
const UsersPage = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Gestión de Usuarios</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="admin-table fade-in">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>201</td>
                                <td>Juan Pérez</td>
                                <td>juan.p@email.com</td>
                                <td>Cliente</td>
                                <td className="user-active">Activo</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar usuario 201')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar usuario 201')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>202</td>
                                <td>Vendedor Andrés</td>
                                <td>andres.v@email.com</td>
                                <td>Vendedor</td>
                                <td className="user-suspended">Suspendido</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar usuario 202')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar usuario 202')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default UsersPage;