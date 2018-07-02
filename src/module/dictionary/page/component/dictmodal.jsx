import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Inputvi from './listdict';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default class Dictmodal extends Component {
    state = {
        open: false
    }
    handleClose = () =>{
        this.setState({ open: false });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    additem(e) {
        // if(this.inputen.value !== "" && this.inputvi.value !== "" ) {
        //     var newitem = {
        //         en: this.inputen.value,
        //         vi: this.inputvi.value,
        //         type: this.inputtype.value,
        //         id: this.state.list.length
        //     };
        //     this.setState((prevState) =>{
        //         return {
        //             list: prevState.list.concat(newitem) 
        //         };
        //     });
        //     this.inputen.value = "";
        //     this.inputtype.value = "";
        //     this.inputvi.value = "";
        // } 
        // console.log('>>>>', this.inputviNew.getValue())
        if(this.inputen.value !== "" && this.inputviNew.getValue() !== "" ) {
            var newId = this.props.vocabIndex.length +1
            var newData = {
                ...this.props.vocab,
                [newId]: {
                    word: this.inputen.value,
                    type: this.inputtype.value,
                    language: {
                        vi: this.inputviNew.getValue(),
                    },
                }
            };
            this.props.updateData(newData)
            // var newIndex = [...this.state.vocabIndex,this.state.vocabIndex.length+1] 
        
            // console.log(newIndex);

            // console.log(this.state.vocab);
            // this.state.vocabIndex.map(item => {return console.log(this.state.vocab[item]);
            // });
            this.inputen.value = "";
            this.inputtype.value = "";
            this.inputviNew.value = "";
        } 
        e.preventDefault();
    }
    deleteitem(e) {
        // if(this.inputen.value !== "" && this.inputvi.value !== "" ) {
        //     var newitem = {
        //         en: this.inputen.value,
        //         vi: this.inputvi.value,
        //         type: this.inputtype.value,
        //         id: this.state.list.length
        //     };
        //     this.setState((prevState) =>{
        //         return {
        //             list: prevState.list.concat(newitem) 
        //         };
        //     });
        //     this.inputen.value = "";
        //     this.inputtype.value = "";
        //     this.inputvi.value = "";
        // } 
        // console.log('>>>>', this.inputviNew.getValue())
      //  // if(this.inputen.value !== "") {
        //     var newData = this.state.vocabIndex.map(item => {
        //         if(this.)
        //     })
        //     this.props.updateData(newData)
        //     // var newIndex = [...this.state.vocabIndex,this.state.vocabIndex.length+1] 
        
        //     // console.log(newIndex);

        //     // console.log(this.state.vocab);
        //     // this.state.vocabIndex.map(item => {return console.log(this.state.vocab[item]);
        //     // });
        //     this.inputen.value = "";
        //     this.inputtype.value = "";
        //     this.inputviNew.value = "";
        // } 
        // e.preventDefault();
    }
    done(key){
		this.props.vocab[key].done(key)
	}
    render() {
        const {classes} = this.props
        var listitem = this.props.vocabIndex.map(id => { 
            return (
                <li key={id}>
                {/* {this.state.vocab[item].word} ({this.state.vocab[item].type}): {this.state.vocab[item].language.vi} */}
                    <div>
                    <input type="checkbox" onChange ={() => this.done(id) }/>
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
                    <Button className = {classes.margina} onClick={this.handleClickOpen}>Add a new word</Button>
                    <Button className = {classes.margina} >Delete a word</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Add a new word</DialogTitle>
                        <DialogContent>
                        <form >
                            <FormControl className = {classes.margin}>
                            <InputLabel htmlFor="input-with-icon-adornment">Enter A Word</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <i className="far fa-edit"></i>
                                }
                                placeholder="English"
                                inputRef={(a) => this.inputen = a}
                            />
                            <br/>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <i className="far fa-edit"></i>
                                }
                                placeholder="Parts of Speech"
                                inputRef={(b) => this.inputtype = b}
                            />
                            <br/>
                            {/* <Input
                                id="input-with-icon-adornment-1"
                                startAdornment={
                                    <i className="far fa-edit"></i>
                                }
                                placeholder="Vietnamese"
                                inputRef={(c) => this.inputvi = c}
                                onChange={this.handleChange}
                            /> */}
                            <Inputvi ref={(inputviref) => this.inputviNew = inputviref}/>
                            </FormControl>
                            <Button onClick={this.additem.bind(this)}>Add</Button>
                        </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div className = {classes.margin}>
                        <h1>List word</h1>
                        <ul className = {classes.list}>
                            {listitem}
                        </ul> 
                    </div>
                </CardContent>
            </Card>
            </div>
        )
    }
}
