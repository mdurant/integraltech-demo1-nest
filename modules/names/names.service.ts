import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    private _names: string[];

    constructor() {
        this._names = [];
    }
    createName(name: string): string {

        const nameFound = this._names.find((n) => n.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());

        if (nameFound) {
            return "El nombre ya existe, pruebe con otro.";
        }

        this._names.push(name);
        console.log("Nombre :" , this._names);
        return name;
    }
}
