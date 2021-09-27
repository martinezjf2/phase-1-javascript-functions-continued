// Your code here

function saturdayFun(p='roller-skate') {
    return `This Saturday, I want to ${p}!`
}

function mondayWork(p='go to the office') {
    return `This Monday, I will ${p}.`
}

function wrapAdjective(p="*") {
    return function(s='special') {
        return `You are ${p}${s}${p}!`
    }
}