import {shallowMount} from '@vue/test-utils';
import header from '@/components/header';
import router from '@/router/index.js';

describe("Testing logo render", ()=>{
    const user = {name: 'email@gmail.com'};

    it("renders logo in header with appropriate alt", ()=>{
        let wrapper = shallowMount(header);
        expect(wrapper.find('img').attributes().alt).toBe('myocardio logo');
    });
    it("if user hasnt logged in they can register and login", ()=>{
        let wrapper = shallowMount(header, {
            props: {}
        });
        expect(wrapper.find("login") && wrapper.find("registration")).toBeTruthy();
    });
    it("if the user has logged in, then the user information will be in the header", ()=>{
        let wrapper = shallowMount(header, {
            props: {user}
        });
        expect(wrapper.text()).toMatch('email@gmail.com');
    });
});
