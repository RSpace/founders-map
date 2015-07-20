import React, {PropTypes} from 'react';
import style from '../../scss/components/InputField.scss';
import CompanyStore from '../stores/CompanyStore';
import CompanyActions from '../actions/CompanyActions';
import UIActions from '../actions/UIActions';

const InputField = React.createClass({

	displayName: 'InputField',

	getInitialState() {
    return {
    	csvData: CompanyStore.getCsvData(),
    	separator: CompanyStore.getSeparator()
    };
	},

 	componentDidMount() {
    CompanyStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CompanyStore.removeChangeListener(this._onChange);
  },

  handleSetCompanies(event) {
    CompanyActions.setCsvData(event.target.value);
  },

  handleSetSeparator(event) {
  	CompanyActions.setSeparator(event.target.value);
  },

  handleFieldFocusBlur(event) {
  	switch(event.type) {
  		case 'focus':
  			UIActions.inputFieldFocused();
  			break;
  		case 'blur':
  			UIActions.inputFieldBlurred();
  			break;
  	}
  },

  _onChange() {
    this.setState({
      csvData: CompanyStore.getCsvData(),
      separator: CompanyStore.getSeparator()
    })
  },

	render() {
		return (
			<div className="input-field-component">
        <h1>Founder's Map</h1>
				<textarea ref="input-field" defaultValue={this.state.csvData}
					onChange={this.handleSetCompanies} onFocus={this.handleFieldFocusBlur} onBlur={this.handleFieldFocusBlur} />
				<div className="input-field-component__separator">
					<label htmlFor="separator">Separator</label>
					&nbsp;
					<select defaultValue={this.state.separator} onChange={this.handleSetSeparator}>
						<option value=",">,</option>
						<option value=";">;</option>
						<option value={"\t"}>⇥</option>
					</select>
				</div>
			</div>
		);
	}

});

export default InputField;
