const route = require ('express').Router()
const conn = require(`../config/db`)
const bcrypt = require ('bcrypt')
const multer = require ('multer')
const path = require('path')
const sharp = require('sharp')

// EDIT STOCK
route.patch('/uiRoute/:store_id',(req,res)=>{
    const sql = `select * from inventory i
    join products p on i.product_id = p.product_id
    join stores S on i.store_id = s.store_id`
    const data =[req.body, req.params.store_id]

    conn.query(sql,data,(err,result)=>{
        if(err)return res.send(err)

        res.send({
            message : "stock berhasil di update"
        })
    })
})

// Delete Stock
route.delete('/uiRoute/:store_id',(req,res)=>{
    const sql=`select name, branch_name, inventory from products join inventory using (product_id) join stores using (store_id)`
    const data = [req.params.store_id]

    conn.query(sql,data,(err,result)=>{
        if(err) return res.send(err)

        res.send({
            message :"Stock berhasil dihapus"
        })
    })
})

// Add
route.post('/uiRoute/add', (req,res)=>{
    // const{name, attribute, special_skill}=req.body
    const sql= `INSERT INTO inventory set ?`
    const data = req.body

    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})



module.exports = route
