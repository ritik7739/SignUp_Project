import app from "./app.mjs";

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server listining on port at ${PORT}`);
})