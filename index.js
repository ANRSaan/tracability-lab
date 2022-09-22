const clickButton = document.getElementById("buttor")


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

const clicky = () => {
    axios.get("api/clicky")
        .then(res => {
            alert("You have successfully clicked a button.  Congrats.")
        })
        .catch((err) =>{
            console.log(err)
        })
}