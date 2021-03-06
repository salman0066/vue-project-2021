import {shallowMount} from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index.js';

describe("Testing App components", ()=>{
    const wrapper = shallowMount(App);
    it("app header is rendered", ()=>{
        expect(wrapper.find("appHeader")).toBeTruthy();
    });
    it("router view is created", ()=>{
        expect(wrapper.find("router-view")).toBeTruthy();
    });
    it("app footer is rendered", ()=>{
        expect(wrapper.find("appFooter")).toBeTruthy();
    });
});