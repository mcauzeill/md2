"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let HightlightPipe = class HightlightPipe {
    transform(value, query) {
        if (query.length < 1) {
            return value;
        }
        return query ? value.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<span class="highlight">$&</span>') : value;
    }
    /**
     * filter pipe
     * @param queryToEscape
     */
    escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
};
HightlightPipe = __decorate([
    core_1.Pipe({ name: 'hightlight' }), 
    __metadata('design:paramtypes', [])
], HightlightPipe);
exports.HightlightPipe = HightlightPipe;

//# sourceMappingURL=autocomplete.pipe.js.map
