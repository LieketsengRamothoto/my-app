import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductManagement from './ProductManagement';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [users, setUsers] = useState([]); // State for users
    const [products, setProducts] = useState([
        { id: 1, name: 'Chicken Wings', category: 'Food', quantity: 50, price: 10 },
        { id: 2, name: 'Soda', category: 'Beverage', quantity: 100, price: 1.5 },
    ]);
    
    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsers([]); // Clear users on logout
    };

    return (
        <Router>
            <marquee>Limkokwing Wings Cafe</marquee>
            <div>
                <nav style={{ background: '#333', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {isAuthenticated && (
                        <>
                            <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem' }}>Dashboard</Link>
                            <Link to="/products" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem' }}>Product Management</Link>
                            <Link to="/login" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem' }} onClick={handleLogout}>Logout</Link>
                        </>
                    )}
                </nav>

                <Routes>
                    <Route 
                        path="/login" 
                        element={isAuthenticated ? <Navigate to="/dashboard" /> : (
                            <div>
                                <h2>Login</h2>
                                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                                    <input type="text" placeholder="Username" required />
                                    <input type="password" placeholder="Password" required />
                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        )}
                    />
                    <Route 
                        path="/products" 
                        element={isAuthenticated ? <ProductManagement products={products} setProducts={setProducts} /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/dashboard" 
                        element={isAuthenticated ? <Dashboard products={products} /> : <Navigate to="/login" />} 
                    />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;