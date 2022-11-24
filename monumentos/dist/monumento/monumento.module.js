"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonumentoModule = void 0;
const common_1 = require("@nestjs/common");
const monumento_service_1 = require("./monumento.service");
const monumento_controller_1 = require("./monumento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const monumento_entity_1 = require("./entities/monumento.entity");
let MonumentoModule = class MonumentoModule {
};
MonumentoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([monumento_entity_1.Monumento])],
        controllers: [monumento_controller_1.MonumentoController],
        providers: [monumento_service_1.MonumentoService]
    })
], MonumentoModule);
exports.MonumentoModule = MonumentoModule;
//# sourceMappingURL=monumento.module.js.map