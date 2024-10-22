import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configuración de Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.dondominio.com', // Cambia por tu servicio SMTP
            port: 465, 
            secure: true,
            auth: {
                user: process.env.NODemailer_USER,
                pass: process.env.NODemailer_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'contacto@midominio.com',
            subject: `Nuevo mensaje de ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Mensaje enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ error: 'Error al enviar el mensaje' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
