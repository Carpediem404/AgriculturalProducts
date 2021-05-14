import 'element-plus/lib/theme-chalk/index.css';
// import what you need.
// babel 可能不会先转义ts，所以必须以js结尾

import {
  ElCard,
  ElTable,
  ElRow,
  ElButton,
  ElForm,
  ElFormItem,
  ElInfiniteScroll,
  ElLoading,
  ElTableColumn,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElSelect,
  ElOption,
  ElDialog,
  ElInput
} from 'element-plus';
// import { ElCard, ElRow, ElButton, ElInfiniteScroll, ElLoading, ElDialog,ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import { ElPagination } from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';
// 设置语言
locale.use(lang);
//
const plugins = [
  ElDialog,
  ElInput,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption
];

const components = [ElCard, ElButton, ElRow];

export const setupElement = (app, options = {}) => {
  // global register components
  components.forEach((component) => {
    app.component(component.name, component);
  });

  // use element-plus services
  plugins.forEach((plugin) => {
    app.use(plugin);
  });

  // set global options
  app.config.globalProperties.$ELEMENT = options;
};
