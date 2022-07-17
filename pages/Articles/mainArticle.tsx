import * as React from 'react';
import { CommentForm } from './commentForm';
import { CommentArticle } from './commentPart';
import { HashtagsLinks } from './hashtagsLinks';
import { TextArticle } from './textArticle';

export interface IMainArticleProps {
}

export function MainArticle (props: IMainArticleProps) {
  return (
    <div className="bg-white p-[0.85rem] md:p-[3.75rem]">
      <TextArticle />
      <HashtagsLinks/>
      <CommentArticle/>
      <CommentForm/>
    </div>
  );
}
