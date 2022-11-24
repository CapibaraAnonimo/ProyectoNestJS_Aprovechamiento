import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { Monumento } from "./entities/monumento.entity";
import { Repository } from "typeorm";
export declare class MonumentoService {
    private readonly monumentoRepository;
    constructor(monumentoRepository: Repository<Monumento>);
    create(createMonumentoDto: CreateMonumentoDto): Promise<Monumento>;
    findAll(): Promise<Monumento[]>;
    findOne(id: number): Promise<Monumento>;
    update(id: number, createMonumentoDto: CreateMonumentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
