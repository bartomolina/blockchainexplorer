import React from 'react'
import { connect } from 'react-redux'

const Blocks = ({ blocks }) => (
    <div>
        {
            blocks ? blocks.lenth : 0
            // blocks.map(() => (
            //     <div>Block!</div>
            // ))
        }
    </div>
)

const mapStateToProps = ({ blocks }) => {
    console.log('blk...', blocks)
    return {
        blocks
    }
}

export default connect(mapStateToProps)(Blocks)