import { DefineComponent, defineComponent, h, ref } from 'vue';
import { Response } from '@/models';

export const withRequest = (request: Response) => (component: DefineComponent) => {
  return defineComponent({
    async setup() {
      const response = await request();
      const fetchedData = ref(response);

      return { fetchedData };
    },
    render() {
      return h(component, {
        props: {
          data: this.fetchedData,
        },
      });
    },
  });
};
