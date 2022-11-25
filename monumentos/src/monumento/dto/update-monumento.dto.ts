import { PartialType } from '@nestjs/mapped-types';
import { CreateMonumentoDto } from './create-monumento.dto';

export class UpdateMonumentoDto extends PartialType(CreateMonumentoDto) {
    code: string;

    nombrePais: string;

    nombreCiudad: string;

    lon: string;

    lat: string;

    nombre: string;

    descripcion: string;

    fotoURL: string;
}
