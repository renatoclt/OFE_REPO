var assert = require('chai').assert;
var calculator = require('../../app/calculator');

describe("{\"titulo\": \"Calculator test using ASSERT interface from CHAI module\", \"backlog\": \"OFE-001-001\",  \"AsignarA\": \"JOSE FELIX\"}", function(){
            it("", function(){
                result = calculator.addTested("text");
                assert.equal(result, "text tested");
            });
            it("", function(){
                result   = calculator.addTested("text");
                assert.typeOf(result, "string");                
            });
            it("", function() {
                result   = calculator.addTested("text");
                assert.lengthOf(result, 11);
            }); 
        });