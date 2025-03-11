export interface Point {
    x : number;
    y : number;
}

export const printCoord = (pt: Point) => {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x : 100, y : 200});
