import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import sampleStyle from './Sample.style';
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
const mapStateToProps = (state, ownProps) => ({
    // ...mapStateToProps
    dataSampleComponent: 'Cool',
});
const mapDispatchToProps = (dispatch, ownProps) => ({
// ...mapDispatchToProps
});
export default withStyles(sampleStyle)(connect(mapStateToProps, mapDispatchToProps)(Sample));
