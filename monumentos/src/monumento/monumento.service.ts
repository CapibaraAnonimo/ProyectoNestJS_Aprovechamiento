import { Injectable } from '@nestjs/common';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import {Monumento} from "./entities/monumento.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { UpdateMonumentoDto } from "./dto/update-monumento.dto";

@Injectable()
export class MonumentoService {
  constructor(
      @InjectRepository(Monumento) private readonly monumentoRepository: Repository<Monumento>,
  ) {}

  create(createMonumentoDto: CreateMonumentoDto) {
    let nuevo = new Monumento();
    nuevo.id= createMonumentoDto.id;
    nuevo.code= createMonumentoDto.code;
    nuevo.nombrePais= createMonumentoDto.nombrePais;
    nuevo.nombreCiudad= createMonumentoDto.nombreCiudad;
    nuevo.lon= createMonumentoDto.lon;
    nuevo.lat= createMonumentoDto.lat;
    nuevo.nombre= createMonumentoDto.nombre;
    nuevo.descripcion= createMonumentoDto.descripcion;
    nuevo.fotoURL= createMonumentoDto.fotoURL;
    return this.monumentoRepository.save(nuevo);
  }

  findAll() {
    return this.monumentoRepository.find();
  }

  findOne(id: number) {
    return this.monumentoRepository.findOneBy({id: id});
  }

  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    return this.monumentoRepository.update(id, updateMonumentoDto);
  }

  remove(id: number) {
    return this.monumentoRepository.delete({id: id});
  }
}
