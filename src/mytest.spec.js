import {mount, shallowMount} from '@vue/test-utils';
import {router} from 'vue-router';
import header from '@/components/header';

/**
 * describe groups a set of tests
 * test and it keywords define a test, taking a test name and function as parameters - test and it are the same
 */

describe("Header Tests", ()=>{
    let wrapper = shallowMount(header);
    test("If user is not logged in, show the register and login buttons", ()=>{
        
        // beforeEach(()=>{
        //     wrapper = mount(header, {

        //     });
        // });
        /**unit test - "it" param1: output string, param2: function for test */



    }); /**end test */

    test("is there a router link", ()=>{
        expect(wrapper.find("div"));
    });

}); /**end describe */