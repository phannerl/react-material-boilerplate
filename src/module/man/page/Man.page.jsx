import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import sampleStyle from './Man.style';
//

class Sample extends React.Component {
    constructor() {
        super(... arguments);
        this.state = {
            value: true,
            test: '',
            item: [],
        };
    }    
    plus() {
        this.setState({
            value: !this.state.value
        })
    }
    additem(e) {
        if(this.inputitem.value !== "") {
            var newitem = {
                test: this.inputitem.value,
                done: false,
                key: Date.now(),
            };
            this.setState((prevState) =>{
                return {
                    item: prevState.item.concat(newitem) 
                };
            });
            this.inputitem.value = "";
        } 
        console.log({newitem});
        e.preventDefault();
    }
    

    render() {
        const { classes } = this.props;
        var foundword = this.searchword;
        var listitem = this.state.item.map(item => { 
            return <li className={classes.listitem} key={item.key}>
            <input type="checkbox" onChange ={() => this.done(item.key) }/>{item.test}</li>})
        return (
        <div className={classes.content}>
            <h1 className={classes.describe}>Introduction:</h1>
            <button onClick={this.plus.bind(this)} >Show</button>
            <p>{this.state.value ? '' : 'This is my tab'}</p>
            <div className={classes.left}>
                <h1 className={classes.todo}>Todo:</h1>
                <form onSubmit={this.additem.bind(this)}>
                    <div className={classes.inputlist} >
                        <input className={classes.inputtab} ref={(a) => this.inputitem = a} placeholder="Enter task"/>
                        <button className={classes.buttontab} type="submit">Add</button>
                    </div>
                </form>
                <ul className={classes.list}>
                    {listitem}
                </ul>
            </div>
        </div>);
    }
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(sampleStyle)(connect(mapStateToProps, mapDispatchToProps)(Sample)));
