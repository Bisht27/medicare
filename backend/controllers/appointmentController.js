const db = require("../config/db");

const {
    sendDoctorEmail,
    sendPatientEmail
} = require("../services/emailService");

const bookAppointment = (req, res) => {

    const {
        patientName,
        email,
        phone,
        doctorId,
        doctorName,
        doctorEmail,
        date,
        time
    } = req.body;

    const sql = `
        INSERT INTO appointments
        (
        patient_name,
        email,
        phone,
        age,
        gender,
        doctor_id,
        doctor_name,
        appointment_date,
        appointment_time,
        reason
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            patientName,
            email,
            phone,
            age,
            gender,
            doctorId,
            doctorName,
            date,
            time,
            reason
        ],
        async (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            try {

                await sendDoctorEmail({
                    patientName,
                    email,
                    phone,
                    doctorName,
                    doctorEmail,
                    date,
                    time
                });

                await sendPatientEmail({
                    patientName,
                    email,
                    doctorName,
                    date,
                    time
                });

            } catch (mailError) {

                console.log("Email Error:", mailError.message);

            }

            res.status(201).json({
                success: true,
                message: "Appointment Booked Successfully"
            });

        }
    );

};

module.exports = {
    bookAppointment
};