import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import { Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

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

	render() {
		const { id } = this.props;

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

		return (
			<Wrapper>
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
