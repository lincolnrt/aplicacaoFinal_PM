import React from 'react'
import { Cabeçalho, Container, Content, Input, Message, MessageTwo, MessageThree, MessageFour, MessageFive, MessageRodapé, LinhaBarra } from './styles'

import { ButtonIcon } from '../ButtonIcon'

import { ico } from '../../assets/ico.png'
import { Image } from 'react-native';
import govLogo  from '../../assets/govLogo.png'


import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function Profile() {
    return(
        <Container>
            <Content>
            <Image source={govLogo}  />
                <MessageTwo>
                    Identifique-se no gov.br com:
                </MessageTwo>

                <Message>
                <AntDesign name="idcard" size={24} color="black" />  Número do CPF:
                </Message>

                <MessageThree>
                        Digite seu CPF para criar ou acessar sua conta gov.br
                </MessageThree>

                <MessageFive>
                    CPF:
                </MessageFive>
                <Input type="text" placeholder="Digite seu CPF" />

                <ButtonIcon title="Continuar"
                activeOpacity={0.7}
                disabled={false}
            />

                <Message>
                    Outras opções de identificação
                </Message>

                <LinhaBarra />

                <Message>
                     <Entypo name="classic-computer" size={24} color="black" />
                       Seu banco
                </Message>
                
                <Message>
                     <Entypo name="cloud" size={24} color="black" />
                       Seu certificado em nuvem
                </Message>

                <MessageRodapé>
                    <Entypo name="help" size={24} color="black" />
                    Entenda a conta gov.br
                </MessageRodapé>

            </Content>
        </Container>
    )
}