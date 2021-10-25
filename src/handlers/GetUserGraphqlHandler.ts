import {AbstractAppSyncHandler, AppSyncHandler, AppSyncHandlerRequest} from "@/singular/handler/AppSyncHandler";

@AppSyncHandler({
    resolver: {
        parentTypeName: 'Query',
        fieldName: 'userById'
    }
})
export class GetUserGraphqlHandler extends AbstractAppSyncHandler {

    async handler (request: AppSyncHandlerRequest): Promise<any> {

        console.log(request)
        return {
            userId: '123',
            email: 'user@example.com'
        }
    }
}
