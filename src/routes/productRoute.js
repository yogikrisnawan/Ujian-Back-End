const route = require ('express').Router()
const conn = require(`../config/db`)
const bcrypt = require ('bcrypt')
const multer = require ('multer')
const path = require('path')
const sharp = require('sharp')

// Create
route.post('/productscreate', (req,res)=>{
    // const{name, attribute, special_skill}=req.body
    const sql= `INSERT INTO products set ?`
    const data = req.body

    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

// READ
route.get('/productread/:product_id', (req,res)=>{
   
    const sql= `SELECT * from products where product_id = ?`
    const data = req.params.product_id;
   

    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

// UPDATE
route.patch('/productupdate/:product_id',(req,res)=>{
    const sql = `update products set ? where product_id=?`
    const data =[req.body, req.params.product_id]

    conn.query(sql,data,(err,result)=>{
        if(err)return res.send(err)

        res.send({
            message : "Product berhasil di update"
        })
    })
})


// DELETE
route.delete('/productdelete/:product_id',(req,res)=>{
    const sql=`delete from products where product_id = ?`
    const data = req.params.product_id

    conn.query(sql,data,(err,result)=>{
        if(err) return res.send(err)

        res.send({
            message :"Product berhasil dihapus"
        })
    })
})



module.exports = route
