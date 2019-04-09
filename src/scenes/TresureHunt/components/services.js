import { treasureMap } from './treasureMap';

export const mapServices = (function () {
    function privateFunction() {
        console.log(treasureMap);
    }



    function createMap() {
        privateFunction();
    }

    return {
        createMap: createMap,
    };
});

export default mapServices;

// console.log(myRevealingModule);

// myRevealingModule.setName("Mark");
// myRevealingModule.getName();