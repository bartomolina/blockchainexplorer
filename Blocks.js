import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Blocks = ({ blocks, fetchTransactions }) => (
    <div className="panel panel-default">
        <div className="panel-heading">Blocks</div>
        <table className="table">
            <thead>
                <tr>
                    <th>Height</th>
                    <th>Size</th>
                    <th>Time</th>
                    <th>txlength</th>
                    <th>Pool</th>
                </tr>
            </thead>
            <tbody>
                {
                    blocks.blocks.map((block) => (
                        <tr key={block.height}>
                            <th scope="row"><Link to={`/transactions/${block.hash}`}>{block.height}</Link></th>
                            <td>{block.size}</td>
                            <td>{block.time}</td>
                            <td>{block.txlength}</td>
                            <td><a href={block.poolInfo.url}>{block.poolInfo.poolName}</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

const mapStateToProps = ({ blocks }) => {
    return {
        blocks
    }
}

export default connect(mapStateToProps)(Blocks)