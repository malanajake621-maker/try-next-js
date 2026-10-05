"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("This sign-in form is not connected to an authentication service yet.");
  }

  return (
    <main className="login-shell">
      <section className="welcome-panel" aria-label="Welcome to Northstar">
        <a className="brand" href="#home" aria-label="Northstar home">
          <span className="brand-mark" aria-hidden="true">n</span>
          <span>northstar</span>
        </a>

        <div className="welcome-copy">
          <p className="eyebrow">YOUR WORKSPACE, IN FOCUS</p>
          <h1>Good work starts with a clear mind.</h1>
          <p className="welcome-description">
            Pick up where your team left off. Your next great idea is already
            waiting.
          </p>
        </div>

        <div className="orbit-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core"><span>+</span></div>
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
        </div>

        <p className="panel-footnote">Make room for what matters.</p>
      </section>

      <section className="form-panel" aria-labelledby="login-heading">
        <div className="mobile-brand brand" aria-hidden="true">
          <span className="brand-mark">n</span>
          <span>northstar</span>
        </div>

        <div className="login-content">
          <div className="form-heading">
            <p className="eyebrow">WELCOME BACK</p>
            <h2 id="login-heading">Sign in to your account</h2>
            <p className="form-subtitle">Enter your details to continue.</p>
          </div>

          <button className="google-button" type="button">
            <span className="google-mark" aria-hidden="true">G</span>
            Continue with Google
          </button>

          <div className="divider"><span>or continue with email</span></div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              required
              type="email"
            />

            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot-password">Forgot password?</a>
            </div>
            <div className="password-field">
              <input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                type={passwordVisible ? "text" : "password"}
              />
              <button
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                aria-pressed={passwordVisible}
                className="visibility-button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                type="button"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <label className="remember-option" htmlFor="remember">
              <input id="remember" name="remember" type="checkbox" />
              <span>Keep me signed in</span>
            </label>

            <button className="submit-button" type="submit">
              Sign in <span aria-hidden="true">+</span>
            </button>
            <p className="form-notice" aria-live="polite">{notice}</p>
          </form>

          <p className="signup-prompt">
            New to Northstar? <a href="#create-account">Create an account</a>
          </p>
        </div>

        <footer className="form-footer">
          <span>Copyright 2026 Northstar</span>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </footer>
      </section>
    </main>
  );
}
