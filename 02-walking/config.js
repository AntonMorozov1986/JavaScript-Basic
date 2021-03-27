'use strict';

/**
 *
 * @type {{colsCount: number, readonly fullHeight: number, readonly fullWidth: number, walls: number, rowsCount: number}}
 */
const config = {
  rowsCount: 11,
  colsCount: 11,
  walls: 2,

  get fullHeight() {
    return this.rowsCount + this.walls;
  },

  get fullWidth() {
    return this.colsCount + this.walls;
  }
}