import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css'; // Asegúrate de importar los estilos de admin aquí

const AdminDashboard = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Dashboard de Administración</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="dashboard-widgets fade-in">
                    <div className="widget">
                        <h4>Total Productos</h4>
                        <p>1250</p>
                        <i className="fas fa-boxes widget-icon"></i>
                    </div>
                    <div className="widget">
                        <h4>Órdenes Pendientes</h4>
                        <p>45</p>
                        <i className="fas fa-clipboard-list widget-icon"></i>
                    </div>
                    <div className="widget">
                        <h4>Nuevos Usuarios</h4>
                        <p>12</p>
                        <i className="fas fa-user-plus widget-icon"></i>
                    </div>
                    <div className="widget">
                        <h4>Ventas del Mes</h4>
                        <p>$15,200</p>
                        <i className="fas fa-dollar-sign widget-icon"></i>
                    </div>
                </section>

                <section className="recent-activity admin-table fade-in">
                    <h3>Actividad Reciente</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Acción</th>
                                <th>Usuario</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Producto 'Volante Deportivo' añadido</td>
                                <td>Admin</td>
                                <td>2025-09-22 10:00</td>
                            </tr>
                            <tr>
                                <td>Orden #789 completada</td>
                                <td>Vendedor Juan</td>
                                <td>2025-09-21 17:30</td>
                            </tr>
                            <tr>
                                <td>Nuevo cliente registrado</td>
                                <td>Cliente Ana</td>
                                <td>2025-09-21 14:15</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;