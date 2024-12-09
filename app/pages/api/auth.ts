import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';
export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).send("Method Not Allowed")
    }
    const password = req.body.password;
    if(process.env.PASSWORD_PROTECT === password){
        const cookie = serialize('login', 'true', {
            path: '/',
            httpOnly: true
        })
        res.setHeader('Set-Cookie', cookie)
        return res.redirect(302, '/add-result')
    } else {
        const url = new URL("/login", req.headers["host"])
        url.searchParams.append("error", "Incorrect Password")
        return res.redirect(url.toString())
    }
}
