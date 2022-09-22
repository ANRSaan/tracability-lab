const clickButton = document.getElementById("buttor")



const clicky = () => {
    axios.get("http://127.0.0.1:5500/api/clicky")
        .then(res => {
            alert("You have successfully clicked a button.  Congrats.")
        })
        .catch((err) =>{
            console.log(err)
        })
}