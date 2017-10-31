const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const bitcore = require('bitcore-lib')
const Insight = require("bitcore-explorers").Insight;
const insight = new Insight("livenet");

let config = process.env
try {
    config = require('./env.json')
}
catch (ex) {
}

app.use(function (req, res, next) {
    res.locals.WALLET_KEY = config.WALLET_KEY
    next()
})
app.use(bodyParser.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.post('/wallet', (req, res, next) => {
    var privateKey = bitcore.PrivateKey.fromWIF(res.locals.WALLET_KEY)
    var sourceAddress = privateKey.toAddress(bitcore.Networks.livenet)
    const targetAddress = bitcore.Address(req.body.address)
    
    insight.getUnspentUtxos(sourceAddress, function (error, utxos) {
        if (error) {
            console.log(error)
        } else {
            console.log(utxos)
            var tx = new bitcore.Transaction()
            tx.from(utxos)
            tx.to(targetAddress, 8000)
            tx.change(sourceAddress)

            tx.sign(privateKey)
            const transaction = tx.serialize()
            console.log(tx)
            insight.broadcast(transaction, function(error, transactionId) {
              if (error) {
                console.log(error);
              } else {
                console.log(transactionId);
              }
            })
        }
    })
})

app.listen(process.env.PORT || 3000)
