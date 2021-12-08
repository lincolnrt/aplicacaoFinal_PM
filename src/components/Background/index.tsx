import React, { ReactNode } from 'react'
import { Container } from './styles'
import { theme } from '../../global/styles/theme'

interface Props {
    children: ReactNode
}


export function Background({children}: Props) {
    const { primary, heading  } = theme.colors
    return(
        <Container 
            colors={[primary, heading]}
        >
            {children}
        </Container>
    )
}