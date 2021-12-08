import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import logoImg from '../../assets/logoImg2.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, Content} from './styles';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            <Image source={logoImg} />
            <Content>
            <Title>
                Carteira de Trabalho Digital
            </Title>

            <ButtonIcon title="ENTRAR"
                activeOpacity={0.7}
                disabled={false}
                onPress={handleSignIn}
            />
            </Content>
        </Container>
    )
}