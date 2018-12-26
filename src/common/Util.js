import React from 'react';
import {
    Dimensions, //用于获取设备屏幕的宽高
    ActivityIndicator,
    PixelRatio,
    Platform,
} from 'react-native';

var Util = {
    //屏幕尺寸相关
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        onePixel: 1 / PixelRatio.get(),
        statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
    },
    /*
    * Get请求
    * successCallback 请求成功的回调函数
    * failCallback 请求失败的回调函数
    * */
    getRequest: function (url, successCallback, failCallback){
        console.log("GET_URL: " + url);
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                return successCallback(responseJson);
            }).catch(error => {
            return failCallback(error);
        })
    },
    /*
    * Post 请求
    * */
    postRequest: function(url, successCallback, failCallback, headerBody){
        console.log("POST_URL: " + url);
        fetch(url, {
            method: "POST",
            /*headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },*/
            body: headerBody,
        }).then(response => response.json())
            .then(responseJson => {
                return successCallback(responseJson);
            }).catch(error => {
            failCallback(error);
        })
    },
    //loading 效果
    loading: <ActivityIndicator style={{marginTop: 200}}/>,
    //浮点型数值格式化 (供外部调用)
    numberFormat: function(num){
        return this.number_format_inter(num, 2, true);
    },
    /**
     * 浮点数格式化(带正负号,千分位)
     * @param num 要格式化的数值
     * @param cent  保留几位小数
     * @param isThousand 是否格式化千分位(小数点前)
     * @returns {string} 返回格式化后的数
     */
    //var num=number_format(1234567.089, 2, true);//1,234,567.09
    number_format_inter: function (num, cent, isThousand) {
        //num = (num + '').replace(/[^0-9+-Ee.]/g, '');
        num = (num + '').replace(/\$|\,/g,'');

        // 检查传入数值为数值类型
        if(isNaN(num))
            num = "0";

        // 获取符号(正/负数)
        var sign = (num == (num = Math.abs(num)));

        num = Math.floor(num*Math.pow(10,cent)+0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
        var cents = num%Math.pow(10,cent);       // 求出小数位数值
        num = Math.floor(num/Math.pow(10,cent)).toString();  // 求出整数位数值
        cents = cents.toString();        // 把小数位转换成字符串,以便求小数位长度

        // 补足小数位到指定的位数
        while(cents.length<cent)
            cents = "0" + cents;

        if(isThousand) {
            // 对整数部分进行千分位格式化.
            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
        }

        if (cent > 0)
            return (((sign)?'':'-') + num + '.' + cents);
        else
            return (((sign)?'':'-') + num);
    },
    /**
     * 求两个数的百分比(保留两位小数)
     * @param num   当前数 (可为负)
     * @param total 总数 (小于等于0则返回 "0%")
     * @returns {string} 返回百分比(带"%"号)
     */
    getPercent: function(num, total) {
        num = parseFloat(num);
        total = parseFloat(total);
        if (isNaN(num) || isNaN(total)) {
            return "-";
        }
        return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00)+"%";
    },

    /*
    * 获取两个时间的时间差(小时)
    * 两个参数没有先后顺序
    * 传入时间格式为Date类型: "2016/03/28 10:17:22"
    * 如果为 "2016-03-28 10:27:00", 可使用: new Date(value.finishtime.replace(/-/g, "/")) 替换其中的"-"
    * 例子: Util.getInervalHour(new Date(), new Date(value.finishtime.replace(/-/g, "/")))
    * */
    getInervalHour: function(startDate, endDate) {
        var ms = Math.abs(endDate.getTime() - startDate.getTime());
        return Math.floor(ms/1000/60/60);
    },
}
export default Util;