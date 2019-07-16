import React from 'react';
import { shallow } from 'enzyme';

import Infos from '../Infos';
import Message from '../Message';

it('should render', () => {
  const wrapper = shallow(<Infos />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('.title').text()).toEqual('Info Type 3');
});

it('should render infos', () => {
  const messages = [{ message: 'info1', priority: 3 }, { message: 'info2', priority: 3 }];
  const wrapper = shallow(<Infos infos={messages} />);
  expect(wrapper.find(Message).length).toBe(2);
});

it('should render infos', () => {
  const messages = [
    { message: 'info1', priority: 3 },
    { message: 'info2', priority: 3 },
    { message: 'info2', priority: 3 },
  ];
  const wrapper = shallow(<Infos infos={messages} />);
  expect(wrapper.find('.count').text()).toEqual('Count 3');
});
