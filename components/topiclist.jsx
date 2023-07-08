"use client";

import React, { useEffect, useState } from "react";
import Removebtn from "./removebtn";
import Link from "next/link";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

const removeTopic = async (id) => {
  const confirmed = confirm("Are you sure ?");

  if (confirmed) {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE",
    });
  }
};

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

export default function TopicLists() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getTopicsRequest = () => {
    setIsloading(true);
    getTopics().then((data) => {
      console.log(data);
      setTopics(data.topics);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getTopicsRequest();
  }, []);

  const deleteTopic = (id) => {
    removeTopic(id).then(() => {
      getTopicsRequest();
    });
  };
  if (isLoading) {
    return <div> Loading ... </div>;
  }
  if (topics.length === 0) {
    return (
      <>
        <div className="text-red-400 flex justify-center font-bold">
          No Records Found.
        </div>
      </>
    );
  }
  return (
    <>
      {topics.map((t) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => deleteTopic(t._id)} className="text-red-400">
              <HiOutlineTrash size={24} />
            </button>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
