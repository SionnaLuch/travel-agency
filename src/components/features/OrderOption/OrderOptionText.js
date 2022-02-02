import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue, currentValue}) => {
    return (
        <input className={styles.input}
            type = 'text'
            value = {currentValue}
            onChange={event => setOptionValue(event.currentTarget.value)}
            placeholder='text'
            />
    );
};
OrderOptionText.propTypes ={
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.string,
};
export default OrderOptionText;