/*global require: true, global console: true */
var r = require('../vendor/r.js');
r.config({
  paths: {
    shifty: "../dist/shifty.min",
    underscore: "../dist/underscore-min",
    rekapi: "../dist/rekapi"
  }
});

r(['rekapi'], function(Kapi) {
  var kapi = new Kapi();
  var actor = new Kapi.Actor();
  kapi.addActor(actor);

  actor
    .keyframe(0, { x: 0 })
    .keyframe(250, { x: 100 });

  kapi.on('play', function () {
    console.log('The animation has begun!');
  });

  kapi.on('afterUpdate', function () {
    console.log('Actor state:', actor.get());
  });

  kapi.on('stop', function () {
    console.log('The animation has completed!');
  });

  kapi.play(1);
});
