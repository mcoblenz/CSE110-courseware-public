
import Konva from "konva";
import ProgressModel from "./model";
import { invalid } from "moment";

export default class ProgressView {
    model: ProgressModel;
    width: number;
    completedProgressRect: Konva.Rect;
    incompleteProgressRect: Konva.Rect;
    group: Konva.Group;

    constructor(model:  ProgressModel, width: number) {
        this.model = model;
        this.width = width;

        this.completedProgressRect = new Konva.Rect({
          x: 0,
          y: 0,
          width: (model.amount / model.max) * width,
          height: 200,
          fill: "green",
        });
        
        
        this.incompleteProgressRect = new Konva.Rect({
          x: (model.amount / model.max) * width,
          y: 0,
          width: width - (model.amount / model.max) * width,
          height: 200,
          fill: "lightgray",
        });

        this.group = new Konva.Group();
        this.group.add(this.completedProgressRect);
        this.group.add(this.incompleteProgressRect);
    }

    getGroup() : Konva.Group {
        return this.group;
    }

    invalidate() : void {
        this.completedProgressRect.width((this.model.amount / this.model.max) * this.width);
        this.incompleteProgressRect.x((this.model.amount / this.model.max) * this.width);
        this.incompleteProgressRect.width(this.width - (this.model.amount / this.model.max) * this.width);
        this.group.getLayer()?.draw();
    }

}