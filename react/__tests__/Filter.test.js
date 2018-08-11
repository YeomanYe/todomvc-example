import Filter from '../src/Filter';

let items = [{completed:true},{completed:false},{}];
describe('Filter', function() {
    it('.all', function() {
        expect(Filter.all(items)).toEqual(items);
    });
    it('.active',function () {
        expect(Filter.active(items).length).toBe(2);
    });
    it('.completed',function () {
        expect(Filter.completed(items).length).toBe(1);
    })
});
