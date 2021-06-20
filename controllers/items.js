const mongoose = require('mongoose');
const Items = require("../models/items");
const BuyNow = require("../models/buyNow");
const Sales = require("../models/sales")

const homeSupplies = async (req, res) => {
    try {
        if(!req.userId) return res.status(401).send("unauthorized user");
        const {val } = req.params;
        console.log('vallllll', val)
        const fetchRecords = await Sales.find(val && { "storeLocation": `${val}` });
        // console.log("PostRecords=----", fetchRecords);
        // setTimeout(() => {
            res.status(200).json({items: fetchRecords.slice(0, 10), itemsLength: fetchRecords.slice(0, 10).length});
        // }, 500)
        
    } catch(error) {
        res.status(404);
        res.json({ message: error.message});
    }
}
const AddToCart = async (req, res) => {
    const item = req.body;
    console.log("req.body.item=----", req.body);
    // if(!req.userId) return res.status(401).send({message: 'unauthenticated user'});
    
    
    try {
        const newRecord = new BuyNow(item);
        await newRecord.save();
        res.status(200).json({message: "succesfully submitted the order",newRecord});
    } catch(error) {
        console.log('error----', error)
        res.status(409);
        res.status(409).json({error: error});
    }
}
const getItems = async (req, res) => {
    try {
        const fetchRecords = await Items.find();
        // console.log("PostRecords=----", fetchRecords);
        setTimeout(() => {
            res.status(200).json(fetchRecords);
        }, 500)
        
    } catch(error) {
        res.status(404);
        res.json({ message: error.message});
    }
}

const createItems = async (req, res) => {
    const {title, desc, price } = req.body;
    // console.log("req.body=----", req.body);
    // if(!req.userId) return res.status(401).send({message: 'unauthenticated user'});
    const newRecord = new Items({title, desc, price });
    
    try {
        await newRecord.save();
        res.status(200).json(newRecord);
    } catch(error) {
        res.status(409);
        res.status(409).json({error: error});
    }
}


module.exports = {getItems, createItems, homeSupplies, AddToCart};