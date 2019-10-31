import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const CompanyItem = company => {
	const { avatar, lastName, firstName, bio } = company.company;

	return (
		<Grid item xs={6} sm={4}>
			<Paper p={3}>
				<Card>
					<CardContent>
						<img src={avatar} alt={lastName} />
					</CardContent>

					<CardContent>
						{lastName} {firstName} {bio}
					</CardContent>
				</Card>
			</Paper>
		</Grid>
	);
};

CompanyItem.propTypes = {};

export default CompanyItem;
