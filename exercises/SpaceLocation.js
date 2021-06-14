"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
//Paste in the provided code here:
var saturn = new SpaceLocation("Saturn", 12000000000);
var jupiter = new SpaceLocation('Jupiter', 688174472000);
console.log(saturn);
console.log(jupiter);
