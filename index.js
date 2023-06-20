import express from "express";

const app = express();
app.use(express.json());

// list of allowed requests: (API point or rout. always start with a /) 
app.get("/test", (request, response) => {
    response.send("😀 Hello there! 😀"); 
});

const fruits = ['apple', 'banana', 'charries', 'orange'];

app.get("/fruits", (req, res) => {
    res.send(fruits); // automatically adds status 200 
})

app.post("/fruits", (req, res) => {
    const newFruit = req.body.fruit;
    fruits.push(newFruit);
    res.status(201).send(fruits);
})

// what port to watch / listen to: 
app.listen(3000, () => {
    console.log("listening on http;//localhost3000/ ...");
});
