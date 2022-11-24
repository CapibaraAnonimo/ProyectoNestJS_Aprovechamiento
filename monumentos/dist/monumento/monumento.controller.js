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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonumentoController = void 0;
const common_1 = require("@nestjs/common");
const monumento_service_1 = require("./monumento.service");
const create_monumento_dto_1 = require("./dto/create-monumento.dto");
let MonumentoController = class MonumentoController {
    constructor(monumentoService) {
        this.monumentoService = monumentoService;
    }
    create(createMonumentoDto) {
        return this.monumentoService.create(createMonumentoDto);
    }
    findAll() {
        return this.monumentoService.findAll();
    }
    findOne(id) {
        return this.monumentoService.findOne(+id);
    }
    update(id, updateMonumentoDto) {
        return this.monumentoService.update(+id, updateMonumentoDto);
    }
    remove(id) {
        return this.monumentoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_monumento_dto_1.CreateMonumentoDto]),
    __metadata("design:returntype", void 0)
], MonumentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonumentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonumentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_monumento_dto_1.CreateMonumentoDto]),
    __metadata("design:returntype", void 0)
], MonumentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonumentoController.prototype, "remove", null);
MonumentoController = __decorate([
    (0, common_1.Controller)('monumento'),
    __metadata("design:paramtypes", [monumento_service_1.MonumentoService])
], MonumentoController);
exports.MonumentoController = MonumentoController;
//# sourceMappingURL=monumento.controller.js.map