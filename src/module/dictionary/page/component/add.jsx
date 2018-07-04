import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Inputvi from "./listdict";
import { Input, InputLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import AppTextField from "../../../../tpl/TextField/AppTextField";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Add extends Component {
    state = {
        open: false,
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
  additem = (e, textVi) => {
      console.log('>>>', this.props.vocabIndex)
    if (this.inputen.value !== "" && textVi !== "") {
      var newId = this.props.vocabIndex.length + 1;
      var newData = {
        ...this.props.vocab,
        [newId]: {
          word: this.inputen.value,
          type: this.inputtype.value,
          language: {
            vi: textVi
          }
        }
      };
      this.updateData(newData);
      this.inputen.value = "";
      this.inputtype.value = "";
      this.inputviNew.setValue("");
    }
    // e.preventDefault();
  };
  updateData = (newItem) => {
    this.setState({
        vocab: newItem,
        vocabIndex: [...this.props.vocabIndex,this.props.vocabIndex.length+1] 
    });
}
  render() {
    const { classes, vocab, vocabIndex } = this.props;
    return (
      <div>
        <Button className={classes.margina} onClick={this.handleClickOpen}>Add a new word</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a new word</DialogTitle>
          <DialogContent>
            <form>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Enter A Word
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={<i className="far fa-edit" />}
                  placeholder="English"
                  inputRef={a => (this.inputen = a)}
                />
                <br />
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={<i className="far fa-edit" />}
                  placeholder="Parts of Speech"
                  inputRef={b => (this.inputtype = b)}
                />
                <br />
                <Inputvi ref={inputviref => (this.inputviNew = inputviref)} />
                <AppTextField onSubmit={this.onSubmitVN} />
              </FormControl>
              <Button onClick={this.additem}>Add</Button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>;
      </div>
    );
  }
}
