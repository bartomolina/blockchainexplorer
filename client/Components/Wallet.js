import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import QrReader from 'react-qr-reader'

const Wallet = ({ blocks, sendMoney, handleError, handleScan }) => (
    <div>
        <QrReader
            delay="100"
            style={{ height: 240, width: 320 }}
            onError={handleError}
            onScan={handleScan}
        />
        <input type="button" onClick={sendMoney} value="Send Money" />
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        sendMoney: e => {
            return axios.post(`/wallet`, {})
                .catch(err => console.log(err))
        },

        handleError: e => {

        },

        handleScan: e => {

        }
    }
}

const mapStateToProps = ({ blocks }) => {
    return {
        blocks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)