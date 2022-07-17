import * as React from "react";
import { VaildCommentForm } from "./validation/validCommentForm";

export interface ICommentFormProps {}

export function CommentForm(props: ICommentFormProps) {
  return (
    <div className="mt-[1.875rem]">
      <h1 className="border-l-[2px] border-primary pl-[8px] text-[1.25rem] cursor-default">
        Add a New Comment
      </h1>{" "}
      <VaildCommentForm/>
    </div>
  );
}
