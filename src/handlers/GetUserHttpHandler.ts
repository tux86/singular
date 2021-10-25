import {AbstractHttpApiHandler, HttpApiHandler, HttpApiHandlerPayload} from "@/singular/handler";

@HttpApiHandler({
    resolverOptions: {
        method: 'GET',
        path: '/user/:userId'
    }
})
export class GetUserHttpHandler extends AbstractHttpApiHandler {

    async handler (payload: HttpApiHandlerPayload): Promise<any> {

        return {
            statusCode: 200,
            body: JSON.stringify(payload,null,2 ),
        };
    }
}
