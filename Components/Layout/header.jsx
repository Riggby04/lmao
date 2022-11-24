import React from "react";
import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <header>
      <nav className="container navbar navbar-expand-md  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <Image width={472/2} height={200/2} src="/logo.png"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item p-2">
    
                <Link className="nav-link active" aria-current="page" href="/oplossingen">
                  
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" href="#">
                  Over mij i gues
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
                  Contact yay
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " href="http://app.recraplan.nl" tabIndex="-1" aria-disabled="true">
                <button type="button" className="btn bt-orange">Diensten</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
