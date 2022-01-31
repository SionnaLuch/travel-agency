import React from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';


const OrderForm = ({cost,id}) =>(
<Grid>
  <Row>
      {pricing.map(options =>(
          <Col md={4} key={id}>
              <OrderOption {...options} /> 
          </Col>
      ))};
    <Col xs={12}>
      <OrderSummary tripCost={cost} tripOptions={pricing}/>
    </Col>
  </Row>
</Grid>
);

export default OrderForm;