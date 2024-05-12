import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    private _names: string[]= [];

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

    getNames(): string[] {
        return this._names;
    }
    updateName(name: string, newName: string){

        // Busco el indice del nombre original
        const indexNameFound = this._names.findIndex(n => n.toLowerCase().trim() == name.toLowerCase().trim());

        // Busco el indice del nombre nuevo
        const indexNewNameFound = this._names.findIndex(n => n.toLowerCase().trim() == newName.toLowerCase().trim());

        // Si el indice del nombre original es diferente a -1 (existe) y el indice del nombre nuevo es -1 (no existe)
        if(indexNameFound != -1 && indexNewNameFound == -1){
            // Actualizamos el nombre
            this._names[indexNameFound] = newName;
            return true;
        }else{
            return false;
        }

    }

    /**
     * Borramos el nombre
     * @param name
     * @returns
     */
    deleteName(name: string){
        // Guardo cuantos elementos tengo antes de eliminar
        const deletedBefore = this._names.length;
        // Filtro los nombres
        this._names = this._names.filter(n => n.toLowerCase().trim() != name.toLowerCase().trim());
        // Guardo cuantos elementos tengo despues de filtrar
        const deletedAfter = this._names.length;
        // Si el numero es diferente, devolvemos true
        return deletedBefore != deletedAfter;
    }

    clearNames(){
        this._names = [];
        return true;
    }
}
