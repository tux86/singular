export * from "./HttpApiHandler"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HandlerRequest {}

export enum HandlerType {
    httpApi= 'httpApi',
    appSync= 'appSync'
}

export interface HandlerInterface {
    _event : any
    _context : any
    handlerType: HandlerType
    options : any  // | AppsyncHandlerOptions

    handler(request: HandlerRequest) : any
}








