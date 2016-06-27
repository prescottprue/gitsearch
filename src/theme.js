import {
  pinkA200,
  grey100, grey600, grey400, grey700,
  blue600, blue500, blue700,
  white, darkBlack
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: grey600,
    primary2Color: grey600,
    primary3Color: grey100,
    accent1Color: blue600,
    accent2Color: blue700,
    accent3Color: blue500,
    textColor: grey700,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: pinkA200
  }
}
