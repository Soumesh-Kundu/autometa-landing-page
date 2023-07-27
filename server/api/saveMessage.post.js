import { getServerUser, useRealm } from "../realm"

export default  defineEventHandler(async (event)=>{
    const {app}=useRealm()
    let user=app?.currentUser
    if(!user){
        user=await getServerUser()
    }
    const mongo=user?.mongoClient('mongodb-atlas')
    const database=useRuntimeConfig().db
    const col=useRuntimeConfig().collection ?? "users"
    const userCollection=mongo?.db(database)?.collection(col)
    try {
        const {name,email,message}=await readBody(event)
        await userCollection.insertOne({name,email,message})
        return {
            message:"Message has been sent"
        }
    } catch (error) {
        console.log(error)
        setResponseStatus(event,500)
        return {
            error:"Server Error"
        }
    }
})