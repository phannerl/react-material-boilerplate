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


class HienAdd extends React.PureComponent{
	state= {
		open: false,
		type: 'Noun',
		textWord:"",
		textMeanEn:"",
		textMeanVi: "",
		imagePreviewUrl:""
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
	
	render(){
		const { classes, checked }  = this.props;
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
			if (imagePreviewUrl) {
				$imagePreview = (<img className={classes.img} src={imagePreviewUrl} />);
			} else {
				$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		return(
			<div>
				{/* ADD*/}
				<Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="Add" className={classes.fab}>
					<AddIcon />
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Add Vocabulary</DialogTitle>
					<form onSubmit={(event) => this.props.onAddItem(event, this.state.textWord,  this.state.textMeanEn,  this.state.textMeanVi, this.state.type, this.state.image)}>
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
			</div>
		)
	}
}
export default withStyles(sampleStyle)(HienAdd);