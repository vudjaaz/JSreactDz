import { PageWrapper } from '../components/pageWrapper';
import { TemperatureConverter } from './../components/temperatureConverter';
import React from 'react';

export const ConverterPage = () => {
    return (
        <PageWrapper>
            <div className="App">
                <header className="App-header">
                    <TemperatureConverter />
                </header>
            </div>
        </PageWrapper>
    );
}


