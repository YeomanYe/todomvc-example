export default class Storage {
    static key = 'react-redux-todos';
    static datas = null;

    static init() {
        let datas = this.getItem();
        datas = datas ? datas : [];
        this.setItem(datas);
        this.datas = datas;
        return datas;
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
        let datas = this.datas;
        if (!datas) datas = this.getItem();
        datas.push(item);
        this.setItem(datas);
    }
    static removeItem(item) {
        let datas = this.datas;
        if (!datas) datas = this.getItem();
        let index = datas.indexOf(item);
        datas.splice(index, 1);
        this.setItem(datas);
        console.log(datas);
    }
    static removeItemArr(itemArr) {
        let datas = this.datas;
        if (!itemArr.length) return;
        for (let item of itemArr) {
            let index = datas.indexOf(item);
            if(index >= 0) datas.splice(index, 1);
        }
        this.setItem(datas);
        console.log(datas);
    }
    static clear() {
        this.setItem([]);
        this.datas = [];
    }
}
