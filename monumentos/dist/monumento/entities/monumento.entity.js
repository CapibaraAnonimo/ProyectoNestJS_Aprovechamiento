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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monumento = void 0;
const typeorm_1 = require("typeorm");
let Monumento = class Monumento {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'monument_id'
    }),
    __metadata("design:type", Number)
], Monumento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_pais',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_pais',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "nombrePais", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_ciudad',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "nombreCiudad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'longitud',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "lon", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'latitud',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_monumento',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'descripcion',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'url_foto',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Monumento.prototype, "fotoURL", void 0);
Monumento = __decorate([
    (0, typeorm_1.Entity)()
], Monumento);
exports.Monumento = Monumento;
//# sourceMappingURL=monumento.entity.js.map