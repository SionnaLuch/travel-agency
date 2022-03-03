import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';


describe ('component Phone ',()=>{
  it('should render without crashing',()=>{
    const component = shallow(<Phone/>);
    expect(component).toBeTruthy();
  });
});