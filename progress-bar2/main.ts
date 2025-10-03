import Konva from "konva";

import ProgressModel from './model';
import ProgressView from './progressView'
import ProgressController from './progressController'

// Create stage
const stage = new Konva.Stage({
  container: "container", // id of <div>
  width: 500,
  height: 500,
});

// Create a layer
const layer = new Konva.Layer();
stage.add(layer);

var progressModel = new ProgressModel(0, 100);

var progressView = new ProgressView(progressModel, stage.width());

const progressController = new ProgressController(progressModel, progressView);

// Another way would be to have the view produce a custom Konva Shape.
// For now, we at least encapsulate the whole view in a Konva Group.
layer.add(progressView.getGroup());

const button = new Konva.Rect({
  x: 0,
  y: 300,
  width: 90,
  height: 30,
  fill: "gray",
});


button.on('click', () => {
    progressController.advance();
});

layer.add(button);
layer.draw();
