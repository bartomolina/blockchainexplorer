import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Blocks from './Blocks'

const Main = () => (
    <div>
        BLOCKS!
        <input id="datepicker" type="text" className="form-control" />
    </div>
)

export default Main