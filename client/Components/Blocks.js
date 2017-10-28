import React from 'react'
import { connect } from 'react-redux'

const Blocks = () => (
    <div>
        Blocks!
    </div>
)

const mapStateToProps = ({ blocks }) => {
    return {
        blocks
    }
}

export default connect(mapStateToProps)(Blocks)