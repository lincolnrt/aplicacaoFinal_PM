import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background}; 
`;

export const Content = styled.View`
    margin-top: -40px;
    padding: 50px;
`;

export const Title = styled.Text`
    color: #000;
    text-align: center;
    font-size: 24px;
    margin-bottom: 40px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;

`;
