const route = require ('express').Router()
const conn = require(`../config/db`)
const bcrypt = require ('bcrypt')
const multer = require ('multer')
const path = require('path')
const sharp = require('sharp')

// Create
route.post('/storecreate', (req,res)=>{
    // const{name, attribute, special_skill}=req.body
    const sql= `INSERT INTO stores set ?`
    const data = req.body

    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

// READ
route.get('/storeRead/:store_id', (req,res)=>{
   
    const sql= `SELECT * from stores where store_id = ?`
    const data = req.params.store_id;
   

    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

// UPDATE
route.patch('/storeUpdate/:store_id',(req,res)=>{
    const sql = `update stores set ? where store_id=?`
    const data =[req.body, req.params.store_id]

    conn.query(sql,data,(err,result)=>{
        if(err)return res.send(err)

        res.send({
            message : "Store berhasil di update"
        })
    })
})


// DELETE
route.delete('/storeDelete/:store_id',(req,res)=>{
    const sql=`delete from stores where store_id= ?`
    const data = req.params.store_id

    conn.query(sql,data,(err,result)=>{
        if(err) return res.send(err)

        res.send({
            message :"Store berhasil dihapus"
        })
    })
})

module.exports = route