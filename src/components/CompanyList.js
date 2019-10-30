import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import CompanyItem from './CompanyItem';

class CompanyList extends Component {
	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;
		console.log(companies);

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<div className="company__list">
				<Container maxWidth="md">
					<Grid container spacing={3}>
						{companies.employees.map(company => {
							return (
								<CompanyItem
									lastName={company.lastName}
									firstName={company.firstName}
									avatar={company.avatar}
									bio={company.bio}
									key={company.id}
								/>
							);
						})}
					</Grid>
				</Container>
			</div>
		);
	}
}

CompanyList.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default CompanyList;
