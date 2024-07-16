export interface IDatosCandidato{
    fuente: string,
    reclutador: string,
    nombre: string,
    Rfc: string,
    edad: number,
    genero: string,
    escolaridad: string,
    telefono: number,
    puestoSolicitado: string
}
export interface IPrimerContacto{
    fechaPrimerContactoRedesSociales : any,
    fechaPrimerContactoReclutador : any,
    estatusPrimerContacto: string,
}
export interface IEntrevista{
    idCandidato: number,
    citaEntrevista : boolean,
    fechaPrimerEntrevista : any,
    tipoCandidato: string,
    tipoEntrevista: string,
    estatusPrimerEntrevista: string,
    nombreSupervisor: string,
    estatusSegundaEntrevista: string,
    validacionSindicato: string,
}
export interface IPsicometriasEvaluacion{
    IdCandidato: number,
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
    fechCierreFolio: any,
    fechaIngreso: any,
    promDiasCobertura: number,
}
export interface User {
    email: string;
    token: string;
}
export interface IRH{
    idUsuarioRH: number;
    regionId: number;
    nombre: string;
    puesto: string;
    rol: string;
    permisos: number;
    contrasena: string;
    correo: string;
}
export interface ICandidato{
    idCandidato: number;
    nombre: string;
    edad: number;
    genero: string;
    escolaridad: string;
    telefono: string;
    puestoSolicitado: string;
    fuenteCaptacion: string;
    reclutadorId: number;
    primerContactoRedesSociales: string;
    primerContactoReclutador: string;
    estatusPrimerContacto: string;
    estatusGeneral: string;
    fechaCierreFolio: Date;
    fechaIngreso: Date;
    promDiasCobertura: number;
    region: number;
    Rfc: string;
}
export interface IRegion{
    idRegion: number;
    region: string;
    sistema: string;
}

export interface ICandidatoTabla{
    Id: number;
    Nombre: string;
    Region: string;
    Sistema: string;
    Reclutador: string;
    Progreso: number;
    Estatus: string;
}