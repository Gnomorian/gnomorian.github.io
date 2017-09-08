/*
    Made by William Cameron September 2017
    
    Hide all the tiles, show the indecated tile.
*/
function setTile(name) {
    var tiles = document.getElementsByClassName('tile')
    
    for(var i = 0; i < tiles.length; i++) {
        tiles[i].style.display = 'none';
    }
    
    var tile = document.getElementById(name);
    tile.style.display = 'block';
}