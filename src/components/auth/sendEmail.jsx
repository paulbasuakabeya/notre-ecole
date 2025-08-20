import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://revisionbackend.vercel.app/api/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const handleSendEmail = () => {
    const token = localStorage.getItem('token');
    axios.post('https://revisionbackend.vercel.app/api/email/send', {
      subject,
      message,
      recipients: selectedRecipients === 'all' || selectedRecipients === 'admins' ? selectedRecipients : recipients
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        alert('Emails sent successfully!');
      })
      .catch(error => {
        console.error('There was an error sending the emails!', error);
      });
  };

  const handleRecipientChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setRecipients(selected);
    setSelectedRecipients(selected.length === 0 ? 'all' : selected);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Send Email</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Subject:</label>
        <input 
          type="text" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message:</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-md h-32"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Recipients:</label>
        <select 
          multiple 
          onChange={handleRecipientChange} 
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Users</option>
          <option value="admins">Admins</option>
          {users.map(user => (
            <option key={user._id} value={user.email}>{user.email}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={handleSendEmail} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Send Email
      </button>
    </div>
  );
};

export default SendEmail;