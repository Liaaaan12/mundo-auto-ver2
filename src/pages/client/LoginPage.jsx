import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/common/Header.jsx'; 
import Footer from '../../components/common/Footer.jsx';
import { useAppContext } from '../../context/AppContext.jsx';

const LoginPage = ({ isAdminLogin = false }) => {
    const { login, register, user } = useAppContext();
    const navigate = useNavigate();

    // Redirigir si ya está autenticado
    if (user) {
        navigate(user.role === 'admin' ? '/admin' : '/');
        return null;
    }

    // Estado de formularios
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regAge, setRegAge] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const success = login(loginUsername, loginPassword, isAdminLogin);
        if (success) {
            navigate(isAdminLogin ? '/admin' : '/');
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const success = register(regUsername, regPassword, parseInt(regAge));
        if (success) {
            setRegUsername(''); setRegPassword(''); setRegAge('');
        }
    };

    // Vista de Login de Administrador (USANDO DIV EN LUGAR DE BODY)
    if (isAdminLogin) {
        return (
            <div className="login-page"> 
                <div className="login-container fade-in">
                    <div className="login-box">
                        <h2>Acceso de Administrador</h2>
                        <form id="login-form" onSubmit={handleLogin}>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" id="login-username" placeholder="Usuario" required value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" id="login-password" placeholder="Contraseña" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="login-btn">Iniciar Sesión</button>
                        </form>
                        <p className="back-link"><Link to="/mi-cuenta">Volver a selección de perfil</Link></p>
                    </div>
                </div>
            </div>
        );
    }
    
    // Vista de Selección de Perfil (Ruta /mi-cuenta)
    const isRoleSelection = window.location.pathname === '/mi-cuenta';
    if (isRoleSelection) {
        return (
            <>
                <Header />
                <main>
                    <section className="account-section fade-in">
                        <div className="account-container">
                            <h2>Selecciona tu perfil</h2>
                            <div className="role-selection-grid">
                                <Link to="/mi-cuenta/cliente" className="role-button">
                                    <i className="fas fa-user-circle"></i> <span>Cliente</span>
                                </Link>
                                <Link to="/mi-cuenta/admin" className="role-button">
                                    <i className="fas fa-user-shield"></i> <span>Administrador</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    // Vista de Login/Registro de Cliente (Ruta /mi-cuenta/cliente)
    return (
        <>
            <Header />
            <main>
                <section className="account-section fade-in">
                    <div className="account-container">
                        <h2>Iniciar Sesión Cliente</h2>
                        <form id="login-form" onSubmit={handleLogin}>
                            <label htmlFor="login-username">Usuario:</label>
                            <input type="text" id="login-username" required value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                            <label htmlFor="login-password">Contraseña:</label>
                            <input type="password" id="login-password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                            <button type="submit">Iniciar Sesión</button>
                        </form>

                        <h2>Registrarse</h2>
                        <form id="register-form" onSubmit={handleRegister}>
                            <label htmlFor="reg-username">Usuario:</label>
                            <input type="text" id="reg-username" required value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
                            <label htmlFor="reg-password">Contraseña:</label>
                            <input type="password" id="reg-password" required value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
                            <label htmlFor="reg-age">Edad:</label>
                            <input type="number" id="reg-age" required value={regAge} onChange={(e) => setRegAge(e.target.value)} />
                            <button type="submit">Registrarse</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;