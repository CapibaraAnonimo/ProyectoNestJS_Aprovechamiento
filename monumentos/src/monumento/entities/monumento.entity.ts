import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Monumento {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'monument_id'
    })
    id: number;

    @Column({
        name: 'codigo_pais',
        nullable: false,
        default: '',
    })
    code: string;

    @Column({
        name: 'nombre_pais',
        nullable: false,
        default: '',
    })
    nombrePais: string;

    @Column({
        name: 'codigo_ciudad',
        nullable: false,
        default: '',
    })
    nombreCiudad: string;

    @Column({
        name: 'longitud',
        nullable: false,
        default: '',
    })
    lon: string;

    @Column({
        name: 'latitud',
        nullable: false,
        default: '',
    })
    lat: string;

    @Column({
        name: 'nombre_monumento',
        nullable: false,
        default: '',
    })
    nombre: string;

    @Column({
        name: 'descripcion',
        nullable: false,
        default: '',
    })
    descripcion: string;

    @Column({
        name: 'url_foto',
        nullable: false,
        default: '',
    })
    fotoURL: string;
}
