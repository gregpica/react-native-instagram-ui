import { Dimensions} from 'react-native';

const TOTAL_WIDTH = Dimensions.get('window').width;
const THIRD_OF_WIDTH = TOTAL_WIDTH/ 3;
const FOURTH_OF_WIDTH = TOTAL_WIDTH / 4;
const FIFTH_OF_WIDTH = TOTAL_WIDTH / 5;
const SEVENTH_OF_WIDTH = TOTAL_WIDTH / 7;
const TENTH_OF_WIDTH = TOTAL_WIDTH / 10;
const TWO_THIRDS_OF_WIDTH = (2 / 3) * TOTAL_WIDTH;

const OFF_WHITE = '#f4f4f4';

module.exports = {
    TOTAL_WIDTH,
    THIRD_OF_WIDTH,
    FOURTH_OF_WIDTH,
    FIFTH_OF_WIDTH,
    TWO_THIRDS_OF_WIDTH,
    SEVENTH_OF_WIDTH,
    TENTH_OF_WIDTH,
    OFF_WHITE
};