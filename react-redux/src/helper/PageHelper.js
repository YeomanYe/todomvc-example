export function createInputEnter(func){
    return function (evt) {
        let {keyCode,target:{value}} = evt;
        if(keyCode === 13 && value.trim()){
            func(value);
        }
    }
}
