import React from 'react';

const Dashboard = ({ products, onLogout }) => {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, product) => sum + product.quantity, 0);

    const styles = {
        container: {
            padding: '2rem', backgroundColor: '#f5f5f5', color: '#333', borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', maxWidth: '800px', margin: '2rem auto', textAlign: 'center'
        },
        button: {
            backgroundColor: '#ff5e57', color: '#fff', border: 'none', borderRadius: '5px',
            padding: '0.6rem 1.2rem', fontSize: '1rem', cursor: 'pointer', marginBottom: '1rem'
        },
        table: {
            width: '100%', marginTop: '1.5rem', borderCollapse: 'collapse'
        },
        header: {
            backgroundColor: '#4CAF50', color: '#fff', padding: '0.8rem'
        },
        cell: (isAltRow) => ({
            padding: '0.8rem', textAlign: 'center', backgroundColor: isAltRow ? '#e8f5e9' : '#f9f9f9'
        })
    };

    return (
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <div>Total Products: {totalProducts} | Total Stock: {totalStock}</div>

            <h2>Stock Overview</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.header}>Product</th>
                        <th style={styles.header}>Category</th>
                        <th style={styles.header}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id} style={styles.cell(index % 2 === 0)}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;