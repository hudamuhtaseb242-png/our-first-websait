import { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // دالة لحساب مكان الماوس وتغيير زاوية البطاقة بناءً عليه
  const handleMouseMove = (e) => {
    setPosition({
      x: (e.clientX / window.innerWidth) * 30 - 15,
      y: (e.clientY / window.innerHeight) * 30 - 15,
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdf2f8', // لون خلفية وردي فاتح جداً
        overflow: 'hidden',
        perspective: '1000px' // ضروري لإعطاء البعد الثالث
      }}
    >
      <div style={{
        transform: `rotateY(${position.x}deg) rotateX(${-position.y}deg)`,
        transition: 'transform 0.1s ease-out',
        padding: '60px',
        background: 'white',
        borderRadius: '25px',
        boxShadow: '0 20px 40px rgba(255, 159, 252, 0.4)',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <h1 style={{ color: '#d946ef', fontSize: '3rem', margin: '0 0 15px 0' }}>
          متجر هدهد 🧶
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', margin: '0' }}>
          حركي الماوس فوق هذه المساحة لتري السحر! ✨
        </p>
      </div>
    </div>
  );
}

export default App;