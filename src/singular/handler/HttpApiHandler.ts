import { HandlerInterface, HandlerRequest, HandlerType } from '@/singular/handler/index'
import { HttpApiHandlerResolverOptions } from '@/singular/resolver'

export interface HttpApiHandlerOptions {
    resolver: HttpApiHandlerResolverOptions
    middlewares?: any[]
}

export interface HttpApiHandlerRequest extends HandlerRequest {
    pathParameters: any
    queryParameters: any
    headers: any
}

export abstract class AbstractHttpApiHandler implements HandlerInterface {
    public handlerType = HandlerType.httpApi
    options: HttpApiHandlerOptions
    _event: any
    _context: any

    constructor (event: any, context: any) {
        this._event = event
        this._context = context
    }

    abstract handler(options: HttpApiHandlerRequest): any
}

export function HttpApiHandler (options: HttpApiHandlerOptions) {
    return function _Handler<T extends { new (...args: any[]): any }>(constr: T) {
        return class extends constr {
            constructor (...args: any[]) {
                super(...args)
                constr.prototype.options = options
            }
        }
    }
}
