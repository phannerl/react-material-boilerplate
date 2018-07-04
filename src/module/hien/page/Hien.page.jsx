//import { React, withStyles, Card, CardMedia, CardContent, CardActions, Grid, Typography, TextField, Button, Icon, AddIcon, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, DeleteIcon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, Avatar, FileUpload, omit, connect, sampleStyle } from './library.jsx';
import * as React from 'react';

import { withStyles } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions, TextField, Button, Grid, Typography } from '@material-ui/core';
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

import { connect } from 'react-redux';
import sampleStyle from './Hien.style';
import HienSearch from './component/HienSearch.jsx'
import HienList from './component/HienList.jsx'

class TeoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vocab: {
				'1': {
					word: 'hello',
					language: {
						en: 'Gretting',
						vi: 'Xin chao',
					},
					type: 'n',
					image: 'https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'
				},
				'2': {
					word: 'goodbye',
					language: {
						en: 'See baby',
						vi: 'Tam biet',
					},
					type: 'n',
					image: 'https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'
				},
				'3': {
					word: 'goodnight',
					language: {
						en: 'See baby',
						vi: 'Chuc ngu ngon',
					},
					type: 'n',
					image: 'https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'
				},
			},
			vocabIndex: ['1', '2','3'],
			
		}
	}

	onAddItem = (event, word, meanen, meanvi, type, file) => {
		event.preventDefault();
		const { vocabIndex, vocab } = this.state;
		console.log("vocabIndex: ", vocabIndex)
		var newitem = {
			word: word,
			language: {
				en: meanen,
				vi: meanvi,
			},
			type: type,
			image: file
		}
		var length = vocabIndex.length;
		// console.log("5??: ",(parseInt(this.state.vocabIndex[3])+1).toString());
		var clone_vocaIndex = vocabIndex
		var arrVocabIndex = clone_vocaIndex.concat((parseInt(vocabIndex[length-1])+1).toString());
		// console.log('arrVocabIndex: ', arrVocabIndex);
		var clone_vocab = vocab
		clone_vocab[(parseInt(vocabIndex[length-1])+1).toString()] = newitem

		this.setState({
			vocab: clone_vocab,
			vocabIndex: arrVocabIndex
		})
	}
	
	handleDelete= (checked) => {
		const { vocab, vocabIndex  } = this.state;
		const dataDeleted = omit(checked, vocab);
		const vocabIndexDeleted = vocabIndex.filter((id) => !checked.includes(id))
	
		this.setState({
			vocab: dataDeleted,
			vocabIndex: vocabIndexDeleted
		})
	}

	render() {
		const { classes }  = this.props;
		const { arrSearch,vocab, vocabIndex } = this.state
		const bull = <span className={classes.bullet}>•</span>;
		return (		
		<Grid className={classes.content} container >
			{/* Seach */}
			<HienSearch vocab={vocab} arrSearch={arrSearch} vocabIndex={vocabIndex} />
			{/* List - Add - Delete */}
			<HienList 
				vocabIndex={vocabIndex}
				vocab={vocab}
				handleToggle={this.handleToggle}
				handleDelete={this.handleDelete}
				onAddItem={this.onAddItem} />
		</Grid>);
	}
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(sampleStyle)(connect(mapStateToProps, mapDispatchToProps)(TeoPage)));
