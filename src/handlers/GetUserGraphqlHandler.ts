import {
    AbstractAppSyncHandler,
    AppSyncHandler,
    AppSyncHandlerPayload,
} from "@/singular/handler/AppSyncHandler";

@AppSyncHandler({
    resolverOptions: {
        parentTypeName: 'Query',
        fieldName: 'userById',
    }
})
export class GetUserGraphqlHandler extends AbstractAppSyncHandler {

    async handler (payload: AppSyncHandlerPayload): Promise<any> {

        console.log(payload)
        return {
            userId: '123',
            email: 'user@example.com'
        }
    }
}
