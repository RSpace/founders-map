import React from 'react';
import Map from '../components/Map.jsx';
import expect from 'unexpected';

describe('Map', () => {

  let TestUtils
  let map;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    map = TestUtils.renderIntoDocument(<Map />);
  });

  it('renders without errors', () => {
    expect(map, 'to be defined');
  });

});
