// import React from 'react';
import { treasureMap } from './chessBoard';

class MapServices {
    static privateFunction() {
        console.log(treasureMap);

        return treasureMap;
    };



    static createMap() {
        this.privateFunction();
    };


}

export default MapServices;