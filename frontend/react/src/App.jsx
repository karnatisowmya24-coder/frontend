import { useState } from "react";

function App() {
const [welcome, setWelcome] = useState("");
const [user, setUser] = useState(null);
const [error, setError] = useState("");

const API_URL = "http://127.0.0.1:8000";

async function getWelcome() {
try {
setError("");
const response = await fetch(`${API_URL}/`);
const data = await response.json();
setWelcome(data);
} catch (err) {
setError("Cannot connect to FastAPI. Please start your backend.");
}
}

async function getUsers() {
try {
setError("");
const response = await fetch(`${API_URL}/users`);
const data = await response.json();
setUser(data);
} catch (err) {
setError("Cannot fetch user details. Please check your backend.");
}
}

return ( <div style={styles.container}> <h1>FastAPI User Dashboard</h1>

```
  <div style={styles.card}>
    <h2>Welcome Message</h2>

    <button onClick={getWelcome}>
      Get Welcome Message
    </button>

    {welcome && <p>{welcome}</p>}
  </div>

  <div style={styles.card}>
    <h2>User Details</h2>

    <button onClick={getUsers}>
      Get User Details
    </button>

    {user && (
      <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Phone Number: {user.p_no}</p>
      </div>
    )}
  </div>

  {error && <p style={{ color: "red" }}>{error}</p>}
</div>

);
}

const styles = {
container: {
textAlign: "center",
fontFamily: "Arial, sans-serif",
padding: "30px",
backgroundColor: "#f4f6f9",
minHeight: "100vh",
},

card: {
backgroundColor: "white",
padding: "25px",
margin: "20px auto",
maxWidth: "400px",
borderRadius: "10px",
boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
},
};

export default App;
