import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

export default class Inputvi extends Component {
    getValue=()=>{
        return this.inputvi.value
    }
    render() {
    return (
      <div>
        <Input
            id="input-with-icon-adornment-1"
            startAdornment={
                <i className="far fa-edit"></i>
            }
            placeholder="Vietnamese"
            inputRef={(c) => this.inputvi = c}
            onChange={this.handleChange}
        />
      </div>
    )
  }
}
