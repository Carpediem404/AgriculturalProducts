// import { useStorage } from '@vueuse/core';
// import { getAllTools } from '@/services/tool';

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ToolNames } from '@/constants/index';
// import { useWebSocket } from '@vueuse/core';

export default function useWebsocketLogger(taskId: string, toolName: ToolNames) {
  //   const tools = useStorage<ToolMap>('allTools', {});
  //   const toolInfo = ref<Tool>({} as Tool);
  const log = ref('');
  const ws = new WebSocket(`ws://${window.location.host}/api/result/get_monitor_log?task_id=${taskId}&tool_name=${toolName}`);
  // const ws = new WebSocket(`ws://10.37.0.213:30118/api/result/get_monitor_log?task_id=${taskId}&tool_name=${toolName}`);
  onBeforeUnmount(() => {
    ws.close();
  });

  onMounted(() => {
    // const { state, data, send, close, ws } = useWebSocket('ws://10.37.0.213:30118/api/result/get_monitor_log');
    // console.log(data);
    console.log('object');

    ws.onopen = function (evt) {
      console.log('wi');
      console.log('Connection open ...');
      log.value = '日志文件加载中......';

      //   ws.send('Hello WebSockets!');
    };
    ws.onmessage = function (evt) {
      log.value = evt.data;
      // console.log('Received Message: ' + evt.data);
      //   ws.close();
    };

    ws.onclose = function (evt) {
      console.log('Connection closed.');
    };
    ws.onerror = function () {
      log.value = '日志文件加载失败';
    };
  });

  return { log };
}
