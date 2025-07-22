import React, { useState } from 'react';

const PasswordScreen = ({ onAccess }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input === process.env.REACT_APP_PASSWORD) onAccess();
        else alert('Contraseña incorrecta');
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f4f6f8',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: '90%',
                maxWidth: '320px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#333' }}>
                    Acceso Seguro 🔒
                </h2>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: '#4a90e2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    Acceder
                </button>
            </div>
        </div>
    );
};

export default PasswordScreen;
