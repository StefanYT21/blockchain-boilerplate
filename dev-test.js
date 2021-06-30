const Block = require('./block');

const block = Block.mineBlock(Block.genesis(), 'roataDeCarusel');
console.log(block.toString());