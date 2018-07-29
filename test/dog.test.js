let assert = require('assert');

class Dog{
    say(){
        return 'wangwang'
    }
}

let dog;
beforeEach(()=>{
    dog = new Dog();
})
describe('dog方法测试',()=>{
    it('dog的say方法',  ()=> {
        let s = dog.say();

        assert.equal('wangwang',s);
    });

})

