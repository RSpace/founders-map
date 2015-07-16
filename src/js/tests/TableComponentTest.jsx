import React from 'react';
import Table from '../components/Table.jsx';
import expect from 'unexpected';

describe('Table', () => {

  let TestUtils
  let table;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    table = TestUtils.renderIntoDocument(<Table />);
  });

  it('renders without errors', () => {
    expect(table, 'to be defined');
  });

});
