"use client";

import EditTopicForm from "@/components/editTopicForm";
import React, { useEffect, useState } from "react";

export default function EditTopic({ params }) {
  const { id } = params;
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const getTopicById = (id) => {
    try {
      fetch(`http://localhost:3000/api/topics/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDesc(data.topic.description);
          setTitle(data.topic.title);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    getTopicById(id);
  }, [id]);
  if (!title || !description) {
    return <div>Loading...</div>;
  }

  return <EditTopicForm id={id} title={title} description={description} />;
}
