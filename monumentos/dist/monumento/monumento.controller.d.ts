import { MonumentoService } from './monumento.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
export declare class MonumentoController {
    private readonly monumentoService;
    constructor(monumentoService: MonumentoService);
    create(createMonumentoDto: CreateMonumentoDto): Promise<import("./entities/monumento.entity").Monumento>;
    findAll(): Promise<import("./entities/monumento.entity").Monumento[]>;
    findOne(id: string): Promise<import("./entities/monumento.entity").Monumento>;
    update(id: string, updateMonumentoDto: CreateMonumentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
