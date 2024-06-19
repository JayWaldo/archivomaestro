export interface IRegion{
    region : string,
    sistema : string
}
export interface IDatosCandidato{
    fuente: string,
    reclutador: string,
    nombre: string,
    edad: number,
    genero: string,
    escolaridad: string,
    telefono: number,
    puestoSolicitado: string
}
export interface IPrimerContacto{
    fechaPrimerContactoRedesSociales : Date,
    fechaPrimerContactoReclutador : Date,
    estatusPrimerContacto: string,
}
export interface IEntrevista{
    citaEntrevista : boolean,
    fechaPrimerEntrevista : Date,
    tipoCandidato: string,
    tipoEntrevista: string,
    estatusPrimerEntrevista: string,
    nombreSupervisor: string,
    estatusSegundaEntrevista: string,
    validacionSindicato: string,
}
export interface IPsicometriasEvaluacion{
    estatusGeneral : string,
    integritest: string,
    avatar: string,
    potencialIntelectual: string,
    terman: string,
    reddin: string,
    circuloLaboral: string,
    referenciasLaborales: string,
    estudioSocioEconomico: string,
    examenManejo: string
}
export interface IEstatus{
    estatusGeneral : string
}
export interface IAlta{
    fechCierreFolio: Date,
    fechaINgreso: Date,
    promDiasCobertura: number,
}