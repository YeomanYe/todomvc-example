
export default class VisibilityAction{
    static toggle(status){
        return {
            type:this.TYPE,
            visibility:status
        }
    }
    static TYPE = 'Visibility';
    static STATUS = {
        ALL:'all',
        ACTIVE:'active',
        COMPLETED:'completed'
    };
}
