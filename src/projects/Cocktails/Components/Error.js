import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
}