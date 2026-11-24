function mincost(arr) {
    let totalCost = 0;

    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;

        totalCost += cost;

        arr.push(cost);

        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

console.log(mincost([4, 3, 2, 6])); 
console.log(mincost([1, 2, 3, 4, 5])); 

module.exports=mincost;
