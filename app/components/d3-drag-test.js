/* eslint-disable no-console */
import Component from '@ember/component';
import { select, mouse } from 'd3-selection';
import { drag } from 'd3-drag'

export default Component.extend({

  tagName: 'circle',
  attributeBindings: [
    'coordinateX:cx',
    'coordinateY:cy',
    'radius:r'
  ],

  coordinateX: 20,
  coordinateY: 20,
  radius: 6,

  didInsertElement() {
    this._super(...arguments);
    this._bindDragEvents();
  },

  _bindDragEvents() {
    let selection = select(this.element);

    selection.call(
      drag()
        .on('start', () => this.onDragStart())
        .on('drag', () => {
          let [cx, cy] = mouse(this.element);
          this.onDrag(cx, cy);
        })
        .on('end', () => this.onDragEnd())
    );
  },

  onDragStart() {
    console.log('drag start');
  },

  onDrag(x, y) {
    console.log('drag', x, y);

    this.set('coordinateX', x);
    this.set('coordinateY', y);
  },

  onDragEnd() {
    console.log('drag end');
  }

});
