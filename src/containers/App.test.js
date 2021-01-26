import { render, screen } from '@testing-library/react';
import HomeButtons from '../components/homeButtons/HomeButtons';
import {Provider} from 'react-redux'
import {store} from '../redux/store';

import {  shallow,mount } from 'enzyme';

describe('Home Page testing',()=>{

  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<HomeButtons/>);
  })
  test('renders button with text `All songs`', () => {
    expect(wrapper.find("#button-allsongs").text()).toContain('All Songs')
  });
  test('renders button with text `Playlists`', () => {
    expect(wrapper.find("#button-playlists").text()).toContain('Playlists')
  });

})
