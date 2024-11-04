import React, { useState } from 'react';

const UserManagement = ({ users, setUsers }) => {
    const [formData, setFormData] = useState({ id: '', username: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            const updatedUsers = users.map((user) =>
                user.id === formData.id ? formData : user
            );
            setUsers(updatedUsers);
        } else {
            setUsers([...users, { ...formData, id: Date.now() }]);
        }
        setFormData({ id: '', username: '', email: '' }); // Reset form
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="user-management" style={{ textAlign: 'center' }}>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                    style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
                />
                <button type="submit" style={{ padding: '0.5rem', background: '#2193b0', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {formData.id ? 'Update' : 'Add'} User
                </button>
            </form>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map((user) => (
                    <li key={user.id} style={{ marginBottom: '1rem' }}>
                        {user.username} - {user.email}
                        <button onClick={() => setFormData(user)} style={{ marginLeft: '1rem', padding: '0.5rem', background: '#ff4b1f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '0.5rem', padding: '0.5rem', background: '#ff4b1f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
