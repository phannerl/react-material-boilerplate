import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Add from './add';

export default class Dictmodal extends Component {
    state = {
        open: false
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    onSubmitVN = (text) => {
        this.additem(undefined, text)
    }
    done(key) {
        this.props.vocab[key].done(key)
    }
    render() {
        const { classes } = this.props
        var listitem = this.props.vocabIndex.map(id => {
            return (
                <li key={id}>
                    {/* {this.state.vocab[item].word} ({this.state.vocab[item].type}): {this.state.vocab[item].language.vi} */}
                    <div>
                        <input type="checkbox" onChange={() => this.done(id)} />
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    {this.props.vocab[id].word}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {this.props.vocab[id].type}
                                </Typography>
                                <Typography component="p">
                                    {this.props.vocab[id].language.vi}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <Card className={classes.cardbig}>
                    <CardContent>
                        
                        <Button className={classes.margina} >Delete a word</Button>
                        <Add handleClose = {this.handleClose} classes = {classes} vocab = {this.props.vocab} vocabIndex = {this.props.vocabIndex}/>
                        <div className={classes.margin}>
                            <h1>List word</h1>
                            <ul className={classes.list}>
                                {listitem}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
