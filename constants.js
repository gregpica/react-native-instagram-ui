import { Dimensions} from 'react-native';

const TOTAL_WIDTH = Dimensions.get('window').width;
const THIRD_OF_WIDTH = TOTAL_WIDTH/ 3;
const FOURTH_OF_WIDTH = TOTAL_WIDTH / 4;
const FIFTH_OF_WIDTH = TOTAL_WIDTH / 5;
const TWO_THIRDS_OF_WIDTH = (2 / 3) * TOTAL_WIDTH;

module.exports = {
    TOTAL_WIDTH,
    THIRD_OF_WIDTH,
    FOURTH_OF_WIDTH,
    FIFTH_OF_WIDTH,
    TWO_THIRDS_OF_WIDTH
};