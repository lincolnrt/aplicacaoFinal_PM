import styled from 'styled-components/native' 
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 24px;
    margin-bottom: 40px;
`;

export const Content = styled.View`
    margin-top: 10px;
    `;

export const User = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    border-width: 1px;
    background-color: #fff;

`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
    padding: 10px;
`;

export const MessageTwo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title700};
    color: ${({ theme }) => theme.colors.overlay};
    padding: 10px;
`; 

export const MessageThree = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
    padding: 2px;
`;

export const MessageFour = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
    padding: 6px;
    margin-top: 25px;
`;

export const MessageFive = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title700};
    color: ${({ theme }) => theme.colors.overlay};
    margin-top: 8px;
`;

export const MessageRodapé = styled.Text`
    margin-top: 250px;
    font-family: ${({ theme }) => theme.fonts.title700};
    color: ${({ theme }) => theme.colors.overlay};
    justify-content: center;
    margin-left: 92px;
`;

export const LinhaBarra = styled.Text`
    border: 0.2px dashed black;
    height: 1px;
    margin-bottom: 5px;
    background: #434343;
`

export const Cabeçalho= styled.Text({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 17
    }
});