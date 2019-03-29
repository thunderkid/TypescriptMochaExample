import { expect } from 'chai';
import { addery } from 'core/addery';

describe('Stack', () => {
    it('can perform addery', () => {
        const s = addery(5,6);
        expect(s).to.equal(11);
    })
});
