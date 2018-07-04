import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import FileUpload from '@material-ui/icons/FileUpload';
import { omit } from 'ramda';
import sampleStyle from '../Hien.style.js'
import { connect } from 'react-redux';

class HienDelete extends React.PureComponent{
	render(){
		return(
			<div>
				{/* DELETE */}
				<IconButton aria-label="Delete" onClick={this.props.handleDelete}>
					<DeleteIcon />
				</IconButton>
			</div>
		)
	}
}
export default withStyles(sampleStyle)(HienDelete);