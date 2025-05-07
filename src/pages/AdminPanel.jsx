import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/css/Admin.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function AdminPanel() {
  const [artists, setArtists] = useState([]);
  const [newArtist, setNewArtist] = useState({ name: "", instagramUrl: "", order: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Redirect if no token
  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const fetchArtists = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/artists`, authHeader);
      setArtists(response.data);
    } catch (err) {
      setError("Failed to fetch artists. Please log in.");
      navigate("/");
    }
  };

  const handleAddArtist = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/admin/artists/add`, newArtist, authHeader);
      setNewArtist({ name: "", instagramUrl: "", order: "" });
      fetchArtists();
    } catch (err) {
      setError("Failed to add artist.");
    }
  };

  const handleDeleteArtist = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/admin/artists/delete/${id}`, authHeader);
      fetchArtists();
    } catch (err) {
      setError("Failed to delete artist.");
    }
  };

  const handleReorder = async (result) => {
    if (!result.destination) return;

    const reordered = Array.from(artists);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setArtists(reordered);

    try {
      const updatedOrders = reordered.map((artist, index) => ({
        _id: artist._id,
        order: index + 1,
      }));

      await axios.post(`${API_BASE_URL}/api/admin/artists/reorder`, {
        reorderedArtists: updatedOrders
      }, authHeader);
    } catch (err) {
      setError("Failed to reorder artists.");
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      {error && <div className="text-danger">{error}</div>}

      <h2>Current talent</h2>
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId="artists">
          {(provided) => (
            <ul className="list-group mb-4" {...provided.droppableProps} ref={provided.innerRef}>
              {artists.map((artist, index) => (
                <Draggable key={artist._id} draggableId={artist._id} index={index}>
                  {(provided) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>
                        {artist.name} -{" "}
                        <a href={artist.instagramUrl} target="_blank" rel="noreferrer">
                          {artist.instagramUrl}
                        </a>
                      </span>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteArtist(artist._id)}
                      >
                        Delete
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <h2>Add New talent</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAddArtist(); }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Talent Name"
            value={newArtist.name}
            onChange={(e) => setNewArtist({ ...newArtist, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Instagram URL"
            value={newArtist.instagramUrl}
            onChange={(e) => setNewArtist({ ...newArtist, instagramUrl: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add talent
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;
