const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Send email to doctor
const sendDoctorEmail = async (appointment) => {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: appointment.doctorEmail,
        subject: "New Appointment Booked",

        html: `
            <h2>New Appointment Booked</h2>

            <p><strong>Patient:</strong> ${appointment.patientName}</p>
            <p><strong>Email:</strong> ${appointment.email}</p>
            <p><strong>Phone:</strong> ${appointment.phone}</p>
            <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
        `
    };

    await transporter.sendMail(mailOptions);
};

// Send confirmation email to patient
const sendPatientEmail = async (appointment) => {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: appointment.email,
        subject: "Appointment Confirmed",

        html: `
            <h2>Appointment Confirmed</h2>

            <p>Hello ${appointment.patientName},</p>

            <p>Your appointment has been booked successfully.</p>

            <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>

            <br>

            <p>Thank you for choosing Medicare.</p>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendDoctorEmail,
    sendPatientEmail
};