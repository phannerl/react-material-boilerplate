import * as React from 'react';
import { withStyles } from '@material-ui/core';
import * as classNames from 'classnames';
import cardStyle from './AppCard.style';
class Card extends React.Component {
    render() {
        const { classes, className, children, plain, profile, chart, ...rest } = this.props;
        const cardClasses = classNames({
            [classes.card]: true,
            [classes.cardPlain]: plain,
            [classes.cardProfile]: profile,
            [classes.cardChart]: chart,
        });
        return (<div className={cardClasses} {...rest}>
            {children}
         </div>);
    }
}
export const AppCard = (withStyles(cardStyle)(Card));
