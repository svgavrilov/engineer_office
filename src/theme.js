import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: red[500],
        }
    },
    background: {
        default: grey[500],
    },
});

export default theme;