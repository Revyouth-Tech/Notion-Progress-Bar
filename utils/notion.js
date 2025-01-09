import axios from "axios";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function fetchProgressData() {
    try {
        const response = await axios.post(
            `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    "Content-Type": "application/json",
                    "Notion-Version": "2022-06-28",
                },
            }
        );

        const results = response.data.results;

        return results.map((item) => {
            // Extract name
            const name = item.properties["Name"]?.title?.[0]?.plain_text || "Unnamed Task";

            // Extract progress and convert it to a percentage
            const progressValue = item.properties["Progress"]?.formula?.number || 0;
            const progress = Math.round(progressValue * 100); // Convert 0.666 to 66

            return { name, progress };
        });
    } catch (error) {
        console.error("Error fetching data from Notion:", error.response?.data || error.message);
        return [];
    }
}
