import Storage from '../src/Storage';

Storage.init();

describe('Storage', function() {
    it('.addItem', function() {
        Storage.addItem('abc');
        expect(Storage.getItem().length).toEqual(1);
        Storage.clear();
    });
    it('.removeItem',function () {
        Storage.addItem('abc');
        Storage.addItem('def');
        Storage.removeItem('abc');
        expect(Storage.getItem().length).toEqual(1);
        Storage.clear();
    });
    it('.removeItemArr',function () {
        Storage.addItem('abc');
        Storage.addItem('def');
        Storage.removeItemArr(['abc','']);
        expect(Storage.getItem().length).toEqual(1);
        Storage.clear();
    });
});
