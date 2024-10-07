import { PageWrapper } from '../components/pageWrapper';
import { TodoList } from './../components/todo';
import React from 'react';

export const TodoPage = () => {
    return (
        <PageWrapper>
            <div className="App">
                <header className="App-header">
                    <TodoList />
                </header>
            </div>
        </PageWrapper>
    );
}


