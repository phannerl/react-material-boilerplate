// import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as vi from 'react-intl/locale-data/vi';
import { AppRoute } from './router/router';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { getTheme } from './theme/themeHelper';
const messages = require('./i18n/build.json');
addLocaleData([...en, ...vi]);
class App extends React.Component {
    render() {
        const { paletteType, lang } = this.props;
        return (<IntlProvider locale={lang} messages={messages[lang]}>
                <MuiThemeProvider theme={getTheme(paletteType)}>
                    <CssBaseline />
                    <AppRoute />
                </MuiThemeProvider>
            </IntlProvider>);
    }
}
const mapStateToProps = (state) => {
    return {
        paletteType: state.app.theme.paletteType,
        lang: state.app.lang,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
