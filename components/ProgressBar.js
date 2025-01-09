export default function ProgressBar({ name, progress }) {
    return (
        <div style={{ margin: "20px 0", textAlign: "center" }}>
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{name}</div>
            <div
                style={{
                    width: "300px",
                    height: "20px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "10px",
                    overflow: "hidden",
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: "#535151",
                        transition: "width 0.4s ease",
                    }}
                ></div>
            </div>
            <div style={{ marginTop: "5px" }}>{progress}%</div>
        </div>
    );
}
