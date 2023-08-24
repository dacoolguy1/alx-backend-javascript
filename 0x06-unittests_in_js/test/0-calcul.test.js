const assert = require("assert");
// const calculateNumber = require('C:/Users/HP/Documents/alxbackend/javascript-alx/0x06-unittests_in_js/0-calcul.js');
const calculateNumber = require("../0-calcul");

const { describe } = require("mocha");

describe("calculateNumber", ()=>{
    it("should round the numbers", () => {
        assert.equal(calculateNumber(1,3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    })
})
