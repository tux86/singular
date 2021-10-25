import {HttpApiHandlerOptions} from "@/singular/handler/HttpApiHandler";
import {AppSyncHandlerOptions} from "@/singular/handler/AppSyncHandler";

export * from "./HttpApiHandler"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HandlerPayload {
    body: any
    context: any
}

export enum HandlerType {
    httpApi= 'httpApi',
    appSync= 'appSync'
}

export interface HandlerInterface {
    _event : any
    _context : any
    handlerType: HandlerType
    options : any

    handler(payload: HandlerPayload) : any
}








