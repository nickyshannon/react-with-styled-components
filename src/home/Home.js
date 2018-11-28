import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { themes } from '../theme'

const Wrapper = styled.div.attrs({
    className: "existing-class-names",
})`
    padding: 20px;
    background-color: ${props => props.theme.primaryColor}; 
    color: ${props => props.theme.text.primaryColor};
`;

export class Home extends React.Component {
    render() {
        return (
            <ThemeProvider theme={themes.brand2}>
                <Wrapper>
                    <h1>home</h1>
                    <SearchBox />
                </Wrapper>
            </ThemeProvider>
        );
    }
}