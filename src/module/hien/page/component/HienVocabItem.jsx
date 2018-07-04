
import * as React from 'react';
import {
	withStyles,
	List,
	ListItem,
	ListItemSecondaryAction, ListItemText, Checkbox, Avatar } from '@material-ui/core';
import sampleStyle from '../Hien.style.js'

const keyTypeToString = (type) => {
	switch(type) {
		case 'n': return 'Noun'
		case 'adj': return 'Adjective'
		default: return 'Unknown'
	}
}


class HienVocabItem extends React.PureComponent {
	render() {
		const { vocaId, handleToggle, isChecked, image = 'http://hd.wallpaperswide.com/thumbs/cute_stylish_child_girl-t2.jpg', word, type, language, classes } = this.props
		console.log('Key', vocaId)
		return (
			<ListItem key={vocaId} dense button className={classes.listItem}>
				<Avatar alt="Image" src={image} />
				<ListItemText primary={word} />
				<ListItemText primary={keyTypeToString(type)} />
				<ListItemText primary={language.vi} />
				<ListItemSecondaryAction>
					<Checkbox
						onChange={handleToggle(vocaId)}
						checked={isChecked}
					/>
				</ListItemSecondaryAction>
			</ListItem>
		)
	}
}
export default withStyles(sampleStyle)(HienVocabItem);