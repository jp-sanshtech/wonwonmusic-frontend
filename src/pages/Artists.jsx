import React, { useState, useEffect } from "react";
import classes from "../components/css/Home.module.css";
import Line from "../components/main/Line.jsx";
import BackButton from "../components/main/BackButton.jsx";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        console.log("Fetching artists...");
        const response = await fetch("http://localhost:5000/api/artists", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Response data:", data);
        setArtists(data);
      } catch (err) {
        console.error("Error fetching artists:", {
          message: err.message,
          stack: err.stack,
        });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <>
      <BackButton />
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading artists...</p>
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : artists.length > 0 ? (
        artists.map((artist) => (
          <Line type="bottom-line" key={artist._id}>
            <a
              href={artist.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.navLink}
            >
              {artist.name}
            </a>
          </Line>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No artists found.</p>
      )}

      {/* Optional: Adding extra empty lines */}
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
    </>
  );
}
