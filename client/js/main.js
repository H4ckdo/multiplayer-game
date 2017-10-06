requirejs.config({
    baseUrl: 'client/js',
    paths: {
      io: '/vendors/socket-io'     
    }
});

// Start the main app logic.
requirejs(['client/js/vendors/socket-io.js','client/js/game.js', 'client/js/game-packages.js'],
    function (io, game, gamePackages) {
        Game.start();
        Game.socket = io();
        Game.packages();
    }
);