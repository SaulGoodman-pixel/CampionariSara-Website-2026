import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const data = await request.json();

    const { name, email, company, phone, type, message, privacy } = data;

    if (!privacy) {
        return NextResponse.json({ error: 'Privacy Policy must be accepted.' }, { status: 400 });
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    try {
        // 1. Email di notifica a lf@campionarisara.com
        await resend.emails.send({
            from: 'noreply@campionarisara.com',
            to: 'lf@campionarisara.com',
            subject: `Nuovo messaggio dal sito — ${name}`,
            html: `
                <h2>Nuovo contatto dal sito</h2>
                <table cellpadding="8" style="border-collapse:collapse; width:100%; font-family:sans-serif;">
                    <tr><td style="font-weight:bold; color:#555;">Nome</td><td>${name}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Email</td><td>${email}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Azienda</td><td>${company || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Telefono</td><td>${phone || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555;">Settore</td><td>${type || '—'}</td></tr>
                    <tr><td style="font-weight:bold; color:#555; vertical-align:top;">Messaggio</td><td style="white-space:pre-wrap;">${message}</td></tr>
                </table>
            `,
        });

        // 2. Email di conferma all'utente
        await resend.emails.send({
            from: 'noreply@campionarisara.com',
            to: email,
            subject: 'Abbiamo ricevuto il tuo messaggio — Campionari Sara Group',
            html: `
                <div style="font-family:sans-serif; max-width:600px; margin:0 auto;">
                    <h2 style="color:#111;">Grazie per averci contattato, ${name}.</h2>
                    <p style="color:#555; line-height:1.6;">
                        Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto all'indirizzo <strong>${email}</strong>.
                    </p>
                    <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />
                    <p style="color:#999; font-size:13px;">
                        Campionari Sara Group S.r.l.<br />
                        Via Gioberti 22 — 20851 Lissone (MB)<br />
                        <a href="https://campionarisara.com" style="color:#111;">campionarisara.com</a>
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}
