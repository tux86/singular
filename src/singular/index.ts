import {Resolver} from "@/singular/resolver";

export class Singular {
    protected resolver : Resolver
    constructor (handlers:  any[]) {
        this.resolver = new Resolver(handlers)
    }

    public async handler (event, context) : Promise<any>{
        const {handler, request} = this.resolver.resolve(event,context)

        return await handler.handler(request);
    }
}