import { defineComponent, reactive, ref, watchEffect } from 'vue';
export default defineComponent({
  name: 'Input',
  setup(props) {
    // const text =reactive()
    const test = ref(1);
    // let test1 = reactive(test);
    const test1 = reactive({ count: 0 });
    console.log(props);
    console.log(test1);
    console.log(test);
    watchEffect(() => {
      console.log('object');
      console.log(test.value);
    });
    return () => (
      <>
        <h1 class='title'>{test1.count}</h1>
        <h1>{test.value}</h1>

        <button
          onClick={() => {
            test1.count++;
            test.value++;
          }}
        >
          ++
        </button>
      </>
    );
  }
});
