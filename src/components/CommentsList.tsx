"use client";
import { Comments } from "../data/staticData";
import React, { useState } from "react";

const CommentsList: React.FC = () => {
  const [visibleComments, setVisibleComments] = useState(5);

  const showMoreComments = () => {
    setVisibleComments((prev) => prev + 5);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-4">Comments List</h2>
      <main>
        {Comments.slice(0, visibleComments).map((comment, index) => (
          <div key={index} data-testid='comments'>
            <div className="border rounded-md p-3 ml-3 my-3">
              <div className="flex gap-3 items-center">
                <span
                  className="bg-gray-500 w-8 h-8 rounded-full 
                   border-2 border-emerald-400  shadow-emerald-400
                   "
                ></span>

                <h3 className="font-bold">{comment.name}</h3>
              </div>
              <p className="text-gray-600 mt-2">{comment.message}</p>
            </div>
          </div>
        ))}
      </main>
      {visibleComments < Comments.length && (
        <button
          onClick={showMoreComments}
          className="mt-4 btn btn-primary text-center"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default CommentsList;
