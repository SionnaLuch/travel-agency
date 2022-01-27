import React from 'react';
import styles from './OrderSummary.module.scss';
import calculateTotal from'../../../utils/calculateTotal';
import formatPrice from '../../../utils/formatPrice';

const OrderSummary = (props)=> {
    return( 
        <div>
            <h2 className={styles.component}>
            Total:
                <strong>{formatPrice(calculateTotal(props.tripCost.tripCost, props.tripCost.options))}</strong>
            </h2>
        </div>
    );
}

export default OrderSummary;