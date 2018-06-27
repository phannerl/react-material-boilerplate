import * as React from 'react';
import { withStyles } from '@material-ui/core';
import * as classNames from 'classnames';
import cardHeaderStyle from './CardHeader.style';
class CardHeader extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.tabSeletedId !== this.props.tabSeletedId;
    }
    render() {
        const { classes, className, children, color, plain, stats, icon, ...rest } = this.props;
        const cardHeaderClasses = classNames({
            [classes.cardHeader]: true,
            [classes[color + 'CardHeader']]: color,
            [classes.cardHeaderPlain]: plain,
            [classes.cardHeaderStats]: stats,
            [classes.cardHeaderIcon]: icon,
            [className]: className !== undefined,
        });
        return (<div className={cardHeaderClasses} {...rest}>
        {children}
      </div>);
    }
}
export default (withStyles(cardHeaderStyle)(CardHeader));
