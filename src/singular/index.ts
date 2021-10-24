import {HandlerResolver} from "@/singular/resolver";

export class Singular {
    protected resolver : HandlerResolver
    constructor (handlers:  any[]) {
        this.resolver = new HandlerResolver(handlers)
    }
    public async handler (event, context) : Promise<any>{
        const {handler, request} = this.resolver.resolve(event,context)

        return await handler.handler(request);
    }
}