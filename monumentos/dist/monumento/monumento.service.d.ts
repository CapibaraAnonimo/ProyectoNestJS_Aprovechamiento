import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { Monumento } from "./entities/monumento.entity";
import { Repository } from "typeorm";
import { UpdateMonumentoDto } from "./dto/update-monumento.dto";
export declare class MonumentoService {
    private readonly monumentoRepository;
    constructor(monumentoRepository: Repository<Monumento>);
    create(createMonumentoDto: CreateMonumentoDto): Promise<Monumento>;
    findAll(): Promise<Monumento[]>;
    findOne(id: number): Promise<Monumento>;
    update(id: number, updateMonumentoDto: UpdateMonumentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
