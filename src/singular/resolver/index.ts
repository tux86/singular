import {HandlerInterface, HandlerRequest, HandlerType} from "@/singular/handler";
import {HttpApiHandlerResolver, AppSyncHandlerResolver} from "@/singular/resolver";

export * from "./HttpApiHandlerResolver"
export * from "./AppSyncHandlerResolver"

export interface HandlerResolver {
     resolve (handler: HandlerInterface): boolean
     getHandler(): HandlerInterface
     getHandlerRequest(): HandlerRequest
}


export class Resolver {

    protected handlerClasses : any[] = []

    constructor (handlers: any[]) {
        this.handlerClasses = handlers
    }

    protected initializeResolvers (event,context) : HandlerResolver[] {
        return [
            new HttpApiHandlerResolver(event,context) ,
            new AppSyncHandlerResolver(event,context)
        ]
    }


    public resolve (event,context) : { handler: HandlerInterface, request: HandlerRequest } {

        console.time('Resolve Duration')
        console.log(`Resolving handler: Started`)

        const resolvers = this.initializeResolvers(event,context)

        for (const HandlerClass of this.handlerClasses) {
            const currentHandler = new HandlerClass(event, context)
            for (const resolver of resolvers) {
                if (resolver.resolve(currentHandler)) {
                    console.log(`Resolving handler: Finished`)
                    console.timeEnd('Resolve Duration')
                    return {
                        handler: resolver.getHandler(),
                        request: resolver.getHandlerRequest()
                    }
                }
            }
        }
        throw new Error(`could not resolve a handler for this request`)
    }

}