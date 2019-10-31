import * as actionTypes from '../actions/actionTypes';

const initialState = { companeis: [], selected: '' };

const companiesRudecer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COMPANIES:
			return {
				...state,
				companeis: action.payload,
			};
		case actionTypes.SET_SECLECTED:
			return {
				...state,
				selected: action.payload,
			};
		default:
			return state;
	}
};

export default companiesRudecer;
