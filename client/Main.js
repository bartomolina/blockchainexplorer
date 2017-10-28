import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Blocks from './Blocks'

const Main = () => (
    <Blocks />
)

export default Main