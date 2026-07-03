// WKD Protocol requires a blank file named policy
export async function GET() {
    return new Response("", {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain; charset=utf-8"
        }
    });
}