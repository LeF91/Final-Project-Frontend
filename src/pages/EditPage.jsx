import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myApi from "./../service/service";
// import { Link } from "react-router-dom";

function EditPage() {
  const [comment, setComment] = useState(null);
  const [newContent, setNewContent] = useState(comment.content);
  const { commentId } = useParams();

  useEffect(() => {
    async function fetchComment() {
      try {
        const res = await myApi.get(`/comments/${carId}`);
        setComment(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    // fetchCars();
    fetchComment();
  }, [carId]);
  const handleUpdateComment = async () => {
    try {
      await myApi.put(`/comments/${commentId}`, { content: newContent });
      onclose();
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleUpdateComment = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await myApi.put(`/api/comments/${commentId}`);
  //       console.log(response.data);
  //       navigate(`/`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const isAuthor = user && comment.user === user._id;

  if (!isAuthor) {
    return <p></p>;
  }

  return (
    <div>
      <h1>Modifier le Commentaire</h1>
      {/* <p>Commentaire actuel : {comment.content}</p> */}
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        rows="4"
      ></textarea>
      {/* <textarea
        id="comment"
        name="comment"
        rows="4"
        ref={commentInput}
      ></textarea> */}
      {/* <Link to={"/car/:carId"}></Link> */}
      <button onClick={handleUpdateComment}>Enregistrer</button>
      <button onClick={onclose}>Annuler</button>
    </div>
  );
}

export default EditPage;
