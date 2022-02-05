import React from 'react';
import styles from './OrderOption.module.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from'../../common/Icon/Icon';
const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div>
        <Icon name='times-circle'/>
        <span>none</span>
      </div>
    )}
    {values.map(value => (
      <div className={currentValue === value.id ? styles.iconActive : styles.icon} 
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {value.name}({formatPrice(value.price)})

      </div>
    ))}
  </div>
);

  
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default OrderOptionIcons;