import { connect } from 'react-redux';

import Header from '../components/Header';
import { changeTitle } from '../modules/Header';

const mapStateToProps = (state) => state.header;

export default connect(mapStateToProps, { changeTitle })(Header);
