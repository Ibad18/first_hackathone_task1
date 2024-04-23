function storeUserData() {
    var roll = document.getElementById("roll").value;
    var name = document.getElementById("name").value;
    var batch = document.getElementById("batch").value;
    var section = document.getElementById("section").value;
        var userData = {
            roll: roll,
            name: name,
            batch: batch,
            section: section
        };

        var userDataJSON = JSON.stringify(userData);

        sessionStorage.setItem("userData", userDataJSON);

}

function calculateResult(){
 
   
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

}
