import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css';

// Basado en mundo-auto/admin/productos.html
const ProductsPage = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Gestión de Productos</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="admin-table fade-in">
                    <button className="add-button" onClick={() => alert('Simulando agregar producto')}>Agregar Nuevo Producto</button>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Volante Deportivo</td>
                                <td>Accesorios</td>
                                <td>$150.000</td>
                                <td>25</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar producto 101')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar producto 101')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>Aceite Sintético</td>
                                <td>Mantenimiento</td>
                                <td>$35.000</td>
                                <td>100</td>
                                <td>
                                    <button className="edit-btn" onClick={() => alert('Editar producto 102')}><i className="fas fa-edit"></i></button>
                                    <button className="delete-btn" onClick={() => alert('Eliminar producto 102')}><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default ProductsPage;