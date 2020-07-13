const express = require('express');
const router = express.Router();

// item model
const Item = require('../../models/Item');

// route: GET-request api/items
// description: Get all the items
router.get('/', (req, res) => {
    Item.find()
        .sort({audience: -1})
        .then(items => res.json(items))
});

// Pelo o que eu entendi, parte 5 e 6 do desafio (pesquisa das ações)


// route: POST-request api/items
// description: Create an item
router.post('/', (req, res) => {
    const newItem = new Item({ 
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        duration: req.body.duration,
        audience: req.body.audience
    });
    newItem.save().then(item => res.json(item));
});

// route: DELETE-request api/items/:id
// description: Delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
}); 


// If I don't do that, no other file will be able to read the line above
module.exports = router; 