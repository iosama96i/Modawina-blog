import React, { useState, useEffect } from "react";

import { comments } from "../../src/data/data";
export interface ICommentArticleProps {}

export function CommentArticle(props: ICommentArticleProps) {
  const [data, setData] = React.useState([...comments]);

  return (
    <div className="comments">
      <h1 className="headingComment">.Comment (3)</h1>
      {/* comment */}
      {data.map((data,index: any): any => {
        return (
          <>
            <div key={index} className="comment">
              <div className="containerComment">
                <h5>{data.name}</h5>
                <p>today</p>
              </div>
              <p className="paraghraph">{data.comment}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
