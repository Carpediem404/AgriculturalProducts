import dayjs from 'dayjs';
// 或者 CommonJS
// var dayjs = require('dayjs');
export const formatDate = (date: any) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
export const millSeconds = (date: any) => {
  return dayjs(date).unix();
};
export const handleListData = (list: any) => {
  return list.map((item: any) => {
    for (const key in item) {
      if (/time/.test(key)) {
        item[key] = formatDate(item[key]);
      }
    }
    return item;
  });
};
export function diffTime(date1: any, date2: any) {
  const value1 = dayjs(date1);
  const value2 = dayjs(formatDate(date2));
  const diff = value2.diff(value1); //2-1
  return diff;
}
export function formatCostTime(diff: any) {
  // const value = dateToMs(date);
  // const value1 = dayjs(date1);
  // const value2 = dayjs(formatDate(date2));
  // const diff = value2.diff(value1);
  // console.log(diff);
  // console.log('开始时间', value1);
  // console.log('开始时间', value2);
  let theTime = Number(diff / 1000);
  let theTime1 = 0; // 分
  let theTime2 = 0; // 小时
  let theTime3 = 0; // 天
  if (theTime > 60) {
    theTime1 = Number(theTime / 60);
    theTime = Number(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = Number(theTime1 / 60);
      theTime1 = Number(theTime1 % 60);
      if (theTime2 > 24) {
        //大于24小时
        theTime3 = Number(theTime2 / 24);
        theTime2 = Number(theTime2 % 24);
      }
    }
  }
  let result = '';
  if (theTime > 0) {
    result = '' + Math.floor(Number(theTime)) + '秒';
  }
  if (theTime1 > 0) {
    result = '' + Math.floor(Number(theTime1)) + '分' + result;
  }
  if (theTime2 > 0) {
    result = '' + Math.floor(Number(theTime2)) + '小时' + result;
  }
  if (theTime3 > 0) {
    result = '' + Math.floor(Number(theTime3)) + '天' + result;
  }
  // console.log(result);
  return result;
}
// formatCostTime(1145000);
