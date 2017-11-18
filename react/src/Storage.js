export default class Storage{
    static key = 'react-todos';

    static init(){
        var datas = this.getItem();
        datas = datas ? datas : [];
        this.setItem(datas);
    }
    static setItem(data){
        localStorage.setItem(this.key,JSON.stringify(data));
    }
    static getItem(){
        return JSON.parse(localStorage.getItem(this.key));
    }
    static addItem(item){
        var datas = this.getItem();
        datas.push(item);
        this.setItem(datas);
    }
    static remoteItem(item){
        var datas = this.getItem();
        var index = datas.indexOf(item);
        datas.splice(index,1);
        this.setItem(datas);
    }
    static clear(){
        localStorage.remoteItem(this.key);
    }
}