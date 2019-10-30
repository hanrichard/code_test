import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyList extends Component {
	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;
		console.log(companies);

		return <div className="company__list">123</div>;
	}
}

CompanyList.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default CompanyList;
