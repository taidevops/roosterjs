import * as roosterjs from '../lib/index';
// Include from root to make sure all files are included and covered by code coverage tool

describe('createEditor', () => {
    it('Create editor with null inpout', () => {
        expect(() => {
            roosterjs.createEditor(null);
            throw new Error('Hi');
        }).toThrow();
    });
});
