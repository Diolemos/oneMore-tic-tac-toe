function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
}


export default Player;