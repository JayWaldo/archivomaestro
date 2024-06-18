export interface IServicio{
    servicio: string;
    inversion: number;
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
export interface IRegion{
    region : string,
    sistema : string
}
export interface IColaboracion{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    PBXpremisas: number,
    PBXaasNube: number,
    UCaas: number
}
export interface IDataCenter{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    Colocacion: number,
    InfraPremisas: number,
    Nube: number
}
export interface ICiberseguridad{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    SOCass: number,
    SASE: number,
    ISA: number,
    XDR: number,
    Consultoria: number
}
export interface ISeguridadFisica{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    c2c3c4c5: number,
    Videdovigilancia: number,
    ControlAccesos: number
}
export interface IPrimerContacto{
    fechaPrimerContactoRedesSociales : Date,
    fechaPrimerContactoReclutador : Date,
    estatusPrimerContacto: string,
}
export interface IFacturacionTotal{
    TAM : number,
    InfraRed: number,
    Colaboracion: number,
    DataCenter: number,
    Ciberseguridad: number,
    SeguridadFisica: number,
    IA: number,
    SolucionesPortafolio: boolean,
    Servicio: IServicio[]
}