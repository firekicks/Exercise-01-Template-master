// Exercise 01: Normalized Movement
// Name: Atri Mehta
// Date: 10/24/2023

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    width: 800,
    height: 750,
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
let playerDirection; 