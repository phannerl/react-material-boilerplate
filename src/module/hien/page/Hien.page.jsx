import * as React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FileUpload from '@material-ui/icons/FileUpload';

import { connect } from 'react-redux';
import sampleStyle from './Hien.style';

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
    vsymble: 'adv',
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
					image: 'https://image.png'
				},
				'2': {
					word: 'goodbye',
					language: {
						en: 'See baby',
						vi: 'Tam biet',
					},
					type: 'n',
					image: 'https://image.png'
				},
				'3': {
					word: 'goodnight',
					language: {
						en: 'See baby',
						vi: 'Buoi toi vui ve',
					},
					type: 'n',
					image: 'https://image.png'
				},
				'4': {
					word: 'good morning',
					language: {
						en: 'have a nice morning',
						vi: 'Chao buoi sang',
					},
					type: 'n',
					image: 'https://image.png'
				},
			},
			vocabIndex: ['1', '2', '3', '4'],
			textSearch:"",    
			arrSearch : [],
			open: false,
			type: 'Noun',
			textWord:"",
			textMeanEn:"",
			textMeanVi: "",
		}
	}
	onChangeSearch (event){
		this.setState({
			textSearch: event.target.value,
		})
	}
	onSearch (event, text){
		event.preventDefault();
		var dataFilted = this.state.vocabIndex.filter((key)=> {
			console.log('DATA', this.state.vocab[key])
			if(this.state.vocab[key].word.toUpperCase().indexOf(text.toUpperCase())>=0) return true
			return false
		})

		console.log('dataFilted:', dataFilted)
		// dataFilted = updatedLists.filter(updatedList =>{
		//   return updatedList.toLowerCase().search(text.toLowerCase()) !== -1;
		// });
		this.setState({arrSearch: dataFilted});
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
	handleImageChange = (event) => {
		event.preventDefault();
		let reader = new FileReader();
		let file = event.target.files[0];
		console.log(">>>>>", event.file, file)
		const self = this
		reader.onload = function(upload) {
			self.setState({
				image: upload.target.result
			});
		};
		reader.readAsDataURL(file);    
	}
	onAddItem(event, word, meanen, meanvi, type, file) {
		event.preventDefault();
		console.log('handle uploading-', this.state.file);
		console.log('word: ', word);
		console.log('type: ', type);
		console.log('meanen: ', meanen);
		console.log('meanvi: ', meanvi);
		console.log('file: ', file);
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
		console.log("5??: ",(parseInt(this.state.vocabIndex[3])+1).toString());
		var clone_vocaIndex = this.state.vocabIndex
		var arrVocabIndex = clone_vocaIndex.concat((parseInt(this.state.vocabIndex[length-1])+1).toString());
		console.log('arrVocabIndex: ', arrVocabIndex);
		var clone_vocab =  this.state.vocab
		clone_vocab[(parseInt(this.state.vocabIndex[length-1])+1).toString()] = newitem

		this.setState({
			vocab: clone_vocab,
			vocabIndex: arrVocabIndex
		})
	}
	render() {
		console.log("arrSearch:", this.state.arrSearc, this.state);
		const { classes }  = this.props;
		const { arrSearch } = this.state
		const bull = <span className={classes.bullet}>•</span>;
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
			if (imagePreviewUrl) {
				$imagePreview = (<img className={classes.img} src={imagePreviewUrl} />);
			} else {
				$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}


		return (
		//==================
		// 
		//==================
		<Grid className={classes.content} container>
			<Grid md={6} sm={12} item className={classes.column}>
				<Typography variant="title">Search Vocabulary</Typography>
				<Card className={classes.card}>
					<CardContent>
						<form onSubmit={(event) => this.onSearch(event, this.state.textSearch)} className={classes.container} noValidate autoComplete="off">
							<TextField
								defaultValue={this.state.textSearch}
								onChange={this.onChangeSearch.bind(this)}
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
												{this.state.vocab[key].word}
											</Typography>
											<Typography className={classes.pos} color="textSecondary">
												{keyTypeToString(this.state.vocab[key].type)}
											</Typography>
											<Typography component="p">
												{this.state.vocab[key].language.vi}
											</Typography>
										</CardContent>
									</div>
								)
							) 
					}
					</CardContent>
					
				</Card>
			</Grid>
			<Grid md={6} sm={12} item spacing={20} className={classes.column}>
				<div>
					<Typography variant="title">List Vocabulary</Typography>
					<Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="Add" className={classes.fab}>
						<AddIcon />
					</Button>
					<IconButton aria-label="Delete">
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
									{types.map(option => (
									<option key={option.symble} value={option.symble}>
										{option.symbleDetail}
									</option>
									))}
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
					{
						this.state.vocabIndex.map(key => (
							<div key={key} >
								<Card classes={{
										root: classes.card
									}}>
									<CardMedia
										className={classes.cover}
										image={this.state.vocab[key].image}
										title="Live from space album cover"
										/>	
									<CardContent>
										<Typography variant="headline" component="h2">
											{this.state.vocab[key].word}
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
											{keyTypeToString(this.state.vocab[key].type)}
										</Typography>
										<Typography component="p">
											{this.state.vocab[key].language.vi}
										</Typography>
									</CardContent>
								</Card>
							</div>
						))
					}
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
