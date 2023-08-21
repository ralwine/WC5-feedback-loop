const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST route should be the only thing needed
router.post(`/`, (req, res) => {
    const emotionsList = req.body;
    const sqlText = `INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, 
        [
            emotionsList.feeling, 
            emotionsList.understanding, 
            emotionsList.support,
            emotionsList.comments
        ]).then((result)=>{
            res.sendStatus(201);
        }).catch((error) =>{
            console.log("Error in POST request server side", error)
            res.sendStatus(500);
        })
});
// This works in POSTMAN so let it be!!!!

module.exports = router;
