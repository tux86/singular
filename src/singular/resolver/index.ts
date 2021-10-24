import {HandlerInterface, HandlerRequest, HandlerType} from "@/singular/handler";
import {HttpApiEventResolver} from "@/singular/resolver/HttpApiResolver";

export * from "./HttpApiResolver"

export class HandlerResolver {

    protected handlerClasses : any[] = []
    constructor (handlers: any[]) {
        this.handlerClasses = handlers
    }

    public resolve (event,context) : { handler: HandlerInterface, request: HandlerRequest } {


        console.log(`Resolving handler : total handlers: `, this.handlerClasses.length)
        const httpApiEventResolver: HttpApiEventResolver = new HttpApiEventResolver(event,context)


        for (const handlerClass of this.handlerClasses) {
            const handler = new handlerClass(event, context)
            const resolverOptions = handler.options.resolver

            console.log('handler.options',resolverOptions)
            console.log('handler', handler.constructor.name)
            console.log('handlerType', handler.handlerType)


            if (handler.handlerType === HandlerType.httpApi && httpApiEventResolver.resolve(resolverOptions)) {
                return {
                    handler,
                    request: httpApiEventResolver.getHandlerRequest(resolverOptions)
                }
            }

        }

        throw new Error('could not resolve a handler for this request')
    }

}