import {AbstractHttpApiHandler, HttpApiHandler, HttpApiHandlerRequest} from "@/singular/handler";

@HttpApiHandler({
    resolver: {
        method: 'GET',
        path: '/user/:userId'
    }
})
export class GetUserHttpHandler extends AbstractHttpApiHandler {

    async handler (request: HttpApiHandlerRequest): Promise<any> {
        return {
            statusCode: 200,
            body: JSON.stringify(request,null,2 ),
        };
    }
}
