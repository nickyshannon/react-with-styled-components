import React from "react";
import styled from 'styled-components';

const Wrapper = styled.button.attrs({
    className: props => props.className,
})`
    color: ${props => props.theme.button.primaryColor} 
    background-color: ${props => props.theme.button.primaryBackgroundColor} 
    
    &:hover {
        background-color: ${props => props.theme.button.secondaryBackgroundColor} 
    }
`;

export class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper className={this.props.className}>Search</Wrapper>
        );
    }
}
