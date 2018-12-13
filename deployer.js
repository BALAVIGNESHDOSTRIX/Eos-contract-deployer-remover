

const Eos = require('eosjs')
const fs = require('fs')

const config = {

    chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473', // Jungle Testnet  http://jungle2.cryptolions.io:80/v1/chain/get_info
    keyProvider: ['5JhPaeznHRtnCQqh86X2STFvmXrAv3LmCAz8Q11gJbMcAJqFjHu'], // <----- existing account (active) private key that has ram cpu and bandwidth already purchased
    httpEndpoint: 'http://jungle2.cryptolions.io:80', // jungle2.0 testnet
    expireInSeconds: 60,
    broadcast: true,
    debug: true, 
    sign: true
}


config.binaryen = require("binaryen")
const eos = Eos.Testnet(config)

var wasm = fs.readFileSync(`./contracts/HelloWorld.wasm`)
var abi = fs.readFileSync(`./contracts/HelloWorld.abi`)

module.exports.deploywasm = () =>{

    eos.setcode("secutrixdapp", 0, 0, wasm,function(err,data){
        if(err){
                
                console.log("Already the Contract is deployed" , err)
        
        }
        else{
             
                   console.log(data);
        }
        
        
        })
}

module.exports.deployabi = () =>{

    eos.setabi("secutrixdapp", JSON.parse(abi),(err,data) =>{

        if(err){
                
                console.log("Already the Contract is deployed", err)
        
        }
        else{
        
                
               console.log(data)
        }
        
        
        })        
}

module.exports.removeContract = () =>{

        eos.setcode("secutrixdapp",0,0,new Uint8Array(),(err ,data) => {

                if(err){
                    console.log("We cant remove the data",err);
                }else{
                        console.log(data)
                }
        })
}

module.exports.removeabi = () => {

        eos.setabi("secutrixdapp"," ",(err,data) => {

                if(err){
                    console.log("we cant remove the abi file",err);
                }else{
                    console.log(data)
                }
        })
}







