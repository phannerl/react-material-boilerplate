import * as React from 'react';
import { connect } from 'react-redux';
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
export default connect(mapStateToProps, mapDispatchToProps)(Sample);
