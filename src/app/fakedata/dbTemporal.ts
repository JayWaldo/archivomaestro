import { IAlta, IDatosCandidato, IEntrevista, IEstatus, IPrimerContacto, IPsicometriasEvaluacion, IRegion } from "../MultiFormulario/Modelos";

export class CandidatoData{
    
    id?: number;
    region?: IRegion;
    datosCandidato?: IDatosCandidato;
    primerContacto?: IPrimerContacto;
    entrevista?: IEntrevista;
    psicometricas?: IPsicometriasEvaluacion;
    estatus?: IEstatus;
    alta?: IAlta;

    constructor() {
        this.id = this.generarIdTemp();
    }

    generarIdTemp(){
        const random = Math.random();
        return random;
    }
}