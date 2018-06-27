import { connect } from 'react-redux';
import { getTasksByTag, getTagId } from '../../logic.redux/reselect';
import { Task } from 'tpl';
const mapStateToProps = (state, ownProps) => ({
    // ...mapStateToProps
    tasks: getTasksByTag(state, ownProps),
    tag: getTagId(state, ownProps),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
// ...mapDispatchToProps
});
// export default connect(mapStateToProps, mapDispatchToProps)(TabRedux)
export default connect(mapStateToProps, mapDispatchToProps)(Task);
