import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';
import Icon from'../../common/Icon/Icon';


describe ('component Phone ',()=>{
  it('should render without crashing',()=>{
    const component = shallow(<Phone/>);
    expect(component).toBeTruthy();
  });
});
it('should contain icon and span',()=>{
  const component = shallow(<Phone/>);
  expect(component.exists(Icon)).toEqual(true);
  expect(component.exists('span')).toEqual(true);
});
const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};
it('should show Amanda phone at 8-12',()=>{
  global.Date = mockDate(`2019-11-19T10:00:01.135Z`);
  const component= shallow(<Phone/>);
  expect(component.find('span').text()).toEqual(' Amanda 678.243.8455');
  global.Date = trueDate;
});
it('should show Tobias phone at 12-16',()=>{
  global.Date = mockDate(`2019-11-19T14:00:01.135Z`);
  const component= shallow(<Phone/>);
  expect(component.find('span').text()).toEqual(' Tobias 278.443.6443');
  global.Date = trueDate;
});
it('should show Helena phone at 16-22',()=>{
  global.Date = mockDate(`2019-11-19T20:00:01.135Z`);
  const component= shallow(<Phone/>);
  expect(component.find('span').text()).toEqual(' Helena 167.280.3970');
  global.Date = trueDate;
});
it('should show Helena phone at 22-8',()=>{
  global.Date = mockDate(`2019-11-19T1:00:01.135Z`);
  const component= shallow(<Phone/>);
  expect(component.find('span').text()).toEqual(' The office opens at 8:00 UTC');
  global.Date = trueDate;
});