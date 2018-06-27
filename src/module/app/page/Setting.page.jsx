import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, FormGroup, FormControlLabel, List, ListSubheader, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, } from '@material-ui/core';
import styles from './Setting.style';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
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
        //const newLang = lang === 'ja' ? 'vi' : 'ja';
        //console.log('RENDER PAGE', newLang);
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
                    <Select onChange={(event) => switchLang(event.target.value)} value={lang}>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="vi">Vietnam</MenuItem>
                    <MenuItem value="ja">Japan</MenuItem>
                  </Select>
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
