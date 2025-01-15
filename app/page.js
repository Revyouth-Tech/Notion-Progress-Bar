export default function HomePage() {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Equality</h1>
        <p>Navigate to the Progress Bar page:</p>
        <a
            href="/progressbar-equality"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              marginTop: "20px",
            }}

        >
          Go to Progress Bar Page
        </a>
      </div>
  );
}
