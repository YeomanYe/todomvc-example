/**
 * 数组工具类
 * **/
export default class ArrayUtil {
    /**
     * 是否有子字符串在数组中
     * @param  {} arr 数组
     * @param  {} str 字符串
     * @return {bool}     是否含有
     */
    static substrInArr(arr, str) {
        for (let item of arr) {
            if (str.indexOf(item) > -1) return true;
        }
        return false;
    }

    /**
     * 是否对象在数组中
     * @param arr
     * @param obj
     */
    static objEqArr(arr,obj){
        let entries = Object.entries(obj);
        let flag;//标志是否找到匹配元素
        for(let i=0,len=arr.length;i<len;i++){
            let item = arr[i];
            flag = true;
            for(let entry of entries){
                let [key,val] = entry;
                if(item[key] !== val) {
                    flag = false;
                    break;
                }
            }
            if(flag) return i;
        }
        return -1;
    }

    /**
     * 获取与对象相同的元素组成的数组
     * @param arr
     * @param obj
     */
    static getArrByObj(arr,obj){
        let retArr = arr.filter((item)=>{
            let entries = Object.entries(obj);
            let flag = true;
            for(let entry of entries){
                let [key,val] = entry;
                if(item[key] !== val) {
                    flag = false;
                    break;
                }
            }
            if(flag) return item;
        });
        return retArr || [];
    }
}
