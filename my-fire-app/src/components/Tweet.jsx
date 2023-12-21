export default function Tweet({title, description}) {
    return (
        <div className="tweet--card">
            <p className="tweet--user">User: {title}</p>
            <p>{description}</p>
        </div>
    );
}