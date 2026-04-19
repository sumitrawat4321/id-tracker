export default async function handler(req, res) {
  const client = require('twilio')(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    await client.messages.create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+918902674629',
      body: '🚀 QR scanned (POC demo)'
    });

    res.status(200).send("ok");
  } catch (e) {
    res.status(500).send(e.message);
  }
}


