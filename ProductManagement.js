import React, { useState } from 'react';

const ProductManagement = ({ products, setProducts }) => {
    const [formData, setFormData] = useState({ name: '', category: '', quantity: 0, price: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            setProducts(products.map((product) => (product.id === formData.id ? formData : product)));
        } else {
            setProducts([...products, { ...formData, id: Date.now() }]);
        }
        setFormData({ name: '', category: '', quantity: 0, price: 0 });
    };

    const handleDelete = (id) => setProducts(products.filter((product) => product.id !== id));

    // Inline styling for simplicity
    const styles = {
        container: { padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', maxWidth: '500px', margin: 'auto' },
        form: { display: 'grid', gap: '0.5rem', marginBottom: '1rem' },
        input: { padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' },
        button: { padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', marginTop: '0.5rem' },
        addButton: { backgroundColor: '#28a745', color: 'white', border: 'none' },
        UpdateButton: { backgroundColor: '#007bff', color: 'white', border: 'none', marginRight: '0.3rem' },
        deleteButton: { backgroundColor: '#dc3545', color: 'white', border: 'none' },
        list: { listStyleType: 'none', padding: 0 },
        listItem: { margin: '0.5rem 0', padding: '0.5rem', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' },
    };

    return (
        <div style={styles.container}>
            <h2>Product Management</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input style={styles.input} type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input style={styles.input} type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
                <input style={styles.input} type="number" placeholder="Quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })} required />
                <input style={styles.input} type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })} required />
                <button type="submit" style={{ ...styles.button, ...styles.addButton }}>{formData.id ? 'Update' : 'Add'} Product</button>
            </form>

            <ul style={styles.list}>
                {products.map((product) => (
                    <li key={product.id} style={styles.listItem}>
                        {product.name} - {product.category} - {product.quantity} in stock
                        <button onClick={() => setFormData(product)} style={styles.editButton}>Update</button>
                        <button onClick={() => handleDelete(product.id)} style={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;
