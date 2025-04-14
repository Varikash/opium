import React from 'react';
import style from './ServiceLine.module.css';

interface ServiceLineProps {
    name: string;
    price: string;
}

const ServiceLine: React.FC<ServiceLineProps> = ({ name, price }) => {
    return (
        <div className={style.serviceLine}>
            <span className={style.serviceName}>{name}</span>
            <span className={style.dots}></span>
            <span className={style.servicePrice}>{price}</span>
        </div>
    );
};

export default ServiceLine;