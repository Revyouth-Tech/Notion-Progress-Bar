import { fetchProgressData } from "@/utils/notion";

export async function GET(req) {
    try {
        const progressData = await fetchProgressData();
        return new Response(JSON.stringify(progressData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error in GET /api/progress:", error.message);
        return new Response(
            JSON.stringify({ error: "Failed to fetch progress data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
