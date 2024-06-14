function validation(x, y) {
    return (x >= 0 && x < 8 && y >= 0 && y < 8);
}

export function knightMoves(start, end) {
    const moves = [
        [-2, -1], [-1, -2], [1, -2], [2, -1],
        [2, 1], [1, 2], [-1, 2], [-2, 1]
    ];

    let q = [];
    q.push([start]);

    let visit = new Set();
    visit.add(start.toString());

    while (q.length > 0) {
        let path = q.shift();
        let [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            endGame(path);
            return;
        }

        for (let [dx, dy] of moves) {
            let nx = x + dx;
            let ny = y + dy;

            if (validation(nx, ny) && !visit.has([nx, ny].toString())) {
                visit.add([nx, ny].toString());
                q.push([...path, [nx, ny]]);
            }
        }
    }
    return null;
}

export function endGame(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

    for (let [x, y] of path) {
        console.log([x, y]);
    }
    return null;
}
