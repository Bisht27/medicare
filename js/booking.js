// ===============================
// Load Selected Doctor
// ===============================

const doctor = JSON.parse(localStorage.getItem("selectedDoctor"));

console.log("Doctor:", doctor);

if (!doctor) {
    alert("No doctor selected!");
    window.location.href = "index.html";
}

// Fill Doctor Details
document.getElementById("doctorName").textContent = doctor.name;
document.getElementById("doctorSpeciality").textContent = doctor.spec;
document.getElementById("doctorHospital").textContent = doctor.hospital;
document.getElementById("doctorExperience").textContent = doctor.exp + " Years";
document.getElementById("doctorRating").textContent = "⭐ " + doctor.rating;
document.getElementById("doctorFee").textContent = "₹" + doctor.fee;

// If summary section exists
const summaryDoctor = document.getElementById("summaryDoctor");
const summaryFee = document.getElementById("summaryFee");

if(summaryDoctor){
    summaryDoctor.textContent = doctor.name;
}

if(summaryFee){
    summaryFee.textContent = "₹" + doctor.fee;
}
document.getElementById("bookingForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const appointment = {

        patientName: document.getElementById("patientName").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        age: document.getElementById("age").value,

        gender: document.getElementById("gender").value,

        doctorId: doctor.id,

        doctorName: doctor.name,

        doctorEmail: doctor.contact.email,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        reason: document.getElementById("reason").value

    };

    try{

        const response = await fetch(
            "http://localhost:5000/api/appointments",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(appointment)
            }
        );

        const result = await response.json();

        if(result.success){

            alert("✅ Appointment Booked Successfully!");

            window.location.href = "success.html";

        }else{

            alert(result.message);

        }

    }catch(error){

        console.error(error);

        alert("Server Error");

    }

});