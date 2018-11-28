import React from "react";
import styled from 'styled-components';
import { Button } from '../Button';

export class SearchBox extends React.Component {
    render() {
        return (
            <>
                <Button className={'primary'} />
                <Button className={'outline'} />
            </>
        );
    }
}
