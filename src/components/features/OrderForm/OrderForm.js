import React from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripId, tripName, country) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    country,
    
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
const checkData = (options, tripCost, tripId, tripName, country) => {
  if(options.name && options.contact) {
    sendOrder(options, tripCost, tripId, tripName, country);
    window.alert('order confirm');
  }
  else {
    window.alert('order incomplete');
  }
};

const OrderForm = ({tripCost, options,setOrderOption,tripId, tripName, country}) =>{
  return (
    <Grid>
      <Row>
        {pricing.map(option =>(
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/> 
          </Col>
        ))};
        <Col xs={12}>
          <OrderSummary cost={tripCost} options={options}/>
        </Col>
        <Button onClick={() => checkData(options, tripCost,tripId, tripName, country )}>Order now!</Button>
      </Row>
    </Grid>
  );
};
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options:PropTypes.object,
  setOrderOption:PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  country: PropTypes.string,
  
};

export default OrderForm;