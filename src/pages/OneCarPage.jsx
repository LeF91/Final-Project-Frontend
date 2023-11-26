import React, { useRef, useState, useEffect } from "react";
import myApi from "../service/service.js";
import { useAuth } from "../context/AuthContext.jsx";
import { useParams } from "react-router-dom";

function OneCarPage() {
  const commentInput = useRef();
  const [comments, setComments] = useState([]);
  const [car, setCar] = useState([]);
  const { user } = useAuth();
  const { vehiculeId } = useParams();
  const { commentId } = useParams();

  async function fetchCar() {
    try {
      const res = await myApi.get(`/vehicule/${vehiculeId}`);
      setCar(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCar();
  }, [vehiculeId]);

  async function fetchComments() {
    try {
      const res = await myApi.get(`/vehicule/${vehiculeId}/comments`);
      setComments(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchComments();
  }, [commentId]);

  async function handleAddComment(event) {
    event.preventDefault();
    const content = commentInput.current.value;

    try {
      const res = await myApi.post(`/vehicule/${vehiculeId}/comments`, {
        content,
        user: user._id,
      });
      setComments([...comments, res.data]);
      commentInput.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDeleteComment(commentId) {
    try {
      console.log(commentId);
      await myApi.delete(`/comments/${commentId}`);

      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.log(error);
    }
  }
  if (!vehiculeId) {
    return <p>Loading...</p>;
  }

  async function handleUpdateComment(commentId) {
    try {
      console.log(commentId);
      await myApi.put(`/comments/${commentId}`);
      setComments(commentId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* <h1>Commentaires sur le Modèle de Voiture</h1> */}
      <div className="one-car-page">
        <h1>{car.brand}</h1>
        {/* <p>{car.model.name}</p> */}
      </div>
      <form>
        <label htmlFor="comment">Ajouter un commentaire:</label>
        <textarea
          id="comment"
          name="comment"
          rows="4"
          ref={commentInput}
          required
        ></textarea>

        <button onClick={handleAddComment}>Ajouter le commentaire</button>
      </form>
      <div>
        <h2>Commentaires</h2>
        <ul>
          {comments.map((comment) => (
            // les commentaires ne s'affiche toujours pas mais sont bien présent dans myApi
            <li key={comment._id}>
              {comment.user === user._id && (
                <div>
                  <button onClick={() => handleDeleteComment(comment._id)}>
                    Supprimer mon commentaire
                  </button>
                  <button onClick={() => handleUpdateComment(comment._id)}>
                    Modifier mon commentaire
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OneCarPage;
