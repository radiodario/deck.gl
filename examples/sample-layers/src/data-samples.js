/* load data samples for display */
// Data from main example
import allPoints from '../../main/data/sf.bike.parking.json';
import {pointGrid} from './utils';
import {pointsToWorldGrid} from './utils/grid-aggregator';

export {default as choropleths} from '../../main/data/sf.zip.geo.json';
export {default as geojson} from '../../main/data/sample.geo.json';
export {default as hexagons} from '../../main/data/hexagons.json';
export {default as routes} from '../../main/data/sfmta.routes.json';
export {default as iconAtlas} from '../../main/data/icon-atlas.json';

// Additional data for new layers
export {default as s2cells} from '../data/sf.s2level13cells.json';

export const points = allPoints;
export const positionOrigin = [-122.45, 37.75, 0];

export const meterPoints = pointGrid(1e3, [-5000, -5000, 5000, 5000]);

export const worldGrid = pointsToWorldGrid(points, 0.5);

export const zigzag = [
  {path: (new Array(12)).fill(0).map(
    (d, i) => [
      positionOrigin[0] + i * i * 0.001,
      positionOrigin[1] + Math.cos(i * Math.PI) * 0.2 / (i + 4)
    ])
  }
];

// time consuming - only generate on demand
let _points100K = null;
export function getPoints100K() {
  _points100K = _points100K || pointGrid(1e5, [-122.6, 37.6, -122.2, 37.9]);
  return _points100K;
}

let _points1M = null;
export function getPoints1M() {
  _points1M = _points1M || pointGrid(1e6, [-122.6, 37.6, -122.2, 37.9]);
  return _points1M;
}

let _points10M = null;
export function getPoints10M() {
  _points10M = _points10M || pointGrid(1e7, [-122.6, 37.6, -122.2, 37.9]);
  return _points10M;
}
