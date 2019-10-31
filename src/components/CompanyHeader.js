import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const CompanyItem = info => {
	console.log(info.info);

	return (
		<div className="company__list">
			<div>{info.info.companyName}</div>
			<div>{info.info.companyMotto}</div>
			<div>{info.info.companyEst}</div>
		</div>
	);
};

CompanyItem.propTypes = {};

export default CompanyItem;
