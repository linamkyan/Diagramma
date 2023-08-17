import React, { useState } from 'react';
import * as S from "./Diagramma.styled";

const generateRandomData = () => {
    const colors = ['#EB5757', '#F2994A', '#6FCF97', '#9B51E0', '#2F80ED', '#56CCF2', '#219653', '#F2C94C'];
    const data = [];

    for (let i = 0; i < 8; i++) {
        data.push({
            value: Math.random() * 100,
            color: colors[i],
            radius: Math.random() * 80 + 50,
            height: Math.random() * 30 + 10,
        });
    }

    return data;
};

const Diagramma: React.FC = () => {
    const [data, setData] = useState(generateRandomData());

    const drawChart = () => {
        const totalValue = data.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = -Math.PI / 2;

        return data.map((item, index) => {
            const startAngle = currentAngle;
            const endAngle = currentAngle + (item.value / totalValue) * Math.PI * 2;
            const x1 = 150 + item.radius * Math.cos(startAngle);
            const y1 = 150 + item.radius * Math.sin(startAngle);
            const x2 = 150 + item.radius * Math.cos(endAngle);
            const y2 = 150 + item.radius * Math.sin(endAngle);
            const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

            currentAngle = endAngle;

            const x3 = 150 + (item.radius + item.height) * Math.cos(endAngle);
            const y3 = 150 + (item.radius + item.height) * Math.sin(endAngle);

            return (
                <path
                    key={index}
                    d={`
                        M 150 150
                        L ${x1} ${y1}
                        A ${item.radius} ${item.radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
                        L ${x3} ${y3}
                        Z
                    `}
                    fill={item.color}
                />
            );
        });
    };

    return (
        <S.ChartContainer>
            <S.ChartSVG viewBox="0 0 300 300" onClick={() => setData(generateRandomData())}>
                {drawChart()}
            </S.ChartSVG>
            <S.BlackCircle/>
        </S.ChartContainer>
    );
};

export default Diagramma;
