//标准时间转毫秒数
export function dateToMs(date: any) {
  const result = new Date(date).getTime();
  return result;
}
export function formatCostTime(value: any) {
  // const value = dateToMs(date);
  let theTime = Number(value) / 1000; // 需要转换的时间秒
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
    result = '' + Number(theTime) + '秒';
  }
  if (theTime1 > 0) {
    result = '' + Number(theTime1) + '分' + result;
  }
  if (theTime2 > 0) {
    result = '' + Number(theTime2) + '小时' + result;
  }
  if (theTime3 > 0) {
    result = '' + Number(theTime3) + '天' + result;
  }
  return result;
}
