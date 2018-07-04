import * as React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import ApptextfieldStyle from './AppTextField.style';
class AppTextField extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: this.props.value || '',
        };
        this.onChange = (event) => {
            const { value } = event.target;
            this.setState({
                text: value,
            });
        };
        this.onKeyPress = (event) => {
            const { onSubmit } = this.props;
            const { text } = this.state;
            if (event.key === 'Enter') {
                this.props.onSubmit && this.props.onSubmit(text);
                this.setState({
                    text: '',
                });
                event.preventDefault();
            }
        };
    }
    render() {
        const { classes, onSubmit, ...restInput } = this.props;
        const { text } = this.state;
        return (<TextField {...restInput} inputProps={{
            className: classes.input,
        }} InputLabelProps={{
            style: {
                color: 'black',
            },
        }} value={text} className={classes.container} onChange={this.onChange} onKeyPress={this.onKeyPress}/>);
    }
}
export default withStyles(ApptextfieldStyle)(AppTextField);
