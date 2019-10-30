import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import CompanyList from '../components/CompanyList';

const mapStateToProps = state => {
	return {
		companies: state.companies,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitCompanies: () => dispatch(actions.initCompanies()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CompanyList);
