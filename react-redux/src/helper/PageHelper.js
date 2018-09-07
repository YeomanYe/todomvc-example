export function createInputEnter(func){
    return function (evt) {
        let {keyCode,target:{value}} = evt;
        if(keyCode === 13 && value.trim()){
            func(value);
        }
    }
}

/**
 * 绑定表单输入创造器工厂
 * @param self
 * @returns {function(*=): Function}
 */
export function changeHandlerFactory(self) {
    return function (name) {
        let onChange =  e => {
            let val = e;
            if(e && e.target) val = e.target.value;
            self.setState({[name]: val});
        };
        return {onChange,value:self.state[name]};
    }
}
