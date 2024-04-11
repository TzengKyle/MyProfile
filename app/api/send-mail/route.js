import { Resend } from 'resend';
// import { renderToString, renderToReadableStream } from "react-dom/server";

const RESEND_API_KEY = "re_D6RMJ6Fo_3nV2pX81zv8KZ72CTBfdUwGG"
const resend = new Resend(RESEND_API_KEY)

export async function POST(request, response) {
    const { name, emailAddress, subject, content } = await request.json();

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kyletzeng0514@gmail.com',
            subject: "[KYLE WEBSITE的訊息]",
            text: `寄件者:${name}\n主旨:${subject}\n${content}`
        });

        if (emailAddress) {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: emailAddress,
                subject: "[KYLE WEBSITE的自動回覆訊息]",
                text: `您好!${name} 十分感謝您參觀我的個人網站並傳送信件給我 !`
            });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
