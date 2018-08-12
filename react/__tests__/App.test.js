import React from 'react';
import {shallow, mount, render,configure } from 'enzyme';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let allTodoNum, app;
beforeEach(function () {
    app = mount(<App/>);
    allTodoNum = app.find('.todo').length;
},0);
let enterEvent = {
  keyCode:13
};
describe('App Mount Test', function () {
    it('add todos', function () {
        let addInput = app.find('input.new-todo').at(0);
        let count = 3;
        for(let i=0;i<count;i++){
            addInput.simulate('change',{target:{value:'Todo Item '+i}});
            addInput.simulate('keydown',enterEvent)
        }
        let newLen = app.find('li.todo').length;
        expect(newLen).toEqual(allTodoNum + count);
        allTodoNum = newLen;
    });

    it('del todos', function () {
        console.log('todos',app.find('li.todo').length);
        app.find('button.destroy').at(0).simulate('click');
        let newLen = app.find('li.todo').length;
        expect(newLen).toEqual(allTodoNum - 1);
        allTodoNum = newLen;
    });

    it('complete todos', function () {
        let checkbox = app.find('input.toggle').at(0);
        console.log('checkbox.props',checkbox.props());
        checkbox.simulate('change');
        expect(app.find('li.todo.completed').length).toEqual(1);
    });

    it('active todos',function () {
        let btn = app.find('.filters a[href="#/active"]').at(0);
        btn.simulate('click');
        expect(app.find('li.todo').length).toEqual(1);
    });

    it('all todos',function () {
        let btn = app.find('.filters a[href="#/all"]').at(0);
        btn.simulate('click');
        expect(app.find('li.todo').length).toEqual(2);
    });

    it('completed todos',function () {
        let btn = app.find('.filters a[href="#/completed"]').at(0);
        btn.simulate('click');
        expect(app.find('li.todo').length).toEqual(1);
    });

    it('clear completed',function () {
        let btn = app.find('button.clear-completed').at(0);
        btn.simulate('click');
        expect(app.find('li.todo').length).toEqual(1);
    });
});
