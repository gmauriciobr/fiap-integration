import React from 'react';
import { Container } from './style'

export function TableValue({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}