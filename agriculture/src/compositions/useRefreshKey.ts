// 会存在toolid更新的问题
import { ref, reactive } from 'vue';
type valueof<T> = T[keyof T];

type TupleToObj<T extends readonly any[]> = {
  [P in T[number]]: number;
};

// const a = ['a', 'b', 'c'] as const;

// type b = TupleToObj<typeof a>;

export default function useRefreshKey<T extends readonly string[]>(array: T) {
  //   const a = array as const;
  type b = TupleToObj<typeof array>;
  //   const componentKeys: { [K]: number } = {} as { [key in K]: number };
  //   //   const componentKeys = reactive<{ [key: string]: number }>({});

  function refresh(key: any) {
    componentKeys[key] = componentKeys[key] + 1;
    // componentKey.value = componentKey.value += 1;
  }

  const componentKeys = {} as b;
  return { componentKeys, refresh };
}
// const a = ['s', 'd'] as const;
// const { componentKeys } = useRefreshKey(['s', 'd'] as const);
// componentKeys.;
