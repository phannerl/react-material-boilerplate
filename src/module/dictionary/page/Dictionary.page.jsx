import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import sampleStyle from './Dictionary.style';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Inputvi from './component/listdict';
import Dictmodal from './component/dictmodal';

class Dictionary extends React.Component {
    constructor() {
        super();
        this.state = {
            word: {
                id: 0,
                en: '',
                vi: '',
                type: ''
            },
            wordsearched: {
                id: 0,
                en: '',
                vi: '',
                type: ''
            },
            list: [],
            vocab: {
                '1': {
                    word: 'Hello',
                    language: {
                        en: 'Gretting',
                        vi: 'Xin chào',
                    },
                    type: 'noun',
                    image: 'https://image.png',
                    done: 'false',
                },
                '2': {
                    word: 'Good bye',
                    language: {
                        en: 'See baby',
                        vi: 'Tạm biệt',
                    },
                    type: 'noun',
                    image: 'https://image.png',
                    done: 'false',
                },
                '3': {
                    word: 'Good',
                    language: {
                        en: 'Very satisfactory',
                        vi: 'Tốt',
                    },
                    type: 'adjective',
                    image: 'https://image.png',
                    done: 'false',
                },
                '4': {
                    word: 'Perception',
                    language: {
                        en: 'Your knowlegde',
                        vi: 'Sự nhận thức',
                    },
                    type: 'noun',
                    image: 'https://image.png',
                    done: 'false',
                },
                
            },
            vocabIndex: ['1', '2', '3', '4'],
            open: false,
            
    }

    }
   
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
        if(this.inputen.value !== "" && this.inputvi.value !== "" ) {
            var newId = this.state.vocabIndex.length +1
            var newData = {
                ...this.state.vocab,
                [newId]: {
                    word: this.inputen.value,
                    type: this.inputtype.value,
                    language: {
                        vi: this.inputvi.value,
                    },
                }
            };


            // var newIndex = [...this.state.vocabIndex,this.state.vocabIndex.length+1] 
        
            // console.log(newIndex);
            this.setState({
                vocab: newData,
                vocabIndex: [...this.state.vocabIndex,this.state.vocabIndex.length+1] 
            });
            console.log(this.state.vocab);
            this.state.vocabIndex.map(item => {return console.log(this.state.vocab[item]);
            });
            this.inputen.value = "";
            this.inputtype.value = "";
            this.inputvi.value = "";
        } 
        e.preventDefault();
    }
    searchitem(e) {
        // var dict = this.state.list;
        // for (var key in dict) {

        // // Do stuff. ex: console.log(dict[key])
        //     if(dict[key].en === this.inputen.value) {
        //         console.log(dict[key].word);
        //         var newitem = {
        //             en: dict[key].en,
        //             vi: dict[key].vi,
        //             type: dict[key].type,
        //         };
        //         console.log(newitem);
        //         this.setState((prevState) =>{
        //             return {
        //                 wordsearched: newitem,
        //             };
        //         });
        //         this.inputen.value = "";
        //     } 
        //     console.log(dict[key]);
        //     e.preventDefault();
        // }
        if(this.inputen.value !== "" && this.inputviNew.getValue() === "" ) {
            var serch = this.state.vocabIndex.map(item => {
                if(this.state.vocab[item].word === this.inputen.value) {
                    var newitem = {
                            en: this.state.vocab[item].word,
                            vi: this.state.vocab[item].language.vi,
                            type: this.state.vocab[item].type,
                        };
                    console.log(newitem);
                    this.setState((prevState) =>{
                            return {
                                wordsearched: newitem,
                            };
                        });
                    this.inputen.value = "";
                    //console.log(this.state.vocab[item]);
                    } 
                    //console.log(this.state.vocab[item]);
                    e.preventDefault();
            })
        }
        // if(this.inputen.value !== "" && this.inputvi.value === "" ) {
        //     var serch = this.state.vocabIndex.filter((key)=> {
        //         console.log('DATA', this.state.vocab[key])
        //         if(this.state.vocab[key].word.toUpperCase().indexOf(text.toUpperCase())>=0) return true
        //         return false
        //     })
        // }
        else if(this.inputvi.value !== "" && this.inputen.value === "" ) {
            console.log(this.inputvi.value);
            var serchvi = this.state.vocabIndex.map(item => {
                if(this.state.vocab[item].language.vi === this.inputvi.value) {
                    console.log(this.state.vocab[item].language.vi);
                    var newitem = {
                            en: this.state.vocab[item].word,
                            vi: this.state.vocab[item].language.vi,
                            type: this.state.vocab[item].type,
                        };
                    console.log(newitem);
                    this.setState((prevState) =>{
                            return {
                                wordsearched: newitem,
                            };
                        });
                    this.inputvi.value = "";
                    } 
                    e.preventDefault();
            })
        }

    }   

    updateData = (newItem) => {
        this.setState({
            vocab: newItem,
            vocabIndex: [...this.state.vocabIndex,this.state.vocabIndex.length+1] 
        });
    }
    render() {
        const { classes } = this.props;
        // var listitem = this.state.list.map(item => { 
        //     return (
        //         <li  key={item.id}>
        //             {item.en} ({item.type}): {item.vi}
        //         </li>
        //     )
        // })
        console.log('>>>', this.state.vocab)
        var wordfound = this.state.wordsearched
        return (
            
            <div>
                <div className={classes.left}>
                    <Card className={classes.cardbig}>
                        <CardContent>
                        <h1 className = {classes.margin}>Tool box</h1>
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
                                    {/* <Input
                                        id="input-with-icon-adornment-1"
                                        startAdornment={
                                            <i className="far fa-edit"></i>
                                        }
                                        placeholder="Vietnamese"
                                        inputRef={(c) => this.inputvi = c}
                                        onChange={this.handleChange}
                                    /> */}
                                    <Inputvi
                                        ref={(inputviref) => this.inputviNew = inputviref}
                                    />
                                    </FormControl>
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={this.searchitem.bind(this)}>Search</Button>
                                </form>   
                            </CardContent>
                        </Card>
                        <Card className={classes.cardbig}>
                            <CardContent>
                                <ul className = {classes.list}>
                                    <li>
                                        {wordfound.en} ({wordfound.type}): {wordfound.vi}
                                    </li>
                                </ul> 
                            </CardContent>
                        </Card>
                    </div>
                    <div className={classes.right}>
                    <Dictmodal classes={classes} updateData={this.updateData} vocab = {this.state.vocab} vocabIndex = {this.state.vocabIndex}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(sampleStyle)(connect(mapStateToProps, mapDispatchToProps)(Dictionary)));
