
const Eos = require('eosjs')
const fs = require('fs')

const config = {

    chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473', // Jungle Testnet  http://jungle2.cryptolions.io:80/v1/chain/get_info
    keyProvider: ['5KKZgTEo6wSg2A4bskcrNwgQtGbYd2wdxFp2bUaVmh1QQeeurPY'], // <----- existing account (active) private key that has ram cpu and bandwidth already purchased
    httpEndpoint: 'http://jungle2.cryptolions.io:80', // jungle2.0 testnet
    expireInSeconds: 60,
    broadcast: true,
    debug: true, 
    sign: true
}


config.binaryen = require("binaryen")
const eos = Eos.Testnet(config)

module.exports.buyram = () =>{


    eos.transaction(tr => {

        tr.buyrambytes({
            payer: 'secutrixdosz',
            receiver: 'secutrixdapp',
            bytes:26214
          })
         
          tr.delegatebw({
            from: 'secutrixdosz',
            receiver:'secutrixdapp',
            stake_net_quantity: '30.0000 EOS',
            stake_cpu_quantity: '30.0000 EOS',
            transfer: 0
        })
    })
}