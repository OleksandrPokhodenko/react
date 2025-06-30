export function getNumList() {
    const list = []
    while (list.length < 3) {
        const num = randomNum()
        if (!list.includes(num)) list.push(num)
    }
    return list
}
function randomNum(min = 0, max = 9) {
    return min + Math.floor(Math.random() * (max - min + 1))
}