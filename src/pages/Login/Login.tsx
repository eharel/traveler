import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuth";
import styles from "./Login.module.css";
import Button from "../../components/Buttons/Button/Button";
import { FAKE_USER } from "../../types/constants";
import React, { useState } from "react";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState(FAKE_USER.email);
  const [password, setPassword] = useState(FAKE_USER.password);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    login(email, password);
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" value={email} required />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
