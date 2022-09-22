const clickButton = document.getElementById("buttor")




const clicky = () => {
    axios.get("api/clicky")
        .then(res => {
            alert("You have successfully clicked a button.  Congrats.")
        })
        .catch((err) =>{
            console.log(err)
        })
}

clickButton.addEventListener('click', clicky)