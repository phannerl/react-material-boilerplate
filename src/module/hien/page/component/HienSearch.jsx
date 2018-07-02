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
const keyTypeToString = (type) => {
	switch(type) {
		case 'n': return 'Noun'
		case 'adj': return 'Adjective'
		default: return 'donno'
	}
}
class HienSearch extends React.PureComponent {
	state= {
		textSearch: '',
		arrSearch: []
	}

	onChangeSearch = (event) => {
		this.setState({
			textSearch: event.target.value,
		})
	}
	onSearch = (event, text) => {
		const { vocab, vocabIndex }  = this.props;
		event.preventDefault();
		var dataFilted = vocabIndex.filter((key)=> {
			if(vocab[key].word.toUpperCase().indexOf(text.toUpperCase())>=0) return true
			return false
		})
		this.setState({arrSearch: dataFilted});
	}
	// shouldComponentUpdate(previousProp){
	// 	return true
	// }
	render(){
		const { classes, vocab, vocabIndex }  = this.props;
		const { textSearch, arrSearch =[] } = this.state
		return(
			<Grid md={6} sm={12} item className={classes.column}>
				<Typography variant="title">Search Vocabulary</Typography>
				<Card className={classes.card}>
					<CardContent>
						<form onSubmit={(event) => this.onSearch(event, this.state.textSearch)} className={classes.container} noValidate autoComplete="off">
							<TextField
								defaultValue={this.state.textSearch}
								onChange={this.onChangeSearch}
							/>
							<input className={classes.input} type="submit" value="Submit" />
						</form>
					{   arrSearch.length < 1
						?	<h1>Not found</h1> 
						: 	arrSearch.map((key, index) => 
								(
									<div key={key} className={classes.cardSeperate}>
										<CardContent>
											<Typography variant="headline" component="h2">
												{vocab[key].word}
											</Typography>
											<Typography className={classes.pos} color="textSecondary">
												{keyTypeToString(vocab[key].type)}
											</Typography>
											<Typography component="p">
												{vocab[key].language.vi}
											</Typography>
										</CardContent>
									</div>
								)
							) 
					}
					</CardContent>
				</Card>
			</Grid>
		)

	}
}
export default withStyles(sampleStyle)(HienSearch);
