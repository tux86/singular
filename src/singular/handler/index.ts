export * from "./HttpApiHandler"

export interface HandlerRequest {}

export enum HandlerType {
    httpApi= 'httpApi'
}

export interface HandlerInterface {
    _event : any
    _context : any
    handlerType: HandlerType
    options : any  //| AppsyncHandlerOptions

    handler(request: HandlerRequest) : any
}








