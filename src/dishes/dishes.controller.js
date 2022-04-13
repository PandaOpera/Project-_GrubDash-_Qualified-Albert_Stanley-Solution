const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass
function read(req, res) {
    const { dishId } = req.params;
    const foundDish = dishes.find((dish) => dish.id === Number(dishId));
    res.json({ data: foundDish });
}
function list(req, res) {
    res.json({ data: dishes})
}

function create(req, res) {
    const reqBody = res.locals.reqBody;
    const newDish = {
        ...redBody,
        id: nextId(),
    };
    dishes.push(newDish);
    res.json({ data: newDish})
}

module.exports = {
    read,
    list,
    create
}