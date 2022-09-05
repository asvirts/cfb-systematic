// Here's where all the teams go

// Alabama Crimson Tide
let alabamaRanking = db.mongodbVSCodePlaygroundDB.sales.findOne({_id: '1'}, {item: 'Alabama Crimson Tide'}).distinct('rank')
let alabamaScores = [55]
let alabamaOpponentScores = [0]
let alabamaSoS = 1
document.querySelector("#Alabama").innerHTML = alabamaRanking
document.querySelector("#alabamaSoS").innerHTML = alabamaSoS

// Auburn Tigers
let auburnRanking = 6
let auburnScores = [42]
let auburnOpponentScores = [16]
let auburnSoS = 2
document.querySelector("#Auburn").innerHTML = auburnRanking
document.querySelector("#auburnSoS").innerHTML = auburnSoS

// Florida Gators
let floridaRanking = 7
let floridaScores = [29]
let floridaOpponentScores = [26]
let floridaSoS = 5
document.querySelector("#Florida").innerHTML = floridaRanking
document.querySelector("#lforidaSoS").innerHTML = floridaSoS

// Notre Dame Fighting Irish
let notreDameRanking = 5
let notreDameScores = [10]
let notreDameOpponentScores = [21]
let notreDameSoS = 3
document.querySelector("#NotreDame").innerHTML = notreDameRanking
document.querySelector("#notreDameSoS").innerHTML = notreDameSoS

// Ohio State Buckeyes
let ohioStateRanking = 2
let ohioStateScores = [21]
let ohioStateOpponentScores = [10]
let ohioStateSoS = 4
document.querySelector("#OhioState").innerHTML = ohioStateRanking
document.querySelector("#ohioStateSoS").innerHTML = ohioStateSoS