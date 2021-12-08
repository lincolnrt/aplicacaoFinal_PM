import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    height: 48px;
    width: 48px;
    background-color: ${({ theme }) => theme.colors.heading};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.overlay};
`;
