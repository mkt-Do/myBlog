import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

const mapStateToProps = (state) => state.router.location;

export default connect(mapStateToProps)(Switch);
