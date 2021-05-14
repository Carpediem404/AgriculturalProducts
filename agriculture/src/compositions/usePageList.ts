import { onMounted, reactive, toRefs, ref } from 'vue';
type Fetcher = (options: any) => Promise<any>;
type PageOptions = {
  page: number;
  pageSize: number;
  total: number;
  total_tested: number;
};
// 传入groupkey可对结果进行分类数量统计
export default function usePageList(fetcher: Fetcher, params: any, groupKey?: string) {
  const pageOptions = reactive<PageOptions>({
    page: 1,
    pageSize: params.pageSize || 8,
    total: 0,
    total_tested: 0,
  });
  const listData = ref<any>([]);

  const categoryCount = ref<any>({});
  const reactiveParams = toRefs(params);
  const queryOptions = reactive(params);
  const fetchList = (options: any) => {
    const { page, pageSize } = pageOptions;
    //处理all的情况

    const requestParams = { page_no: page, page_nc: pageSize, ...options };
    if (groupKey && options[groupKey] === 'All') {
      requestParams[groupKey] = '';
    }
    console.log(requestParams);
    return fetcher(requestParams).then((res) => {
      const { result, total, total_catagory, total_tested } = res.data || {};
      pageOptions.total = total;
      pageOptions.total_tested = total_tested;

      listData.value = result;
      // 处理特殊自定义值
      if (total_catagory) {
        // const pageO;
        categoryCount.value = { ...total_catagory, All: total };
      }
      if (groupKey) {
        const categoryKey = params[groupKey];
        console.log(categoryKey);
        pageOptions.total = categoryCount.value[categoryKey];
      }
    });
  };
  const queryList = (page = 1) => {
    console.log(page);
    pageOptions.page = page || 1;
    return fetchList(queryOptions);
  };
  // const refreshList = () => {

  // };
  const searchList = (keyword) => {
    // fetchList(keyword)
  };

  const handleSizeChange = (pageSize: number) => {
    pageOptions.pageSize = pageSize;
    queryList();
  };
  const handleCurrentChange = (page: number) => {
    queryList(page);
  };
  onMounted(() => {
    queryList(1).then((res) => {
      console.log(res);
    });
  });
  return { ...toRefs(pageOptions), listData, queryList, handleSizeChange, handleCurrentChange, ...reactiveParams, categoryCount };
}
