const express = require('express')
const Tasks = require('../models/shop')
// const auth = require('../middleware/auth')
const router = new express.Router() 



router.get('/shop', async (req, res, next)=>{
    
    try{
        const shop = await Shop.find()
        return res.status(200).json({
            success: true,
            count: shop.length,
            data: shop

        })
    } catch (err) {
        console.log(error)
        res.status(500).json({
            error: 'server error'
        })
    }
})

router.post('/shop', async (req, res) => {

    try {
        const shop = await shop.create(req.body)
        // await shop.save()
        res.status(201).json({
            success: true,
            data: shop
        })
    } catch (e) {
        if(e.code === 11000) {
            return res.status(400).json({
                error: 'this shop already exist'
            })
        }
        res.status(500).send(e)
    }

})

module.exports = router