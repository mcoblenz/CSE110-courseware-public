import Konva from "konva";
import ProgressModel from "./model";

// Create stage
const stage = new Konva.Stage({
  container: "container", // id of <div>
  width: 500,
  height: 500,
});

// Create a layer
const layer = new Konva.Layer();
stage.add(layer);

let progressModel = new ProgressModel(0, 10);

let progressCompleted = new Konva.Rect({
  x: 50,
  y: 200,
  width: (500 * progressModel.amount) / progressModel.max,
  height: 50,
  fill: "green",
});

let progressRemaining = new Konva.Rect({
  x: 50 + (500 * progressModel.amount) / progressModel.max,
  y: 200,
  width: 500 - (500 * progressModel.amount) / progressModel.max,
  height: 50,
  fill: "lightgray",
});

let button = new Konva.Rect({
  x: 200,
  y: 300,
  width: 100,
  height: 50,
  fill: "blue",
  cornerRadius: 10,
});

button.on("mousedown", () => {
    progressModel.advance();
    progressCompleted.width((500 * progressModel.amount) / progressModel.max);
    progressRemaining.x(50 + (500 * progressModel.amount) / progressModel.max);
    progressRemaining.width(500 - (500 * progressModel.amount) / progressModel.max);
});


layer.add(progressCompleted);
layer.add(progressRemaining);
layer.add(button);
layer.draw();
