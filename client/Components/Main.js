import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatePicker from './DatePicker'
import Blocks from './Blocks'
import { loadBlocks } from '../store'

class Main extends Component {
    componentDidMount() {
        this.props.fetchInitialData()
    }
    render() {
        return (
            <div className="container">
                <DatePicker />
                <Blocks />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialData: () => {
            dispatch(loadBlocks())
        }
    }
}

export default connect(null, mapDispatchToProps)(Main)