import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @returns page error 404 with link to go to home page
 */

function Error404() {
  return (
    <div>
      <div className="main-error404">
        <div className="error-404">404</div>
        <div className="error-msg">
          {"Oups! La page que vous demandez n'existe pas."}
        </div>
        <Link to="/">{"Retourner sur la page d'accueil"}</Link>
      </div>
    </div>
  );
}

export default Error404;
