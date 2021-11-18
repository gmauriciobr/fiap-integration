import React from 'react'
import { Container } from './style'

export default function Table({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}