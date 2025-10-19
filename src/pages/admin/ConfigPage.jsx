import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import '../../styles/admin.css';

// Basado en mundo-auto/admin/configuraciones.html
const ConfigPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Configuraciones guardadas');
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="main-content">
                <header className="main-header">
                    <h2>Configuraciones del Sistema</h2>
                    <div className="user-info">
                        <span>Bienvenido, Administrador</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <section className="admin-table fade-in">
                    <h3>Ajustes Generales</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="site-name">Nombre del Sitio</label>
                            <input type="text" id="site-name" defaultValue="Mundo Repuestos" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="currency">Moneda por Defecto</label>
                            <input type="text" id="currency" defaultValue="CLP" />
                        </div>
                        <button type="submit" className="add-button">Guardar Cambios</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default ConfigPage;