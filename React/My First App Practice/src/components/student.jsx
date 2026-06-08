function Student({ name, age }) {
  return (
    <div
      style={{
        background: 'pink',
        color: 'black',
        borderRadius: '16px',
        padding: '24px',
        width: '280px',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
      }}
    >
      <img
        src="https://picsum.photos/100"
        alt="Profile"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '15px',
        }}
      />

      <h2>{name}</h2>
      <p>Age: {age}</p>

      <button
        style={{
          background: '#81b582',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        View Profile
      </button>
    </div>
  );
}

export default Student;