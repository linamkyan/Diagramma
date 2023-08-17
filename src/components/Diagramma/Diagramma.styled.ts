import {styled} from "styled-components";

export const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`;

export const ChartSVG = styled.svg`
    width: 400px;
    height: 400px;
    cursor: pointer;
`;

export const BlackCircle = styled.div`
    position: absolute;
    width: 66px;
    height: 66px;
    background-color: #1E1E1E;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
`;
