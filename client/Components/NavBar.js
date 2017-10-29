import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { loadBlocks } from '../store'

class NavBar extends Component {

    constructor() {
        super()
        this.onDateChange = this.onDateChange.bind(this)
    }

    onDateChange(e) {
        this.props.handleDayChange(e)
    }

    componentDidMount() {
        var _this = this
        $(ReactDOM.findDOMNode(this.refs.datepicker)).on('changeDate', function (e) {
            _this.onDateChange(e)
        })
    }

    render() {
        const { handleDayChange } = this.props

        return (<nav className="navbar navbar-default" >
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
                            <input ref="datepicker" data-date-format="yyyy-mm-dd" id="datepicker" type="text" className="form-control" placeholder="Pick a day" />
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://github.com/bartomolina/blockchainexplorer">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}

const mapStateToProps = ({ selectedDate }) => {
    return {
        selectedDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDayChange: e => {
            dispatch(loadBlocks(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)