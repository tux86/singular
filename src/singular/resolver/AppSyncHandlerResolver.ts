import {AppSyncHandlerPayload} from "@/singular/handler/AppSyncHandler";
import {HandlerInterface, HandlerType} from "@/singular/handler";
import {HandlerResolver} from "@/singular/resolver/index";

export interface AppSyncHandlerResolverOptions {
    parentTypeName: string
    fieldName: string
}

export class AppSyncHandlerResolver implements  HandlerResolver {
    protected event: any
    protected context: any
    protected handler: HandlerInterface

    constructor (event: any, context: any) {
        this.event = event
        this.context = context
    }

    public resolve (handler: HandlerInterface): boolean {

        if (handler.handlerType !== HandlerType.appSync) {
            return false
        }

        const parentTypeName  = this.event.info?.parentTypeName|| null
        const fieldName  = this.event.info?.fieldName|| null

        if (!parentTypeName || !fieldName) {
            return false
        }

        if (parentTypeName !== handler.options.resolverOptions.parentTypeName) {
            return false
        }

        if (fieldName !== handler.options.resolverOptions.fieldName) {
            return false
        }

        this.handler = handler
        return true
    }


    public getHandler () : HandlerInterface {
        return  this.handler
    }


    public getHandlerRequest () : AppSyncHandlerPayload {
        return {
            body: {
                arguments: this.event.arguments,
                selectionSetList: this.event.info.selectionSetList || null,
                headers: this.event.request.headers
            },
            context: {}
        }
    }
}