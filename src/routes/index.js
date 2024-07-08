import { Router } from "express";
import ibm_db from "ibm_db";
import dotenv from "dotenv"

dotenv.config() 
let connStr = process.env.CONNECTION_STR

const indexRouter = new Router()

indexRouter.get('/',(req,res)=>{
    res.json({
        'message':'Hola'
    }) 
})
indexRouter.post('/',async(req,res)=>{
    const {sql} = req.body
    if(!sql)return res.status(400).json({message:'sql is required'})
    try {
        ibm_db.open(connStr).then(
            conn => {
                req.b
                conn.query(req.body.sql).then(data => {
                    res.json(data);
                    conn.closeSync();
                }, err => {
                    console.log(err);
                    res.status(500).json({message:'Error en la consulta'})
                });
                }, err => {
                res.status(500).json({message:'Error en la conexión'})
            }
        );   
    } catch (error) {
        console.log(err)
    }
})
export {indexRouter}