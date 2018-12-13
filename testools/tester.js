const Eos = require('eosjs')


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

module.exports.uploader = () =>{

    eos.transaction("secutrixdapp", da =>{
        da.uploader("markantonysm", "education", "BAFSGAGSGGS",{ authorization: ["markantonysm"]});

}).then((da) => { 
        console.log(da.processed.block_num);
        console.log(da.processed.action_traces[0])
        console.log((da.processed.action_traces[0].console).split(";;"))
        console.log(da.processed.action_traces[0].act.data.owner)
})
   
}

module.exports.register = () =>{

    eos.transaction("secutrixdapp",da => {

            da.docregis("markantonysm","subramani","SBAGTRSD",{authorization: ["markantonysm"]});
    }).then((c) => {

        console.log(c);
    })
}


module.exports.chat = () =>{

    eos.transaction("secutrixdapp",da => {

            da.sechat("markantonysm","juliusantony","Infections",{authorization: ["markantonysm"]});
    }).then((c) => {

        console.log(c);
    })
}

module.exports.transInfo = (id) =>{

    var bloc = 2185470;
    var time = 0


    
    

       


        var flag = true;

        for(let i=0;i<10;i++){

            if(flag){

                 var c = eos.getTransaction(id,bloc+i,(err,data) => {

                if(err){
                    console.log(err);
                   // time = time + 1;
                   flag = false;
                }else{

                    console.log(data);
                   
                }
             }) 
            }
        }

       
    
       
}