const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts w/ the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });
    it('adds a new block', () => {
        const data = 'dateFalse';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });
    it('validates a valid chain', () => {
            bc2.addBlock('dateFalse');
            expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
    it('invalidates a chain with a corrupt genesis block', () => {
        bc2.chain[0].data = 'date de proasta calitate';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
    it('invalidates a corrupt chain', () => {
        bc2.addBlock('Claus');
        bc2.chain[1].data = 'Santa';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
    it('replaces the chain with a valid chain', () => {
        bc2.addBlock('mosCraciun');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).toEqual(bc2.chain);
    });
    it('does not replace the chain with one of less than or equal to length', () => {
        bc.addBlock('ceva');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).not.toEqual(bc2.chain);
    });
});