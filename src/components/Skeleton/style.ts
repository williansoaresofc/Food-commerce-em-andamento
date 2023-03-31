import { theme } from './../../styles/Theme';
    import styled from "styled-components";
import { SkeletonProps } from ".";

    export const SkeletonElement = styled.div<SkeletonProps>`
    background: linear-gradient(90deg,
        ${({theme}) => theme.colors.gray900} 0%,
        #0a0a0a 40%,
        ${({theme}) => theme.colors.gray900} 100%
        );
    `