import { Blockchain } from './blockchain'

const difficulty = Number(process.argv[2]) || 4;
const blockchain = new Blockchain(difficulty)

const numBlocos = Number(process.argv[2]) || 10;
let chain = blockchain.chain

for ( let i = 1; i <= numBlocos; i++ ) {
    const bloco = blockchain.criarBloco(`Bloco ${i}`)
    const mineInfo = blockchain.minerarBloco(bloco)

    chain = blockchain.enviarBloco(mineInfo.blocoMinerado)
}

console.log(`Chain: ${JSON.stringify(chain)}`)