import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import NavBar from './NavBar'
import Chart from './Chart'
import Blocks from './Blocks'
import { loadBlocks } from '../store'
import Loadable from 'react-loading-overlay'
import DatePicker from './DatePicker'
import Wallet from './Wallet'

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
                    <Route exact path="/" component={DatePicker} />
                    <Route exact path="/" component={Chart} />
                    <Route exact path="/" component={Blocks} />
                    <Route exact path="/wallet" component={Wallet} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))