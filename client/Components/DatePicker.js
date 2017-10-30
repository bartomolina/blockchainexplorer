import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { loadBlocks } from '../store'

class DatePicker extends Component {

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

        return (
            <div className="container">
                <form className="col-xs-2">
                    <div className="form-group">
                        <input ref="datepicker" data-date-format="yyyy-mm-dd" id="datepicker" type="text" className="form-control" placeholder="Pick a day" />
                    </div>
                </form>
            </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)