const express = require('express')
const app = express()
const path = require('path')
const bitcore = require('bitcore-lib')

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

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.post('/wallet', (req, res, next) => {
    console.log(res.locals.WALLET_KEY)

    var privateKeyWIF = 'cQN511BWtc2dSUMWySmZpr6ShY1un4WK42JegGwkSFX5a8n9GWr3';
    var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
    privateKey = bitcore.PrivateKey.fromString("xpub68dkX7ZuKJr6983a59rdhpuVwwYnW8SeGy44qMTTC2Lajzou6oudZcNSWRrMBZvGMsMMGtjW1gs1LQEK2rDj24RegJuFhsKB8fpu71FiR5s");
    var sourceAddress = privateKey.toAddress(bitcore.Networks.livenet);

    
    // var sourceAddress = privateKey.toAddress(bitcore.Networks.livenet);
    console.log(sourceAddress)
})

app.listen(process.env.PORT || 3000)
