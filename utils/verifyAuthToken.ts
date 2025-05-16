import { jwtVerify} from "jose";

const JWT_SECRET_STRING = process.env.JWT_SECRET
const JWT_SECRET_KEY = new TextEncoder().encode(JWT_SECRET_STRING)


export async function verifyAuthToken(token:string | undefined): Promise<{ success: boolean; payload?: any; message?: string }>{
    if(!token){
        return { success: false, message: "Authentication token missing"}
    }

    try{
        const payload = await jwtVerify(token, JWT_SECRET_KEY, {
            algorithms: ['HS256']
        })

        return {success: true, payload}
    }
    catch(error) {
        console.error("Toekn verification failed: ", error)
        let message = "Invalid token"
        if(error && typeof error === "object" && "code" in error){
            if(typeof error.code === "string"){
            if(error.code === "ERR_JWT_EXPIRED"){
                message = "Token expired"
            }

            if(error.code === "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"){
                message = "Invalid token signature"
            }
            }
        }

        return { success: false, message}
    }
}