import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from './NavBar'
import Blocks from './Blocks'
import { loadBlocks } from '../store'

class Main extends Component {
    componentDidMount() {
        this.props.fetchInitialData()
    }
    render() {
        return (
            <div className="container">
                <NavBar />
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