import * as React from 'react';
import { withStyles } from '@material-ui/core';
import * as classNames from 'classnames';
import CardBodyStyle from './CardBody.style';
class CardBody extends React.Component {
    render() {
        const { classes, className, children, plain, profile, ...rest } = this.props;
        const cardBodyClasses = classNames({
            [classes.cardBody]: true,
            [classes.cardBodyPlain]: plain,
            [classes.cardBodyProfile]: profile,
            [className]: className !== undefined,
        });
        return (<div className={cardBodyClasses} {...rest}>
        {children}
      </div>);
    }
}
export default (withStyles(CardBodyStyle)(CardBody));
