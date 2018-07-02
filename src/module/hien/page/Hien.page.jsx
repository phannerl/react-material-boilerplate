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
const styles = {
  card: {
	minWidth: 275,
	backGround:'red',
  },
  bullet: {
	display: 'inline-block',
	margin: '0 2px',
	transform: 'scale(0.8)',
  },
  title: {
	marginBottom: 16,
	fontSize: 14,
  },
  pos: {
	marginBottom: 12,
  },
};
const keyTypeToString = (type) => {
	switch(type) {
		case 'n': return 'Noun'
		case 'adj': return 'Adjective'
		default: return 'donno'
	}
}
//====================================
// Data type
//====================================
const types = [
  {
    symble: 'n',
    symbleDetail: 'Noun',
  },
  {
    symble: 'adj',
    symbleDetail: 'Adjective',
  },
  {
    symble: 'adv',
    symbleDetail: 'Adverb',
  },
  {
    symble: 'v',
    symbleDetail: 'Verd',
  },
];
//====================================
//
//====================================
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
					image: 'home/teo/Downloads/20045501_1205810789524093_8778738808590821833_o.jpg'
				},
				'2': {
					word: 'goodbye',
					language: {
						en: 'See baby',
						vi: 'Tam biet',
					},
					type: 'n',
					image: 'home/teo/Downloads/20045501_1205810789524093_8778738808590821833_o.jpg'
				},
				'3': {
					word: 'goodnight',
					language: {
						en: 'See baby',
						vi: 'Chuc ngu ngon',
					},
					type: 'n',
					image: 'home/teo/Downloads/20045501_1205810789524093_8778738808590821833_o.jpg'
				},
			},
			vocabIndex: ['1', '2','3'],
			open: false,
			type: 'Noun',
			textWord:"",
			textMeanEn:"",
			textMeanVi: "",
			checked: [],
			imagePreviewUrl:""
		}
	}

	handleClickOpen = () => {
		this.setState({
			open: true
		})
	}

	handleClose = () =>{
		this.setState({ open: false });
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	}
	onChangeWord (event){
		this.setState({
			textWord: event.target.value,
		})
	}
	onChangeMeanEn (event){
		this.setState({
			textMeanEn: event.target.value,
		})
	}
	onChangeMeanVi (event){
		this.setState({
			textMeanVi: event.target.value,
		})
	}
	// Function Upload File
	handleImageChange = (event) => {
		event.preventDefault();
		let reader = new FileReader();
		let file = event.target.files[0];
		console.log(">>>>>", event.file, file)
		const self = this
		reader.onload = function(upload) {
			self.setState({
				image: upload.target.result,
				imagePreviewUrl: reader.result
			});
		};
		reader.readAsDataURL(file);    
	}
	onAddItem(event, word, meanen, meanvi, type, file) {
		event.preventDefault();
		var newitem = {
			word: word,
			language: {
				en: meanen,
				vi: meanvi,
			},
			type: type,
			image: file
		}
		var length = this.state.vocabIndex.length;
		// console.log("5??: ",(parseInt(this.state.vocabIndex[3])+1).toString());
		var clone_vocaIndex = this.state.vocabIndex
		var arrVocabIndex = clone_vocaIndex.concat((parseInt(this.state.vocabIndex[length-1])+1).toString());
		// console.log('arrVocabIndex: ', arrVocabIndex);
		var clone_vocab =  this.state.vocab
		clone_vocab[(parseInt(this.state.vocabIndex[length-1])+1).toString()] = newitem

		this.setState({
			vocab: clone_vocab,
			vocabIndex: arrVocabIndex
		})
	}
	//Select Delete
	handleToggle = value => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked,
		});

	}
	// Button Delete
	handleDelete(event){
		const { checked, vocab, vocabIndex } = this.state;
		const dataDeleted = omit(checked, vocab);
		const vocabIndexDeleted = vocabIndex.filter((id) => !checked.includes(id))
	
		this.setState({
			vocab: dataDeleted,
			vocabIndex: vocabIndexDeleted
		})
	}


	render() {
		console.log('vocal render: ', this.state.vocab)
		console.log("arrSearch:", this.state.arrSearc, this.state);
		const { classes }  = this.props;
		const { arrSearch,vocab, vocabIndex } = this.state
		const bull = <span className={classes.bullet}>•</span>;
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
			if (imagePreviewUrl) {
				$imagePreview = (<img className={classes.img} src={imagePreviewUrl} />);
			} else {
				$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		console.log('checked: ', this.state.checked);
		// console.log('file: ', this.state.vocab[4].image);
		
		console.log('arrVocalIndex render: ', this.state.vocabIndex)
		return (
		
		<Grid className={classes.content} container >
			{/* Seach */}
			<HienSearch vocab={vocab} arrSearch={arrSearch} vocabIndex={vocabIndex} />
			{/* List - Add - Delete */}
			<Grid md={6} sm={12} item className={classes.column}>
				<div>
					<Typography variant="title">List Vocabulary</Typography>
					{/* ADD*/}
					<Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="Add" className={classes.fab}>
						<AddIcon />
					</Button>
					<IconButton aria-label="Delete" onClick={(event) => this.handleDelete(event)}>
						<DeleteIcon />
					</IconButton>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">Add Vocabulary</DialogTitle>
						<form onSubmit={(event) => this.onAddItem(event, this.state.textWord,  this.state.textMeanEn,  this.state.textMeanVi, this.state.type, this.state.image)}>
							<DialogContent>
								<DialogContentText>
									To add to this website, please enter your word here.
								</DialogContentText>
								
								<TextField
									autoFocus
									margin="dense"
									id="word"
									label="Word"
									type="text"
									value={this.state.textWord}
									onChange={this.onChangeWord.bind(this)}
									fullWidth
								/>
								<TextField
									autoFocus
									margin="dense"
									id="mean-en"
									label="Mean (english)"
									type="text"
									value={this.state.textMeanEn}
									onChange={this.onChangeMeanEn.bind(this)}
									fullWidth
								/>
								<TextField
									autoFocus
									margin="dense"
									id="mean-vi"
									label="Mean (vietnamese)"
									type="text"
									value={this.state.textMeanVi}
									onChange={this.onChangeMeanVi.bind(this)}
									fullWidth
								/>
								<TextField
									id="select-currency-native"
									select
									label="Type"
									className={classes.textField}
									value={this.state.type}
									onChange={this.handleChange('type')}
									SelectProps={{
									native: true,
									MenuProps: {
									className: classes.menu,
									},
									}}
									helperText="Please select your type"
									margin="normal"
								>
									{types.map(option => {
										return (
											<option key={option.symble} value={option.symble}>
												{option.symbleDetail}
											</option>
											)
									})}
								</TextField>
								<div className={classes.button}>
									<Button variant="contained" color="default" className={classes.button}>
										Upload
										<FileUpload className={classes.rightIcon} />
									</Button>
									<input onChange={this.handleImageChange} className={classes.rightIcon} type="file" name="myfile" />	
								</div>
								<div className="imgPreview">
									{$imagePreview}
								</div>
							</DialogContent>
							<DialogActions>
								<Button onClick={this.handleClose} color="primary">
									Cancel
								</Button>
								<Button onClick={this.handleClose} type="submit" color="primary">
									Add
								</Button>
							</DialogActions>
						</form>
					</Dialog>
					{/* List */}
					<Card classes={{
							root: classes.card
					}}>
					<List>
						{this.state.vocabIndex.map(key => (
							<div key={key}>
							<ListItem key={key} dense button className={classes.listItem}>
								<Avatar alt="Image" src={this.state.vocab[key].image} />
								<ListItemText primary={this.state.vocab[key].word} />
								<ListItemText primary={keyTypeToString(this.state.vocab[key].type)} />
								<ListItemText primary={this.state.vocab[key].language.vi} />
								<ListItemSecondaryAction>
									<Checkbox
									onChange={this.handleToggle(key)}
									checked={this.state.checked.indexOf(key) !== -1}
									/>
								</ListItemSecondaryAction>
							</ListItem>
							</div>
						))}
					</List>
					</Card>
				</div>
			</Grid>
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
