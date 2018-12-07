"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("routes/map/controller");
class MapRoutes {
    constructor() {
        this.fetchPinLocations = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.controller.getAllPinLocations();
            console.log(`Endpoint to fetch pin locations was called ${data}`);
            response.status(200).json(data);
        });
        this.routes = express_1.Router();
        this.controller = new controller_1.MapController();
        this.configureMapRoutes();
    }
    configureMapRoutes() {
        this.routes.get('/map', this.fetchPinLocations);
    }
}
exports.default = new MapRoutes();
