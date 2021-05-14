// shims-vue.d.ts

// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
// declare module '@vue/runtime-core' {
//   import type { IMessage } from 'element-plus/lib/el-message/src/types';
//   import type { ElMessageBoxShortcutMethod } from 'element-plus/lib/el-message-box/src/message-box.type';
//   interface ComponentCustomProperties {
//     $message: IMessage;
//     $confirm: ElMessageBoxShortcutMethod;
//   }
// }
