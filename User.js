import React, { useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ id: null, username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            // Update user
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
        } else {
            // Add new user
            setUsers([...users, { ...formData, id: Date.now() }]);
        }
        setFormData({ id: null, username: '', password: '' }); // Reset form
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />
                <button type="submit">{formData.id ? 'Update' : 'Add'} User</button>
            </form>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username}
                        <button onClick={() => setFormData(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;
