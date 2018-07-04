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
import HienAdd from './HienAdd.jsx'
import HienDelete from './HienDelete.jsx'
import HienListVocab from './HienListVocab.jsx'


class HienList extends React.PureComponent{
	
	render(){
		const { classes, vocab, vocabIndex, handleDelete }  = this.props;
		// const { checked } = this.state
		return(
			<Grid md={6} sm={12} item className={classes.column}>
				<div>
					<Typography variant="title">List Vocabulary</Typography>
					{/* ADD */}
					<HienAdd onAddItem={this.props.onAddItem}/>
					{/* DELETE */}
					{/* <HienDelete handleDelete={() => handleDelete(checked)}/> */}
					{/* List */}
					<Card classes={{ root: classes.card }}>
						<List>
							<HienListVocab
								vocabIndex={vocabIndex}
								vocab={vocab}
								handleDelete={handleDelete}
							/>
						</List>
					</Card>
					
				</div>
			</Grid>
		)
	}
}
export default withStyles(sampleStyle)(HienList);