import 'module-alias/register'

import {Singular} from "@/singular";
import {GetUserHttpHandler} from "@/handlers/GetUserHttpHandler";
import {GetUserGraphqlHandler} from "@/handlers/GetUserGraphqlHandler";

const singular = new Singular([
    GetUserHttpHandler,
    GetUserGraphqlHandler
])
export const handler = async (event,context) => {
    return await singular.handler(event,context)
};