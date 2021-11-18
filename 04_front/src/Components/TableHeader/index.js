import React from 'react'
import { Container } from './style'

export default function TableHeader({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}