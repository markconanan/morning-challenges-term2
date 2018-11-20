// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sum_numbers.js

function findWinner(players) {
    let total = []
    for (let player of players) {
        for (let score of player.scores) {
            total.push(score.reduce(function (a, b) {
                return a + b;
            }, 0))
        }
    }
    return players[total.indexOf(Math.max(...arr))].name;
}


var assert = require('assert');

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}

let players = []
describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [50, 100, 85], new Player('Nathan', [55, 90, 86]))]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [55, 90, 86]))]
        assert.equal('Nathan', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [50, 100, 85]))]
        assert.equal('Nathan', findWinner(players))
    })
})