import React from 'react'
import { Container } from './style'

export default function TableLine({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}