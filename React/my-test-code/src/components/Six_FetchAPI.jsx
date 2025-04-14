import React, { useEffect, useState } from "react";

function Six_FetchAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response) {
          throw new Error("Network response wasn't ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Data From API</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Six_FetchAPI;
