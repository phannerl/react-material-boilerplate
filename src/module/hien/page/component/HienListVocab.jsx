
import * as React from 'react';
import {
	withStyles,
	List,
	ListItem,
	ListItemSecondaryAction, ListItemText, Checkbox, Avatar } from '@material-ui/core';
import sampleStyle from '../Hien.style.js'
import HienVocabItem from './HienVocabItem'
import HienDelete from './HienDelete'



class HienListVocab extends React.PureComponent {
	state = {
		checked: []
	}
	handleToggle = value => () => {
		console.log('handleToggle', value)
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

	render() {
		const { vocabIndex, vocab, handleDelete } = this.props
		const { checked } = this.state 
		return(
			<div>
				<HienDelete handleDelete={() => handleDelete(checked)} />
				{vocabIndex.map(vocaId => (
					<div key={vocaId}>
						<HienVocabItem
							handleToggle={this.handleToggle}
							isChecked={checked.indexOf(vocaId) !== -1}
							image={vocab[vocaId].image}
							word={vocab[vocaId].word}
							type={vocab[vocaId].type}
							language={vocab[vocaId].language}
							vocaId={vocaId}
					/>
					</div>
				))}
			</div>
		)
			
		
	}
}
export default withStyles(sampleStyle)(HienListVocab);