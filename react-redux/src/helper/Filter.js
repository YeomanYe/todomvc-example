export default class Filter{
    static all(items){
        return items
    }
    static active(items){
        console.log('active',items);
        if(items){
            return items.filter(item=> !item.completed);
        }
    }
    static completed(items){
        if(items){
            return items.filter(item => item.completed);
        }
    }
}