import React from 'react';
import {
    Dimensions, //用于获取设备屏幕的宽高
    ActivityIndicator
} from 'react-native';

var Util = {
    //屏幕尺寸
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    //总投资状态相关定义(Status)
    InvestStatus: {
        1: {
            Status: "申购成功",
            USD: "申购金额(USD)：",
        },
        3: {
            Status: "赎回中",
            USD: "赎回金额(USD)：",
        },
        4: {
            Status: "已赎回",
            USD: "赎回金额(USD)：",
        },
    },
    //分红详情状态相关(IsPut)
    DividendStatus: {
        0: {
            IsPut: "待分红",
            Display: "flex",//待分红显示份额 num
        },
        1: {
            IsPut: "分红成功",
            Display: "none",//分红成功不显示份额 num
        },
    },
    /**
     * "待确认投资/申购" 相关状态定义("我的">"待确认投资")
     */
    PurchaseStatus: {
        //status字段 (1: 申购成功(暂时未使用), 2: 未上传付款凭证, 3: 已上传付款凭证,)
        //status:2  未上传付款凭证
        2: {
            //confirm 字段
            0: "待上传凭证",
            2: "已失效", // 时间超过72小时,则申购失效
        },
        //status:3  已上传付款凭证
        3: {
            //confirm 后台是否确认(0: 待确认, 1: 确认收到, 2: 确认未收到)
            0: "待确认投资",
            1: "正在加持",
            2: "投资失败",
        },
    },
    Fund: {
        // fundid 基金ID
        1: "安心美元基金1号",
        2: "安心美元基金2号",
        3: "智盈美元宝",
        4: "安心美元基金3号",
    },
    // MD5 加密 KEY
    MD5_ENCRYPT_KEY: "SHJrhw*^&@#G",
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