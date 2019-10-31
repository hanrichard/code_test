import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import CompanyItem from './CompanyItem';
import Typography from '@material-ui/core/Typography';
import Companyheader from './CompanyHeader';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import { Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '', value: 'lastname', open: false };
	}

	handleInputChange = e => {
		this.setState({
			term: e.target.value,
		});
	};

	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	};

	handleOpen = () => {
		this.setState({
			open: true,
		});
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;

		const valuename = this.state.value;

		let companiesEmployees =
			companies.employees &&
			companies.employees.sort(function(a, b) {
				return a[valuename] > b[valuename] ? 1 : b[valuename] > a[valuename] ? -1 : 0;
			});

		const sortOptions = [
			{
				value: 'lastname',
				label: 'Last Name',
			},
			{
				value: 'firstname',
				label: 'First Name',
			},
		];

		const Wrapper = styled.div`
			.Company__bar {
				margin-bottom: 30px;

				@media only screen and (min-width: 600px) {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}

			.Company__bar-sortandsearch {
				display: flex;
			}
			.Company__bar-sort {
				margin-right: 10px;
			}
		`;

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<Wrapper className="Company">
				<div className="Company__header">
					<Companyheader info={companies.companyInfo} />
				</div>
				<div className="Company__body">
					<Container maxWidth="lg">
						<div className="Company__bar">
							<div className="Company__bar-heading">
								<Typography variant="h4" component="h2" gutterBottom>
									Our Employees
								</Typography>
							</div>
							<div className="Company__bar-sortandsearch">
								<div className="Company__bar-sort">
									<TextField
										id="outlined-select-currency"
										select
										label="Sort"
										value={this.state.value}
										onChange={e => this.handleChange(e)}
										helperText="Sort by"
										margin="normal"
										variant="outlined"
									>
										{sortOptions.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>
								<div className="Company__bar-search">
									<form>
										<TextField
											id="outlined-search"
											label="Search field"
											type="search"
											className=""
											margin="normal"
											variant="outlined"
											value={this.state.term}
											onChange={e => this.handleInputChange(e)}
											helperText="Search field"
										/>
									</form>
								</div>
							</div>
						</div>
						<div>
							<Grid container spacing={3}>
								{companiesEmployees.map(company => {
									return <CompanyItem company={company} key={company.id} />;
								})}
							</Grid>
						</div>
					</Container>
				</div>

				<button type="button" onClick={this.handleOpen}>
					Open Modal
				</button>

				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<Container maxWidth="lg">
						<Paper>
							<Paper p={3}>
								<Card>
									<CardContent>img</CardContent>

									<CardContent>info</CardContent>
								</Card>
							</Paper>
						</Paper>
					</Container>
				</Modal>
			</Wrapper>
		);
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;
