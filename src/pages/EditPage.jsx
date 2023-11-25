// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import myApi from "./../service/service";
// import { useAuth } from "../context/AuthContext";

// function EditPage() {
//   const commentInput = useRef();
//   const [comment, setComment] = useState([]);
//   const { user } = useAuth;
//   const { commentId } = useParams();
//   const Navigate = useNavigate;

//   useEffect(() => {
//     async function fetchComment() {
//       try {
//         const res = await myApi.get(`/comments/${commentId}`);
//         setComment(res.data);
//         commentInput.current.value = comment.content;
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     // fetchCars();
//     fetchComment();
//   }, [commentId]);

//   async function handleUpdateComment(event) {
//     event.preventDefault();
//     const content = commentInput.current.value;

//     try {
//       const res = await myApi.put(`/comments/${commentId}`, { content });
//       console.log(res.data);
//       Navigate(`/vehicule/${res.data.carId}`);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // const handleUpdateComment = async () => {
//   //   try {
//   //     await myApi.put(`/comments/${commentId}`, { content: newContent });
//   //     onclose();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // //   const handleUpdateComment = async (e) => {
//   // //     e.preventDefault();
//   // //     try {
//   // //       const response = await myApi.put(`/api/comments/${commentId}`);
//   // //       console.log(response.data);
//   // //       navigate(`/`);
//   // //     } catch (error) {
//   // //       console.log(error);
//   // //     }
//   // //   };

//   const isAuthor = user && comment.user === user._id;

//   if (!isAuthor) {
//     return <p></p>;
//   }

//   return (
//     <div>
//       <h1>Edit Comment</h1>
//       <form onSubmit={handleUpdateComment}>
//         <label htmlFor="content">Comment:</label>
//         <textarea
//           id="content"
//           name="content"
//           rows="4"
//           ref={commentInput}
//           required
//         ></textarea>

//         <button type="submit">Save Comment</button>
//       </form>
//     </div>
//   );
// }

// export default EditPage;
