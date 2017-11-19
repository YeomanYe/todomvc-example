export default class Storage {
    static key = 'react-todos';
    static datas = null;

    static init() {
        var datas = this.getItem();
        datas = datas ? datas : [];
        this.setItem(datas);
        this.datas = datas;
    }
    static updateItem() {
        localStorage.setItem(this.key, JSON.stringify(this.datas));
    }
    static setItem(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
    static getItem() {
        return JSON.parse(localStorage.getItem(this.key));
    }
    static addItem(item) {
        var datas = this.datas;
        if (!datas) datas = this.getItem();
        datas.push(item);
        this.setItem(datas);
    }
    static remoteItem(item) {
        var datas = this.datas;
        if (!datas) datas = this.getItem();
        var index = datas.indexOf(item);
        datas.splice(index, 1);
        this.setItem(datas);
        console.log(datas);
    }
    static removeItemArr(itemArr) {
        var datas = this.datas;
        if (!itemArr.length) return;
        for (var item of itemArr) {
            var index = datas.indexOf(item);
            datas.splice(index, 1);
        }
        this.setItem(datas);
        console.log(datas);
    }
    static clear() {
        localStorage.remoteItem(this.key);
        this.datas = null;
    }
}