import { useState } from "react";
import LoginForm from "./LoginForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9292/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem("user_id", data.user_id);
        
        window.location.href = "/tasks";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default Login;
