// src/UserManagement.js
import React, { useState } from 'react';

const UserManagement = ({ users, setUsers }) => {
    const [formData, setFormData] = useState({ id: null, username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            // Update existing user
            setUsers(users.map(user => user.id === formData.id ? formData : user));
        } else {
            // Add new user
            const newUser = { ...formData, id: Date.now() };
            setUsers([...users, newUser]);
        }
        setFormData({ id: null, username: '', password: '' });
    };

    const handleEdit = (user) => {
        setFormData(user);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                    style={{ padding: '0.5rem', margin: '0.5rem 0' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    style={{ padding: '0.5rem', margin: '0.5rem 0' }}
                />
                <button type="submit" style={{
                    padding: '0.5rem 2rem',
                    fontSize: '1rem',
                    color: '#fff',
                    background: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}>
                    {formData.id ? 'Update User' : 'Add User'}
                </button>
            </form>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map(user => (
                    <li key={user.id} style={{ marginBottom: '1rem' }}>
                        {user.username}
                        <button onClick={() => handleEdit(user)} style={{
                            marginLeft: '1rem',
                            color: '#fff',
                            background: '#ffc107',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}>Edit</button>
                        <button onClick={() => handleDelete(user.id)} style={{
                            marginLeft: '0.5rem',
                            color: '#fff',
                            background: '#dc3545',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
