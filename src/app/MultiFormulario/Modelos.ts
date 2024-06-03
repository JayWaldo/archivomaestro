export interface IServicio{
    servicio: string;
    inversion: number;
}
export interface IResumen{
    resumen: string,
    website: string,
    sector: string,
    tamano: string,
    presupuestoActual: number,
    presupuestoAnterior: number,
    presupuestoIT: number,
    retos: string
}
export interface Iinfraestructura{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    redWanLan: number,
    redSDWan: number,
    redWifi: number,
    redGpon: number
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
export interface IinteligenciaArtificial{
    presentoCliente : boolean,
    facturaConNosotros: boolean,
    facturaOtro: string,
    IA: number
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