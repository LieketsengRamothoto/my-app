import React, { useState } from 'react';

const UserManagementPage = ({ users, setUsers }) => {
    const [formData, setFormData] = useState({ username: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, { ...formData, id: Date.now() }]);
        setFormData({ username: '', email: '' }); // Reset form
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
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
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;