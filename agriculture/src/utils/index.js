//小数点后保留两位
export const getDecimal = (num) => {
    const [n1, n2] = `${num}`.split('.')
    const n3 = n2.substr(0, 2)
    const result = `${n1}.${n3}`
    return typeof(num) == 'string' ? result : +result
}

//小数转百分数
export const toPercent = (point) => {
    // if (point == 0) {
    //     return 0;
    // }
    let str = Number(point * 100).toFixed();
    str += "%";
    return str;
}

//将秒数转换为时分秒的格式
export const second = (value) => {
    var theTime = parseInt(value); // 秒
    var middle = 0; // 分
    var hour = 0; // 小时

    if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }
    var result = "" + parseInt(theTime) + "s";
    if (middle > 0) {
        result = "" + parseInt(middle) + "min" + result;
    }
    if (hour > 0) {
        result = "" + parseInt(hour) + "h" + result;
    }
    return result;
}

//将秒数转换为时分秒
export const getHMS = (value) => {
    var theTime = parseInt(value); // 秒
    var middle = 0; // 分
    var hour = 0; // 小时

    if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }
    let result = {
        h: hour,
        m: middle,
        s: theTime
    }
    return result;
}