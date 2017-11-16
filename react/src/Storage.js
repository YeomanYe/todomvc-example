export default class Storage{
    static setItem(key,data){
        localStorage.setItem(key,JSON.stringify(data));
    }
    static getItem(key){
        return JSON.parse(localStorage.getItem(key));
    }
    static remoteItem(key,item){
        var datas = JSON.parse(localStorage.getItem(key));
        var index = datas.indexOf(item);
        datas.splice(index,1);
        localStorage.setItem(key,JSON.stringify(datas));
    }
    static clear(key){
        localStorage.remoteItem(key);
    }
}