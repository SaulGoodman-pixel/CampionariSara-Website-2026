import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Invio tramite la casella lf@campionarisara.com sul server SMTP di Sinte.
// Configurazione su Vercel: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.

const escapeHtml = (value: unknown) =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

export async function POST(request: Request) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
        console.error('Configurazione SMTP mancante');
        return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const data = await request.json();
    const { name, email, company, phone, type, message, privacy } = data;

    if (!privacy) {
        return NextResponse.json({ error: 'Privacy Policy must be accepted.' }, { status: 400 });
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(String(email))) {
        return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    const port = Number(SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const from = `"Campionari Sara Group" <${SMTP_USER}>`;
    const n = escapeHtml(name);
    const e = escapeHtml(email);

    try {
        // 1. Email di notifica a lf@campionarisara.com
        await transporter.sendMail({
            from,
            to: 'lf@campionarisara.com',
            replyTo: String(email),
            subject: `Nuovo messaggio dal sito — ${String(name).slice(0, 100)}`,
            html: `
                <h2>Nuovo contatto dal sito</h2>
                <table cellpadding="8" style="border-collapse:collapse; width:100%; font-family:sans-serif;">
                    <tr><td style="font-weight:bold; color:#555;">Nome</td><td>${n}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Email</td><td>${e}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Azienda</td><td>${escapeHtml(company) || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Telefono</td><td>${escapeHtml(phone) || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Settore</td><td>${escapeHtml(type) || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555; vertical-align:top;">Messaggio</td><td style="white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
                </table>
            `,
        });

        // 2. Email di conferma all'utente
        await transporter.sendMail({
            from,
            to: String(email),
            subject: 'Abbiamo ricevuto il tuo messaggio — Campionari Sara Group',
            html: `
                <div style="font-family:sans-serif; max-width:600px; margin:0 auto;">
                    <h2 style="color:#111;">Grazie per averci contattato, ${n}.</h2>
                    <p style="color:#555; line-height:1.6;">
                        Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto all'indirizzo <strong>${e}</strong>.
                    </p>
                    <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />
                    <p style="color:#999; font-size:13px;">
                        Campionari Sara Group S.r.l.<br />
                        Via Gioberti 22 — 20851 Lissone (MB)<br />
                        <a href="https://www.campionarisara.it" style="color:#111;">campionarisara.it</a>
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Errore invio email:', err);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}
