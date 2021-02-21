export const sortBase = (sortKey, base) => {

    if (typeof base[0][sortKey] === 'boolean') { //если это чекбокс
        const compare = function (a, b) {
            let x;
            let y;
            if (a[sortKey] === true) { x = 1 } else { x = 0 };
            if (b[sortKey] === true) { y = 1 } else { y = 0 };
            return y - x;
        };
        base.sort(compare);
    } else {
        base.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    };

    let dataSort = [...base]; // создаем доп переменную для перерисовки реакта из нового объекта

    return dataSort
}
