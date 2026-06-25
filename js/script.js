// =======================================
// Close Doctor Modal
// =======================================

function closeModal(e) {

    if (!e || e.target.id === "doc-modal") {

        document.getElementById("doc-modal").classList.add("hidden");

    }

}


// =======================================
// Go To Booking Page
// =======================================

function goToAppointment(id) {

    console.log("Doctor ID:", id);

    const doctor = DOCTORS.find(d => d.id === id);

    if (!doctor) {

        alert("Doctor not found!");

        return;

    }

    localStorage.setItem(
        "selectedDoctor",
        JSON.stringify(doctor)
    );

    window.location.href = "booking.html";

}