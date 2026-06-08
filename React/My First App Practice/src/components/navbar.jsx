import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showText, setShowText] = useState(false)

  return (
    <>
      <nav
        style={{
          background: "#0f172a",
          color: "white",
          padding: "16px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          THEFOOL
        </div>

        <ul
          style={{
            display: "flex",
            gap: "35px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              style={{ color: "white", textDecoration: "none" }}
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setShowText(!showText)}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          {showText ? "Hide Details" : "View Details"}
        </button>
      </nav>

      {showText && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            padding: "25px",
            background: "#dbeafe",
            color: "#1e3a8a",
            borderRadius: "12px",
            width: "80%",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>
            Welcome to React Event Handling 🚀
          </h2>

          <p style={{ lineHeight: "1.6" }}>
            This message appears when you click the button.
            It is a practical example of:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "15px",
            }}
          >
            <li>✅ React State (useState)</li>
            <li>✅ Event Handling (onClick)</li>
            <li>✅ Conditional Rendering</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar