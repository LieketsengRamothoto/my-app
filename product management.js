import React, { useState } from 'react';
import '../App.css';

const ProductManagement = ({ products, setProducts }) => {
    const [formData, setFormData] = useState({ name: '', category: '', quantity: 0, price: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            const updatedProducts = products.map((product) =>
                product.id === formData.id ? formData : product
            );
            setProducts(updatedProducts);
        } else {
            setProducts([...products, { ...formData, id: Date.now() }]);
        }
        setFormData({ name: '', category: '', quantity: 0, price: 0 });
    };

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="product-management">
            <h2>Product Management</h2>
            <form onSubmit={handleSubmit} className="styled-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    required
                />
                <button type="submit" className="form-button">
                    {formData.id ? 'Update' : 'Add'} Product
                </button>
            </form>

            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.category} - {product.quantity} in stock
                        <button onClick={() => setFormData(product)} className="edit-button">Edit</button>
                        <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;
