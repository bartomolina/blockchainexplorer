import React from 'react'
import { connect } from 'react-redux'

const DatePicker = () => (
    <input id="datepicker" type="text" className="form-control" />
)

const mapStateToProps = ({ selectedDate }) => {
    return {
        selectedDate
    }
}

export default connect(mapStateToProps)(DatePicker)