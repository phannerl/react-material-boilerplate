import * as React from 'react';
import { withStyles } from '@material-ui/core';
import sampleStyle from './SampleWithoutConnect.style';
class Sample extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (<div>
       <span>Sample</span>
      </div>);
    }
}
export default withStyles(sampleStyle)(Sample);
