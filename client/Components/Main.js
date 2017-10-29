import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from './NavBar'
import Chart from './Chart'
import Blocks from './Blocks'
import { loadBlocks } from '../store'
import Loadable from 'react-loading-overlay'

class Main extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.props.fetchInitialData()
    }

    render() {
        const { loading } = this.props

        return (
            <Loadable
                active={loading}
                spinner
                text="Loading...">
                <div className="container">
                    <NavBar />
                    <Chart />
                    <Blocks />
                </div>
            </Loadable>
        )
    }
}

const mapStateToProps = ({ loading }) => {
    return {
        loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialData: () => {
            dispatch(loadBlocks('2013-02-03'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)