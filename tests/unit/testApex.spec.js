import {shallowMount} from '@vue/test-utils';
import graphs from '@/views/data.vue';
import router from '@/router/index.js';

describe("Testing App components", ()=>{
    const apexFirebaseMaster = ["record1", "record2", "record3"]
    const wrapper = shallowMount(graphs, {
        props: {
          apexFirebaseMaster
        }
    });
    it("apex chart is rendered from firebase", ()=>{
        console.log(wrapper)
        expect(wrapper.find("apexFirebaseMaster")).toBeTruthy();
    });
});