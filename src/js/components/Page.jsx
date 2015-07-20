import React from 'react';
import classNames from 'classnames';
import style from '../../scss/components/Page.scss';
import InputField from './InputField.jsx';
import Table from './Table.jsx';
import Map from './Map.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher';
import UIConstants from '../constants/UIConstants';

const Page = React.createClass({

  displayName: 'Page',

  getInitialState() {
    return {
      isInputFieldFocused: false
    }
  },

  componentDidMount() {
    this.appDispatcherToken = AppDispatcher.register(function(action){
    switch(action.actionType){
      case UIConstants.INPUT_FIELD_FOCUSED:
        this.setState({isInputFieldFocused: true});
        break;
      case UIConstants.INPUT_FIELD_BLURRED:
        this.setState({isInputFieldFocused: false});
        break;
      default:
        return true;
      }
    }.bind(this));
  },

  componentDidUnmount() {
    AppDispatcher.unregister(this.appDispatcherToken);
  },

  render() {
    var classes = classNames(
      'page-component',
      {'page-component--is-input-field-focused': this.state.isInputFieldFocused}
    );

    return (
      <div className={classes}>
        <div className="page-component__top-container">
          <div className="page-component__input-field-container">
            <InputField />
          </div>
          <div className="page-component__map-container">
            <Map />
          </div>
        </div>
        <div className="page-component__table-container">
          <Table />
        </div>
      </div>
    );
  }

});

export default Page;
