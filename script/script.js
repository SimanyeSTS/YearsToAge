document.querySelector('#convert').addEventListener('click', () => {
    const ageInput = document.querySelector('#ageInput').value
    const age = parseFloat(ageInput)
    if(isNaN(age)){
      document.querySelector('#result').textContent = "Please Insert Correct Number"  
    }else{
        const days = age * 365
        document.querySelector('#result').textContent = days + "days"
    }
})