import { slice, measure, engrave, setCylinderParams } from "../../core.js";
import { exportObject } from "../exporter.js";

var Command = function (execute) {
	this.execute = execute;
};

export var sliceObject = function () {
	return new Command(slice);
};

export var measureObject = function () {
	return new Command(measure);
};
export var engraveObject = function () {
	return new Command(engrave);
};
export var generateCylidner = function () {
	return new Command(setCylinderParams);
};
export var exportObject_ = function () {
	return new Command(exportObject);
};

export var Receiver = function () {
	return {
		execute: function (command, params) {
			return command.execute(...params);
		},
	};
};
