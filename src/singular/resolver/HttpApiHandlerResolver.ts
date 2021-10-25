import {match} from "node-match-path";
import {HandlerInterface, HandlerType, HttpApiHandlerPayload} from "@/singular/handler";
import {HandlerResolver} from "@/singular/resolver/index";

export interface HttpApiHandlerResolverOptions {
    method: string
    path: string
}

export class HttpApiHandlerResolver implements  HandlerResolver {
    protected event: any
    protected context: any
    protected handler: HandlerInterface

    constructor (event: any, context: any) {
        this.event = event
        this.context = context
    }

    public resolve (handler: HandlerInterface): boolean {

        if (handler.handlerType !== HandlerType.httpApi) {
            return false
        }

        if (!this.event?.routeKey || !this.event?.requestContext) {
            return false
        }

        if (this.event.routeKey !== 'ANY /{proxy+}') {
            return false
        }
        if (this.event.requestContext.http.method.toLowerCase() !== handler.options.resolverOptions.method.toLowerCase()) {
            return false
        }
        const {matches} = match(handler.options.resolverOptions.path, this.event.rawPath);

        if (!matches) {
            return false
        }

        this.handler = handler

        return true
    }

    public getHandler () : HandlerInterface {
        return  this.handler
    }

    public getHandlerRequest () : HttpApiHandlerPayload {
        const res = match(this.handler.options.resolverOptions.path,this.event.rawPath)
        return {
            body: {
                pathParameters: res.params,
                queryParameters: this.event.queryStringParameters,
                headers: this.event.headers
            },
            context: {}
        }
    }
}