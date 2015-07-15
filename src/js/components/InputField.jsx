import React, {PropTypes} from 'react';
import style from '../../scss/components/InputField.scss';
import CompanyStore from '../stores/CompanyStore';
import CompanyActions from '../actions/CompanyActions';

const InputField = React.createClass({

	displayName: 'InputField',

	propTypes: {
	},

	getInitialState() {
    return {
    	csvData: CompanyStore.getCsvData()
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
  _onChange() {
    this.setState({
      csvData: CompanyStore.getCsvData()
    })
  },

	render() {
		return (
			<div className="input-field-component">
				<textarea ref="input-field" defaultValue={this.state.csvData} onChange={this.handleSetCompanies} />
			</div>
		);
	}

});

export default InputField;
