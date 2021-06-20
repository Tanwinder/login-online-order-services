const {getItems, createItems, homeSupplies, AddToCart} = require('../controllers/items');
const authMiddleware = require("../middleware/auth");
const express = require('express');

const router = express.Router();

    router.get('/', getItems);
    router.post('/', createItems);
    router.get('/homesupplies/:val',authMiddleware, homeSupplies);
    router.get('/homesupplies', authMiddleware, homeSupplies);
    router.post('/homesupplies/addtocart', authMiddleware, AddToCart);
    // app.delete('/api/events/:id', authMiddleware, deleteRecord);
    // app.patch('/api/events/:id', authMiddleware, updateEvent);
    // app.patch('/api/events/likeevent/:id', authMiddleware, likeEvent);

module.exports = router;