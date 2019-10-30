import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const companiesRudecer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COMPANIES:
			return action.payload;
		default:
			return state;
	}
};

export default companiesRudecer;
