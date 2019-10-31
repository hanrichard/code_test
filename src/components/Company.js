import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import CompanyItem from './CompanyItem';
import Typography from '@material-ui/core/Typography';
import Companyheader from './CompanyHeader';

class Company extends Component {
	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;
		console.log(companies);

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<div className="Company">
				<div className="Company__header">
					<Container maxWidth="md">
						<Companyheader info={companies.companyInfo} />
					</Container>
				</div>
				<div className="Company__body">
					<Container maxWidth="md">
						<div>
							<div>
								<Typography variant="h4" component="h2" gutterBottom>
									Our Employees
								</Typography>
							</div>
							<div>sort</div>
							<div>input</div>
						</div>
						<div>
							<Grid container spacing={3}>
								{companies.employees.map(company => {
									return <CompanyItem company={company} key={company.id} />;
								})}
							</Grid>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;
