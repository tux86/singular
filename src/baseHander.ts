import 'module-alias/register'
import {GetUserHandler} from "@/handlers/GetUserHandler";
import {Singular} from "@/singular";

const singular = new Singular([
    GetUserHandler
])
export const handler = async (event,context) => {
    return await singular.handler(event,context)
};