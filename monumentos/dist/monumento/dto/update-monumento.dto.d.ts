import { CreateMonumentoDto } from './create-monumento.dto';
declare const UpdateMonumentoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMonumentoDto>>;
export declare class UpdateMonumentoDto extends UpdateMonumentoDto_base {
    code: string;
    nombrePais: string;
    nombreCiudad: string;
    lon: string;
    lat: string;
    nombre: string;
    descripcion: string;
    fotoURL: string;
}
export {};
