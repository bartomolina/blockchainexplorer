import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTransactions } from '../store'

class Transactions extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.props.fetchTransactions(this.props.blockHash)
    }

    render() {
        const { transactions } = this.props

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Transactions</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>confirmations</th>
                            <th>time</th>
                            <th>valueOut</th>
                            <th>size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.txs.map((transaction) => (
                                <tr key={transaction.txid}>
                                    <td>{transaction.confirmations}</td>
                                    <td>{transaction.time}</td>
                                    <td>{transaction.valueOut}</td>
                                    <td>{transaction.size}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ blocks, transactions }, ownProps) => {
    console.log(transactions)
    return {
        transactions,
        blockHash: ownProps.match.params.blockHash
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransactions: (blockHash) => {
            dispatch(loadTransactions(blockHash))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)