import {shallowMount} from '@vue/test-utils';
import App from '@/App.vue';

describe("Testing App component", ()=>{
    it("title renders correctly", ()=>{
        const wrapper = shallowMount(App);
        expect(wrapper.text()).toMatch("Blog");
    });
});