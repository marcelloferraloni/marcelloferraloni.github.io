function sendMail(){
    let parms= {
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        subject : document.getElementById("subject").value,
    }

    emailjs.send("service_3s834wo","template_zrrohxb",parms).then(alert("Email Sent!!"))
}