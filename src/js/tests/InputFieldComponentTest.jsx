import React from 'react';
import InputField from '../components/InputField.jsx';
import expect from 'unexpected';

describe('InputField', () => {

  let TestUtils
  let inputField;

  beforeEach(() => {
    TestUtils = React.addons.TestUtils;
    inputField = TestUtils.renderIntoDocument(<InputField />);
  });

  it('renders without errors', () => {
    expect(inputField, 'to be defined');
  });

});
