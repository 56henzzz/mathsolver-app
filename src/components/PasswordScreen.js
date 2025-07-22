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
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#eef2f7',
            fontFamily: 'Segoe UI, Roboto, sans-serif'
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                width: '90%',
                maxWidth: '360px',
                textAlign: 'center',
                border: '1px solid #dde3ea'
            }}>
                <h2 style={{
                    fontSize: '1.6rem',
                    marginBottom: '1.5rem',
                    color: '#2c3e50',
                    fontWeight: '500'
                }}>
                    🔐 Acceso Privado
                </h2>
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.85rem',
                        fontSize: '1rem',
                        borderRadius: '10px',
                        border: '1px solid #ccd3dc',
                        marginBottom: '1.25rem',
                        outline: 'none',
                        transition: 'border 0.3s',
                        boxSizing: 'border-box'
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '0.85rem',
                        backgroundColor: '#2f80ed',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#1366d6'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#2f80ed'}
                >
                    Acceder
                </button>
            </div>
        </div>
    );
};

export default PasswordScreen;
