import * as React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
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
			arrSearch : []
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

	render() {
		console.log("arrSearch:", this.state.arrSearch);
		const { classes }  = this.props;
		const { arrSearch } = this.state
		const bull = <span className={classes.bullet}>•</span>;
		return (
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
					{
						this.state.vocabIndex.map(key => (
							<div key={key} >
								<Card classes={{
										root: classes.card
									}}>
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
