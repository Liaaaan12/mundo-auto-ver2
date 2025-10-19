import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css';

// Basado en mundo-auto/admin/ordenes.html
const OrdersPage = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Gestión de Órdenes</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="admin-table fade-in">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Orden</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#ORD789</td>
                                <td>Ana Rodríguez</td>
                                <td>2025-09-21</td>
                                <td>$185.000</td>
                                <td className="status-pending">Pendiente</td>
                                <td>
                                    <button className="view-btn" onClick={() => alert('Ver detalles de la orden #ORD789')}><i className="fas fa-eye"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>#ORD788</td>
                                <td>Carlos López</td>
                                <td>2025-09-20</td>
                                <td>$55.000</td>
                                <td className="status-completed">Completada</td>
                                <td>
                                    <button className="view-btn" onClick={() => alert('Ver detalles de la orden #ORD788')}><i className="fas fa-eye"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default OrdersPage;