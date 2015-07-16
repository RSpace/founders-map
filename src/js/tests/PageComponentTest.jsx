import React from 'react';
import Page from '../components/Page.jsx';
import expect from 'unexpected';

describe('PageComponent', () => {

  let TestUtils
  let page;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    page = TestUtils.renderIntoDocument(<Page />);
  });

  it('renders without errors', () => {
    expect(page, 'to be defined');
  });

});
