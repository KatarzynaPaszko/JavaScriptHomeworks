enum Icon {
    king = "king",
    queen = "queen",
    rook =  "rook",
    bishop = "bishop",
    knight = "knight",
};

enum Colors {
    black = "black",
    white = "white",
};

export interface IPaw {
    id: number,
    name: Icon,
    color: Colors,
    icon: string,
    isOnBoard: boolean,
}

const pawsSetFunction = () => {

    const colors = [
        Colors.black,
        Colors.white,
    ]

    const pawsTypes = [
        {
            name: Icon.king,
            amount: 1,
            icon: 'fas fa-chess-king'
        },
        {
            name: Icon.queen,
            amount: 1,
            icon: 'fas fa-chess-queen',
        },
        {
            name: Icon.rook,  // wieza
            amount: 2,
            icon: 'fas fa-chess-rook',
        },
        {
            name: Icon.bishop,  // skoczek
            amount: 2,
            icon: 'fas fa-chess-bishop',
        },
        {
            name: Icon.knight,  // konik
            amount: 2,
            icon: 'fas fa-chess-knight',
        },
    ];

    let id = 0;
    let pawList: IPaw[] = [];
    colors.forEach(color => {
        pawsTypes.forEach(element => {
            for (let index = 1; index <= element.amount; index++) {
                id++
                let paw: IPaw = {
                    id: id,
                    name: element.name,
                    color: color,
                    icon: element.icon,
                    isOnBoard: false,
                }
                pawList.push(paw);
            }
        })
    })
    return pawList;
}
export const pawsSet = pawsSetFunction();
// const pawSet = pawsSet();
// console.log(pawSet);
