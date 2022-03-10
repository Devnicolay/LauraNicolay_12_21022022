import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @returns page home with link to go on the user dashboard
 */

function Home() {
  return (
    <div className="home-container">
      <h1>Utilisateurs</h1>
      <div className="link">
        <Link to={"/user/12"}>User 12</Link>
        <Link to={"/user/18"}>User 18</Link>
      </div>
    </div>
  );
}

export default Home;
