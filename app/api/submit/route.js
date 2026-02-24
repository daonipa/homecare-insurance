const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwx2_qaJh0cOMToJD8V4RQRwH2EbB0OpeoQy7wA4rjjSi2erTg4jHMLTjalUq2U8ervZg/exec";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
