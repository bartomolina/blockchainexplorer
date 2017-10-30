import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'


const NavBar = () => (<nav className="navbar navbar-default" >
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">BlockchainExplorer</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink
                        activeClassName="active"
                        className="nav-link"
                        exact to="/">Blocks</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        activeClassName="active"
                        className="nav-link"
                        exact to="/wallet">Wallet</NavLink>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://github.com/bartomolina/blockchainexplorer">GitHub</a></li>
            </ul>
        </div>
    </div>
</nav>)

export default NavBar