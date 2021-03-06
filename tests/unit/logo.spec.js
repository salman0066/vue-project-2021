import logo from '@/assets/logo.png'
import {shallowMount} from '@vue/test-utils';
import header from '@/components/header';

describe("Testing logo render", ()=>{
    it("renders logo in header with appropriate alt", ()=>{
        const wrapper = shallowMount(header);
        // expect(wrapper.find("img").prop("src")).toEqual(logo);
        
        console.log("logo attributes: ", wrapper.find('img').attributes());
        expect(wrapper.find('img').attributes().alt).toBe('myocardio logo');
    })
});