import React from 'react';
import {formatPrice} from '../../../utils/formatPrice';
import styles from'./OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue,setOptionValue,limits,price}) => {
  return (
    <div className={styles.number}>
      <input className={styles.inputSmall}
        type="number"
        value={currentValue}
        onChange={event => setOptionValue(parseInt(event.currentTarget.value))}
        max={limits.max}
        min={limits.min}>
      </input>
        ({formatPrice(price)})
    </div>
  );
};
OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;