document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0 indexed
        const year = parseInt(document.getElementById('yaer').value); // Corrected id to 'year'
          
        if (name === '')  {
            alert("Please enter your name.");
            return; // Stop further execution
        }
        else if(adhar === ''){
            alert("Please enter your Aadhar number.");
        }
        else if( isNaN(day) || isNaN(month) || isNaN(year)){
          alert("Please enter your birthdate."); 
        }
        const birthDate = new Date(year, month, day);
        const currentDate = new Date();
        
        const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();
        const isOldEnough = ageDiff >= 18 || (ageDiff === 17 && (currentDate.getMonth() > birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())));
        
        if (isOldEnough) {
            alert("Congratulation "+ name + ", you are eligible to vote.");
        } else {
            alert("Sorry" + name + ", you are not eligible to vote.");
        }

         window.location.reload();
    });
});
