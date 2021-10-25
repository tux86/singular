import {HandlerInterface, HandlerType, HandlerPayload} from '@/singular/handler/index'
import { AppSyncHandlerResolverOptions } from '@/singular/resolver'

export interface AppSyncHandlerOptions {
    resolverOptions: AppSyncHandlerResolverOptions
    middlewares?: any[]
}

export interface AppSyncHandlerPayload extends HandlerPayload {
    body: {
        arguments: any
        selectionSetList: any
        headers: any
    }
    context: any
}

export abstract class AbstractAppSyncHandler implements HandlerInterface {
    public handlerType = HandlerType.appSync
    options: AppSyncHandlerOptions
    _event: any
    _context: any

    constructor (event: any, context: any) {
        this._event = event
        this._context = context
    }

    abstract handler(options: AppSyncHandlerPayload): any
}

export function AppSyncHandler (options: AppSyncHandlerOptions) {
    return function _Handler<T extends { new (...args: any[]): any }>(constr: T) {
        return class extends constr {
            constructor (...args: any[]) {
                super(...args)
                constr.prototype.options = options
            }
        }
    }
}
