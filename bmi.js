let form = document.querySelector("#main")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#Result")
    let res = document.querySelector("#res")

    if(height === "" || isNaN(height) || height <= 0){
        alert("Enter Valid Height")
    }

    else if(weight === "" || isNaN(weight) || weight <= 0){
        alert("Enter Valid Weight")
    }
    else{
        let bmi = Math.round(weight/((height*height)/10000))
        result.innerHTML = `${bmi}`;
        if(bmi <= 18.6){
            res.innerHTML= "You are underweight"
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            res.innerHTML= "You are normal"
        }
        else if(bmi >= 24.9){
            res.innerHTML= "You are overweight"
        }
    }






})

