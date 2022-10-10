let iterCounter = 0;
let mapSize = 10 + randInt(91);
let halfMapSize = Math.floor(mapSize / 2);
let myMap = mapFill(mapCreate(mapSize));

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function mapCreate(size) {
    let map = [];
    for (let i = 0; i < size; i++) {
        map[i]=[];
        for (let j = 0; j < size; j++) {
            map[i][j] = '  ';
        }
    }
    return map;
}

function mapFill(map) {
    let i, j, lndCell;
    i = j = halfMapSize;
    for (let k = 0; k < (mapSize * (halfMapSize + Math.floor(Math.random() * halfMapSize))); k++){
        lndCell = '@#';
        if (i > 1 && i < (mapSize - 2) && j > 1 && j < (mapSize - 2)) {
            switch (randInt(8)) {
                case 0:
                    map[i-1][j]   = lndCell;  // n
                    i--;
                    break;
                case 1:
                    map[i-1][j+1] = lndCell;  // ne
                    i--;
                    j++;
                    break;
                case 2:
                    map[i][j+1]   = lndCell;  // e
                    j++
                    break;
                case 3:
                    map[i+1][j+1] = lndCell;  // se
                    i++;
                    j++;
                    break;
                case 4:
                    map[i+1][j]   = lndCell;  // s
                    i++;
                    break;
                case 5:
                    map[i+1][j-1] = lndCell;  // sw
                    i++;
                    j--;
                    break;
                case 6:
                    map[i][j-1]   = lndCell;  // w
                    j--;
                    break;
                case 7:
                    map[i-1][j-1] = lndCell;  // nw
                    i--;
                    j--;
                    break;
                default:
                    i = j = halfMapSize;
                    break;
            }
        } else {
            i = j = halfMapSize;
        }
        iterCounter = k;
    }
    return map;
}

function mapLog(map) {
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            process.stdout.write(map[i][j].toString());
        }
        console.log();
    }
}

mapLog(myMap)
console.log(`\nMap size: ${mapSize} x ${mapSize}\n${iterCounter} iterations`);