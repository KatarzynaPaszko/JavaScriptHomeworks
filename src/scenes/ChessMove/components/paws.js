const pawsSetFunction = () => {

    const colors = ['black', 'white'];

    const pawsTypes = [
        {
            name: 'king',
            amount: 1,
            icon: 'fas fa-chess-king'
        },
        {
            name: 'queen',
            amount: 1,
            icon: 'fas fa-chess-queen',
        },
        {
            name: 'rook',  // wieza
            amount: 2,
            icon: 'fas fa-chess-rook',
        },
        {
            name: 'bishop',  // skoczek
            amount: 2,
            icon: 'fas fa-chess-bishop',
        },
        {
            name: 'knight',  // konik
            amount: 2,
            icon: 'fas fa-chess-knight',
        },
    ];

    let id = 0;
    let pawList = [];

    colors.forEach(color => {
        pawsTypes.forEach(element => {
            for (let index = 1; index <= element.amount; index++) {
                id++
                let paw = {
                    id: id,
                    name: element.name,
                    color: color,
                    icon: element.icon,
                    isOnBoard: false,
                }
                pawList.push(paw);
            }
        })
    });
    return pawList;
}
export const pawsSet = pawsSetFunction();
// const pawSet = pawsSet();
// console.log(pawSet);
