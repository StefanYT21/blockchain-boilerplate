const Block = require('./blockchain/block');

const block = Block.mineBlock(Block.genesis(), 'roataDeCarusel');
console.log(block.toString());