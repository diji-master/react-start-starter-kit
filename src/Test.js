import { useEffect, useState } from "react";

export default function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log("component ilk yüklendiğinde çalışır!");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    let interval = setInterval(() => console.log("sayaç çalıştı.."), 1000);

    return () => {
      console.log("component öldü!");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  // useEffect(() => {
  //   console.log("component render oldu!");
  // });

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <br />
      <button
        className="bg-black text-white ml-2 p-1 w-4/6 rounded-md my-3"
        onClick={() => setPostId((postId) => postId + 1)}>
        Sonraki Konu
      </button>
      <hr />
      <br />
      Test Component
    </div>
  );
}
