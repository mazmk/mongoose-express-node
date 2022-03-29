const app = require("express").Router();
const friendsModel = require('./../models/friends.model');


app.get('/', async(request, response) => {
    const friends = await friendsModel.find({});
    try {
        response.status(200).send(friends);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/", async(request, response) => {
    const friend = new friendsModel(request.body);
    try {
        await friend.save();
        response.status(201).send(friend);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/:id", async(request, response) => {
    try {
        const friend = await friendsModel.findById(request.params.id);
        response.status(200).send(friend);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/:id", async(request, response) => {
    try {
        await friendsModel.findByIdAndUpdate(request.params.id, request.body);
        const friend = await friendsModel.findById(request.params.id);
        response.status(200).send(friend);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/:id", async(request, response) => {
    try {
        await friendsModel.findByIdAndDelete(request.params.id);
        response.status(200).json({info: "Deleted Successfully"});
    } catch (error) {
        response.status(500).send(error);
    }
});




module.exports = app;