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
exports.MonumentoService = void 0;
const common_1 = require("@nestjs/common");
const monumento_entity_1 = require("./entities/monumento.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MonumentoService = class MonumentoService {
    constructor(monumentoRepository) {
        this.monumentoRepository = monumentoRepository;
    }
    create(createMonumentoDto) {
        let nuevo = new monumento_entity_1.Monumento();
        nuevo.id = createMonumentoDto.id;
        nuevo.code = createMonumentoDto.code;
        nuevo.nombrePais = createMonumentoDto.nombrePais;
        nuevo.nombreCiudad = createMonumentoDto.nombreCiudad;
        nuevo.lon = createMonumentoDto.lon;
        nuevo.lat = createMonumentoDto.lat;
        nuevo.nombre = createMonumentoDto.nombre;
        nuevo.descripcion = createMonumentoDto.descripcion;
        nuevo.fotoURL = createMonumentoDto.fotoURL;
        return this.monumentoRepository.save(nuevo);
    }
    findAll() {
        return this.monumentoRepository.find();
    }
    findOne(id) {
        return this.monumentoRepository.findOneBy({ id: id });
    }
    update(id, updateMonumentoDto) {
        return this.monumentoRepository.update(id, updateMonumentoDto);
    }
    remove(id) {
        return this.monumentoRepository.delete({ id: id });
    }
};
MonumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(monumento_entity_1.Monumento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MonumentoService);
exports.MonumentoService = MonumentoService;
//# sourceMappingURL=monumento.service.js.map