import React, {PropTypes} from 'react';
import style from '../../scss/components/Page.scss';
import InputField from './InputField.jsx'
import Table from './Table.jsx'

const Page = React.createClass({

  displayName: 'Page',

  propTypes: {
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="page-component">
        <div className="page-component__input-field-container">
          <InputField />
        </div>
        <div className="page-component__table-container">
          <Table />
        </div>
      </div>
    );
  }

});

export default Page;
