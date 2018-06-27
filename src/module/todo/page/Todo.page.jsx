import * as React from 'react';
import { withStyles, Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { connect } from 'react-redux';
import Code from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';
import todoStyle from './Todo.style';
import AppTab from 'tpl/Tab/AppTab';
import { addTag } from '../logic.redux/action';
import { v4 } from 'uuid';
import TabRedux from './component/TabRedux';
class Todo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0,
            modalOpen: false,
            tagText: '',
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
        // shouldComponentUpdate() {
        //   return false
        // }
        this.renderTabData = () => {
            const { tagsIndex, tags } = this.props;
            return tagsIndex.map(tagId => ({
                tabName: tags[tagId].title,
                tabIcon: this.renderTabIcon(tagId),
                tabContent: <TabRedux tagId={tagId}/>,
            }));
        };
        this.showModal = () => {
            this.setState({ modalOpen: true });
        };
        this.hideModal = () => {
            this.setState({ modalOpen: false });
        };
        this.onChangeTagText = (event) => {
            const { value } = event.target;
            this.setState({
                tagText: value,
            });
        };
        this.onSubmitNewTag = () => {
            const { tagText } = this.state;
            this.props.addTag({
                id: v4(),
                title: tagText,
            });
            this.setState({
                tagText: '',
                modalOpen: false,
            });
        };
        this.onKeyPressEdit = (event) => {
            const { tagText } = this.state;
            if (event.key === 'Enter') {
                this.onSubmitNewTag();
                event.preventDefault();
            }
        };
    }
    renderTabIcon(tagKey) {
        switch (tagKey) {
            case '':
            default: return Code;
        }
    }
    render() {
        const { classes } = this.props;
        const tabs = this.renderTabData();
        return (<div className={classes.container}>
        <Dialog open={this.state.modalOpen} onClose={this.hideModal}>
            <DialogTitle id="form-dialog-title">Add tag</DialogTitle>
            <DialogContent>
              <TextField id="tag" label="Tag" className={classes.textField} placeholder={'Home'} value={this.state.tagText} onChange={this.onChangeTagText} onKeyPress={this.onKeyPressEdit} margin="normal"/>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.hideModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmitNewTag} color="primary">
              Add
            </Button>
          </DialogActions>
          
        </Dialog>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className={classes.todoContainer}>
            <AppTab renderLeft={() => (<div className={classes.addButtonContainer}>
                  <Button variant="fab" color="primary" className={classes.addButton} onClick={this.showModal}>
                    <AddIcon />
                  </Button>
                </div>)} headerColor="info" tabs={tabs}/>
          </Grid>
        </Grid>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    tags: state.todo.tags,
    tagsIndex: state.todo.tagsIndex,
});
const mapDispatchToProps = (dispatch, props) => ({
    // ...mapDispatchToProps
    addTag: (tag) => dispatch(addTag(tag)),
});
export default (withStyles(todoStyle)(connect(mapStateToProps, mapDispatchToProps)(Todo)));
