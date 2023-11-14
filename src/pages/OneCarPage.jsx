import React, { useRef, useState, useEffect } from "react";
import myApi from "./../service/service.js";
import { useAuth } from "./../context/AuthContext";
import { useParams } from "react-router-dom";

function OneCarPage() {
  const commentInput = useRef();
  const [comments, setComments] = useState([]);
  const { user } = useAuth();
  const { oneCarId } = useParams();

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await myApi.get(`/oneCars/${oneCarId}/comments`);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComments();
  }, [oneCarId]);

  async function handleAddComment(event) {
    event.preventDefault();
    const content = commentInput.current.value;

    try {
      const res = await myApi.post(`/oneCars/${oneCarId}/comments`, {
        content,
        user: user.id,
      });
      setComments([...comments, res.data]);
      commentInput.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Commentaires sur le Modèle de Voiture</h1>

      <form>
        <label htmlFor="comment">Ajouter un commentaire:</label>
        <textarea
          id="comment"
          name="comment"
          rows="4"
          ref={commentInput}
          required
        ></textarea>

        <button onClick={handleAddComment}>Ajouter le Commentaire</button>
      </form>

      <div>
        <h2>Commentaires</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OneCarPage;
