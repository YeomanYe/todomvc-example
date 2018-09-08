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
    static setItem(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
    static getItem() {
        return JSON.parse(localStorage.getItem(this.key));
    }
}
