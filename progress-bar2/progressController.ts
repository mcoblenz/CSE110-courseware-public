import ProgressModel from './model';
import ProgressView from './progressView'


export default class ProgressController {
    model: ProgressModel;
    view: ProgressView;

    constructor(model: ProgressModel, view: ProgressView) {
        this.model = model;
        this.view = view;
    }

    advance() : void {
        this.model.advance();
        this.view.invalidate();
    }
}