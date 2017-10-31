import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import QrReader from 'react-qr-reader'

class Wallet extends Component {

    constructor() {
        super()
        this.state = {
            destWallet: ''
        }

        this.scan = this.scan.bind(this)
        this.errorScanning = this.errorScanning.bind(this)
        this.handleSendMoney = this.handleSendMoney.bind(this)
    }

    handleSendMoney(e) {
        console.log(this.state.destWallet)
        this.props.sendMoney(this.state.destWallet)
    }

    scan(e) {
        if (e)
            this.setState({ destWallet: e.slice(8) })
    }

    errorScanning(e) {
        if (e)
            alert(e)
    }

    render() {
        const { blocks, sendMoney } = this.props
        const { destWallet } = this.state
        const { scan, errorScanning, handleSendMoney } = this

        return (
            <div className="container">
                <QrReader
                    delay={100}
                    style={{ height: 240, width: 320 }}
                    onScan={scan}
                    onError={errorScanning}
                />
                <br />
                <input type="text" value={destWallet} className="walletInput" />
                <br />
                <br />
                <input type="button" onClick={handleSendMoney} value="Send Money" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMoney: address => {
            console.log(address)
            return axios.post(`/wallet`, { address })
                .catch(err => console.log(err))
        }
    }
}

export default connect(null, mapDispatchToProps)(Wallet)