# Notion Progress Bar Project

This project is a dynamic progress bar web application built using **Next.js** and **Notion API**. The progress bar data is fetched directly from a Notion database and updates in real-time based on changes in the database.

## Features

* **Next.js App Directory Structure**
* **TypeScript Integration**
* **Real-Time Progress Bar Updates**
* **Notion API Integration**
* **Vercel Deployment**
* **Cloudflare DNS Management**

---

## Project Setup (For Beginners)

### Prerequisites:

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### 1. Create a Notion Integration

1. Go to [Notion Integrations]().
2. Click **Create New Integration**.
3. Provide a name for the integration (e.g., "Progress Bar Integration").
4. Select the workspace where you want to use this integration.
5. After creation, you will get a **Secret API Key**. Keep this safe as you will need it later.

### 2. Share Your Database with the Integration

1. Open your Notion database.
2. Click **Share** (top-right corner).
3. Search for your created integration (e.g., "Progress Bar Integration") and click **Invite**.

### 3. Clone the Repository

```
git clone https://github.com/your-username/notion-progress-bar.git
cd notion-progress-bar
```

### 4. Install Dependencies

```
npm install
```

### 5. Set Up Environment Variables

Create a `<span>.env.local</span>` file in the project root with the following content:

```
NOTION_API_KEY=secret_your_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

#### How to Find Your Database ID:

1. Open your Notion database.
2. Copy the part of the URL after `<span>/</span>` and before `<span>?v=...</span>`. It should look like `<span>1605520d9f5680fe9a4bf4a8c24f6bef</span>`.

### 6. Run the Development Server

```
npm run dev
```

Access the app at `<span>http://localhost:3000</span>`

---

## Notion Database Setup

Ensure your Notion database has the following columns:

* **Name:** Title Property
* **Step1, Step2, Step3:** Checkbox Properties
* **Progress:** Formula Property (Calculating the average of Step1, Step2, Step3 as a percentage)

**Formula Example:**

```
(toNumber(prop("Step1")) + toNumber(prop("Step2")) + toNumber(prop("Step3"))) / 3 * 100
```

---

## Deployment with Vercel

This project is deployed using **Vercel**.

### Steps:

1. Push the project to a GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/).
3. Import the repository and deploy.

### Custom Domain Setup (via Cloudflare):

* Add `<span>xequality.com</span>` as a domain in **Vercel > Settings > Domains**.
* In **Cloudflare DNS**, ensure:
  * **A Record:** `<span>@</span>` → `<span>76.76.21.21</span>` (Vercel IP)
  * **CNAME:** `<span>www</span>` → `<span>cname.vercel-dns.com</span>`
  * **Proxy Status:** DNS Only (⚠️ No Orange Cloud)

---

## How It Works

1. **Fetch Data:** The app fetches progress data from Notion API.
2. **Polling for Real-Time Updates:** Progress data is refreshed every 10 seconds using `<span>setInterval()</span>`.
3. **Data Parsing:** Formula column values from Notion are converted into percentage values.

---

## Project Structure

```
├── app
│   ├── api
│   │   └── progress
│   │       └── route.js      # API Route for Fetching Data from Notion
│   └── page.js               # Main Page with Real-Time Progress Bar
├── components
│   └── ProgressBar.js        # Progress Bar Component
├── utils
│   └── notion.js             # Notion API Integration Logic
├── .env.local                # Environment Variables (Not Committed)
├── vercel.json               # Vercel Rewrite Configurations
├── package.json              # Project Dependencies
└── README.md                 # Project Documentation
```

---

## Best Practices & Security

* **Environment Variables:** `<span>.env.local</span>` should never be committed to Git.
* **API Key Handling:** Use **Vercel Secrets** or GitHub Secrets for production deployments.

---

## License

This project is licensed under the **MIT License**.

---

## Contributing

Contributions are welcome! Please open a pull request for major changes.

**Enjoy building with Notion and Next.js! 🚀**
