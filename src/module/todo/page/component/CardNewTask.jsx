import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import CardNewTaskStyle from './CardNewTask.style';
import { AppCard } from 'tpl';
import CardHeader from 'tpl/Card/CardHeader';
import CardBody from 'tpl/Card/CardBody';
class CardNewTask extends React.Component {
    render() {
        return (<div>
        <AppCard chart title="Add new">
            <CardHeader color={'primary'} plain={false}>
                {'Add new'}
            </CardHeader>
            <CardBody />
        </AppCard>
      </div>);
    }
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(CardNewTaskStyle)(connect(mapStateToProps, mapDispatchToProps)(CardNewTask)));
