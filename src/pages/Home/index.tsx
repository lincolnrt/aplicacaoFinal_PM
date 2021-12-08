import React from 'react'
import { ButtonAdd } from '../../components/ButtonAdicionar'
import { Profile } from '../../components/Principal'
import { Container, Header } from './styles'


export function Home() {
    return(
        <Container>
            <Header>
                <Profile />
            </Header>

        </Container>
    )
}