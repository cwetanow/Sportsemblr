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
var index_1 = require("./../core/services/index");
var core_1 = require("@angular/core");
var CreateEventComponent = (function () {
    function CreateEventComponent(eventService) {
        this.eventService = eventService;
    }
    CreateEventComponent.prototype.create = function () {
        this.eventService.createEvent(this.description, this.sport, this.date, this.peopleNeeded, this.price, this.contactPhone, this.place)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return CreateEventComponent;
}());
CreateEventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './create-event.component.html'
    }),
    __metadata("design:paramtypes", [index_1.EventService])
], CreateEventComponent);
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map