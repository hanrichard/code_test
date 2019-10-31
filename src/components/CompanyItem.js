import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const CompanyItem = company => {
	const { avatar, lastName, firstName, jobTitle } = company.company;

	const Wrapper = styled.div`
		.CompanyItem__Card {
			display: flex;
		}
		.CompanyItem__Card-img {
			margin-right: 10px;

			img {
				max-width: 80px;
				width: 100%;
			}
		}
	`;

	return (
		<Grid item xs={12} sm={4}>
			<Wrapper>
				<Paper p={3}>
					<Card>
						<CardContent className="CompanyItem__Card">
							<Box className="CompanyItem__Card-img">
								<img src={avatar} alt={lastName} />
							</Box>

							<div className="CompanyItem__Card-info">
								<Typography component="p" gutterBottom>
									{lastName} {firstName}
								</Typography>
								<Typography component="p" gutterBottom>
									{jobTitle}
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Paper>
			</Wrapper>
		</Grid>
	);
};

CompanyItem.propTypes = {};

export default CompanyItem;
