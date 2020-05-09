function maxProfit(trades) {
    let profit = 0

    for(let i = 0; i - 1 < trades.length; i++) {
        for(let j = i+1; j < trades.length; j++) {
            const possibleGain = trades[j] - trades[i]
            if(possibleGain > profit) {
                profit = possibleGain
            }
        }
        
    }

    return profit
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))