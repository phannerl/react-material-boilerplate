import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, FormGroup, FormControlLabel, List, ListSubheader, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, } from '@material-ui/core';
import styles from './Setting.style';
import Switch from '@material-ui/core/Switch';
import { changeTheme, changeLanguage } from '../logic.redux/action';
import { Palette, Language } from '@material-ui/icons';
import { FormattedMessage } from 'react-intl';
class Setting extends React.Component {
    renderSwitch(title, switchOptions) {
        const { onChange, label } = switchOptions;
        const { classes } = this.props;
        return (<div>
        {title}
        <FormControlLabel control={<Switch checked={this.props.paletteType === 'light' ? true : false} onChange={onChange}/>} classes={{
            label: classes.childLabel,
        }} label={label}/>
      </div>);
    }
    render() {
        const { classes, lang, switchTheme, paletteType, switchLang } = this.props;
        const newLang = lang === 'vi' ? 'en' : 'vi';
        console.log('RENDER PAGE');
        return (<div>
        <FormGroup classes={{ root: classes.root }}>
          <List subheader={<ListSubheader><FormattedMessage id={'Setting.theme'}/></ListSubheader>}>
            <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText primary={<FormattedMessage id={'Setting.darkTheme'}/>}/>
                <ListItemSecondaryAction>

                  <Switch onChange={switchTheme} checked={paletteType !== 'light'}/>
                </ListItemSecondaryAction>
              </ListItem>
          </List>
          <List subheader={<ListSubheader>Lanugage</ListSubheader>}>
            <ListItem>
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText primary="Vietnam"/>
                <ListItemSecondaryAction>
                  <Switch onChange={() => switchLang(newLang)} checked={lang !== 'en'}/>
                </ListItemSecondaryAction>
              </ListItem>
          </List>
        </FormGroup>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    // ...mapStateToProps
    lang: state.app.lang,
    paletteType: state.app.theme.paletteType,
});
const mapDispatchToProps = (dispatch, props) => ({
    // ...mapDispatchToProps
    switchTheme: () => dispatch(changeTheme()),
    switchLang: (lang) => dispatch(changeLanguage(lang)),
});
export default (withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Setting)));
