import React from "react";
import styled from 'styled-components';

const ThemedButton = styled.button`
    color: ${props => props.theme.text.secondary} 
    background-color: ${props => props.theme.button.primary} 
    
    &:hover {
        background-color: ${props => props.theme.button.secondary} 
    }
`;

export class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ThemedButton className={this.props.className}>
                {this.props.text}
            </ThemedButton>
        );
    }
}
