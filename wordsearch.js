const wordSearch = (letters, word) => { 
    
    if (letters.length === 0) {
        return false;
    };
    
    const letterJoin = letters.map(ls => ls.join('')) //joins letters horizontally
    const lettersCaps = letterJoin.map(ls => {
      return ls.toUpperCase();
    });
    const wordCaps = word.toUpperCase();
    
    const arr = [];

    const transpose = () => {
        for (let i = 0; i < lettersCaps[0].length; i++) {
            arr.push([]);
        }
    
        for (let x = 0; x < lettersCaps.length; x++){
            for (let y = 0; y < lettersCaps[x].length; y++){
                arr[y][x] = lettersCaps[x][y]
            }
        }
    }
    
    transpose();

    const verticalJoin = arr.map(ls => ls.join(''))
    
    for (l of verticalJoin) {
        if (l.includes(wordCaps)) {
        return true;
        } 
    } 

    for (l of lettersCaps) {
        if (l.includes(wordCaps)) {
        return true;
        } 
    } 
    
    return false;
}


module.exports = wordSearch