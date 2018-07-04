import * as React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import HienSingleStyle from './HienSingle.style';
class HienSingle extends React.Component {
	render() {
		const { classes } = this.props;
		// const { task } = this.props;
		return (
			<div className={classes.container}>
				<Typography>abc</Typography>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({

});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(HienSingleStyle)(connect(mapStateToProps, mapDispatchToProps)(HienSingle)));
