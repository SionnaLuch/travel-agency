import React from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';


const OrderForm = ({tripCost, options}) =>{
    return (
<Grid>
  <Row>
      {pricing.map(options =>(
          <Col md={4} key={options.id}>
              <OrderOption {...options} /> 
          </Col>
      ))};
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
</Grid>
    );
};
OrderForm.propTypes = {
    cost: PropTypes.string,
    options:PropTypes.object,
  
}

export default OrderForm;