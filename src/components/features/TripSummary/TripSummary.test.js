import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';
import { Link } from 'react-router-dom';
describe('Component TripSummary', () => {
  it('render correct link', ()=>{
    const link = '/trip/abc';
    const component = shallow(<TripSummary id='abc'/>);
    expect(component.find(<Link />).prop('to')).toEqual(link);
  });
  it('should check image alt & src', () => {
    const alt = 'Alt';
    const image = 'image.jpg';
    const component = shallow(<TripSummary name={alt} image={image} />);

    expect(component.find('img').prop('src', 'alt')).toEqual(alt, image);
  });
  it('should render without crashing', () => {
    const component = shallow(<TripSummary name='props Name' cost='props Cost' days={123} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should submit tags to component', () => {
    const tag = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={tag} />);
    expect(component.find('.tag').at(0).text()).toEqual(tag[0]);
    expect(component.find('.tag').at(1).text()).toEqual(tag[1]);
    expect(component.find('.tag').at(2).text()).toEqual(tag[2]);
  });
  it('should not render empty props tags', () => {
    const component = shallow(<TripSummary name='props name'/>);
    expect(component.find('.tags').exists()).toEqual(false);
  });
});