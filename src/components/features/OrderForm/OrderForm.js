import React from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';



const OrderForm = (cost,options) =>(
<Grid>
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={cost} tripOption={options}/>
    </Col>
  </Row>
</Grid>
);

export default OrderForm;