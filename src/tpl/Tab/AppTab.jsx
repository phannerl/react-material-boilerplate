import * as React from 'react';
import { withStyles, Tabs, Tab } from '@material-ui/core';
import * as classNames from 'classnames';
import appTabStyle from './AppTab.style';
import { AppCard } from '../Card/AppCard';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
class AppTab extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
    }
    render() {
        const { classes, headerColor, plainTabs, tabs, title, rtlActive, renderLeft, } = this.props;
        const cardTitle = classNames({
            [classes.cardTitle]: true,
            [classes.cardTitleRTL]: rtlActive,
        });
        return (<AppCard plain={false}>
                <CardHeader color={headerColor} plain={plainTabs} tabSeletedId={this.state.value}>
                {title !== undefined ? (<div className={cardTitle}>{title}</div>) : null}
                {renderLeft
            ? (<div className={cardTitle}> {renderLeft()} </div>)
            : null}
                <Tabs value={this.state.value} onChange={this.handleChange} classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.scrollableTab,
        }} scrollable scrollButtons="auto">
                    {tabs.map((prop, key) => {
            let icon = {};
            if (prop.tabIcon) {
                icon = {
                    icon: <prop.tabIcon />,
                };
            }
            return (<Tab classes={{
                root: classes.tabRootButton,
                labelContainer: classes.tabLabelContainer,
                label: classes.tabLabel,
                selected: classes.tabSelected,
                wrapper: classes.tabWrapper,
            }} key={key} label={prop.tabName} {...icon}/>);
        })}
                </Tabs>
                </CardHeader>
                
                <CardBody>
                {tabs.map((prop, key) => {
            if (key === this.state.value) {
                return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
        })}
                </CardBody>
        </AppCard>);
    }
}
export default (withStyles(appTabStyle)(AppTab));
