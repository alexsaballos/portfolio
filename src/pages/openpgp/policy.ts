// WKD Protocol requires a blank file named policy
export async function GET() {
    return new Response("", {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=86400"
        }
    });
}