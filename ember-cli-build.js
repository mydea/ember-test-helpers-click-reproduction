'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-d3': {
      only: [
        'd3-scale',
        'd3-selection',
        'd3-array',
        'd3-axis',
        'd3-collection',
        'd3-time-format',
        'd3-scale',
        'd3-shape',
        'd3-format',
        'd3-timer',
        'd3-time',
        'd3-color',
        'd3-transition',
        'd3-interpolate',
        'd3-ease',
        'd3-dispatch',
        'd3-path'
      ]
    }
  });

  return app.toTree();
};
