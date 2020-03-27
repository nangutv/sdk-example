// @flow

let COVER_HEIGHT = 157;
let COVER_WIDTH = 105;

const containerStyle = {
    backgroundColor: '#111111',
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: "row",
    fontFamily: 'sans-serif',
    justifyContent: 'center',
};

const movieWrapperStyle = {
    marginTop: 60,
};

const movieContainerStyle = {
    cursor: 'pointer',
    margin: 10,
    height: COVER_HEIGHT,
    width: COVER_WIDTH,
    textAlign: 'center',
};

const imageSize = {
    height: COVER_HEIGHT,
    width: COVER_WIDTH,
};

const titleStyle = {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 13,
    marginTop: 10,
    overflow: 'hidden',
    textAlign: 'center',
    width: COVER_WIDTH,
};

const loadingStyle = {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 50,
};

export default {
    containerStyle,
    movieContainerStyle,
    movieWrapperStyle,
    imageSize,
    titleStyle,
    loadingStyle
}
