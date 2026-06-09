import qrcode from 'qrcode';
import { SYSTEM } from '@config/links';

export async function GET() {
    const qrSvgString = await qrcode.toString(SYSTEM.notable.card_utm, {
        type: 'svg', margin: 1
    });

    return new Response(qrSvgString, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
}