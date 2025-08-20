import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://revisionbackend.vercel.app/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      setError('Erreur lors de la récupération des utilisateurs.');
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId, newRole) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://revisionbackend.vercel.app/admin/users/${userId}/role`, { role: newRole }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(users.map(user => user._id === userId ? { ...user, role: newRole } : user));
      setMessage("Rôle de l'utilisateur mis à jour avec succès.");
    } catch (error) {
      setError('Erreur lors de la mise à jour du rôle.');
    } finally {
      setLoading(false);
    }
  };

  const deleteUserEmail = async (userId) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://revisionbackend.vercel.app/api/admin/users/${userId}/delete-email`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(users.map(user => user._id === userId ? { ...user, email: '' } : user));
      setMessage('Email supprimé avec succès.');
    } catch (error) {
      setError("Erreur lors de la suppression de l'email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {loading && <div className="text-blue-500 mb-4 text-center">Chargement...</div>}
      {message && <div className="text-green-500 mb-4 text-center">{message}</div>}
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      {/* Table responsive avec scroll horizontal sur mobile */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-sm md:text-base">
              <th className="py-2 px-4 border-b whitespace-nowrap">Email</th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Role</th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="hover:bg-gray-100 text-xs md:text-sm">
                <td className="py-2 px-4 border-b">{user.email || <span className="text-gray-500">(Supprimé)</span>}</td>
                <td className={`py-2 px-4 border-b ${user.role === 'admin' ? 'bg-red-500 text-white' : ''}`}>{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex flex-nowrap gap-2 overflow-x-auto">
                    <button onClick={() => updateUserRole(user._id, 'user')} className="px-3 py-1 bg-blue-500 text-white rounded text-xs md:text-sm whitespace-nowrap">User</button>
                    <button onClick={() => updateUserRole(user._id, 'agent')} className="px-3 py-1 bg-green-500 text-white rounded text-xs md:text-sm whitespace-nowrap">Agent</button>
                    <button onClick={() => updateUserRole(user._id, 'admin')} className="px-3 py-1 bg-red-500 text-white rounded text-xs md:text-sm whitespace-nowrap">Admin</button>
                    <button onClick={() => deleteUserEmail(user._id)} className="px-3 py-1 bg-yellow-500 text-white rounded text-xs md:text-sm whitespace-nowrap">Supprimer</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
