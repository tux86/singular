import {match} from "node-match-path";
import {HttpApiHandlerRequest} from "@/singular/handler";

export interface HttpApiHandlerResolverOptions {
    method: string
    path: string
}

export class HttpApiEventResolver {
    protected event: any
    protected context: any

    constructor (event: any, context: any) {
        this.event = event
        this.context = context
    }

    public resolve (handlerResolverOptions: HttpApiHandlerResolverOptions): boolean {

        if (this.event.routeKey != 'ANY /{proxy+}') {
            return false
        }
        if (this.event.requestContext.http.method.toLowerCase() !== handlerResolverOptions.method.toLowerCase()) {
            return false
        }

        const {matches} = match(handlerResolverOptions.path, this.event.rawPath);

        if (!matches) {
            return false
        }

        return true
    }

    public getHandlerRequest (handlerResolverOptions: HttpApiHandlerResolverOptions) : HttpApiHandlerRequest {
        const res = match(handlerResolverOptions.path,this.event.rawPath)
        return {
            pathParameters: res.params,
            queryParameters: this.event.queryStringParameters,
            headers: this.event.headers
        }
    }
}