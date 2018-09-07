import React from 'react';
import TodoMainContainer from '../container/TodoMainContainer';
import TodoFooterContainer from "../container/TodoFooterContainer";
import TodoHeaderContainer from "../container/TodoHeaderContainer";

const App = () => (
    <section>
        <TodoHeaderContainer />
        <TodoMainContainer />
        <TodoFooterContainer />
    </section>
);
export default App;
