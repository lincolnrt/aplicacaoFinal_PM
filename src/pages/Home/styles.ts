import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary}; 
`;

export const Header = styled.View`
    width: 100%;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 42px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;

`;