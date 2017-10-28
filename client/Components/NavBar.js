import React from 'react'
import { connect } from 'react-redux'

const NavBar = () => (
    <nav className="navbar navbar-default">
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
                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input id="datepicker" type="text" className="form-control" placeholder="Pick a day" />
                    </div>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="https://github.com/bartomolina/blockchainexplorer">GitHub</a></li>
                </ul>
            </div>
        </div>
    </nav>
)

const mapStateToProps = ({ selectedDate }) => {
    return {
        selectedDate
    }
}

export default connect(mapStateToProps)(NavBar)