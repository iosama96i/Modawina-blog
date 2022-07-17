import * as React from "react";
import TextSizeIcon from "../../src/assets/icons/textSizeIcon";

export interface ITextArticleProps {}

export function TextArticle(props: ITextArticleProps) {
  return (
    <article className="border-b-[2px] border-LightGray">
      <div className="ArticleImage">
        <img src="/imgs/cart.png" alt="incrase your sell" />
        <TextSizeIcon className="cursor-pointer" />
      </div>
      <div className="article">
        <p>
          eCommerce sites and web stores are a great way to sell – and even more
          so in the past few months – but how can you increase sales online?
        </p>
        <p>
          The good news is that once your store is up and running, then most of
          the hard work is done! But that doesn’t mean that you can’t make a few
          tweaks to improve your sales figures; either by increasing new
          customers or by improving the numbers of existing ones coming back to
          buy again.
        </p>
        <p>Here are 5 quick ways to increase your sales online.</p>
        <h3>1. Have a clear, simple page layout</h3>
        <p>
          Make sure that your web store is clearly laid out and not cluttered or
          confusing.
        </p>
        <p>
          Customers want to see images of the product, find key specific info
          (such as size, delivery time, colour options, etc) and be able to make
          a decision from the information displayed in a way that they can find
          it and understand it easily.
        </p>
        <p>
          Too much clutter and many will simply hit the back button and lose you
          the sale. Keep your layout uniform across all your product pages.
          Think about Amazon – their pages carry a lot of information, but
          before you land on the page you know where to find what you want.
          Images are upfront and there, plus some key text with highlights of
          the most important features.
        </p>
        <p>
          More detailed info is further down the page and out of the way. The
          other thing that all Amazon pages display clearly? The Buy Now and Add
          to Basket buttons. These make it easy to purchase – so make sure that
          your product pages do the same. For more suggestions on store page
          layout – read eCommerce display design improvements.
        </p>
        <img src="/imgs/laptop.png" alt="" />
        <h3>2. Build trust with your customers</h3>
        <p>
          Customers who feel that you are a company that can be trusted are far
          more likely to buy from you. There are several ways to build trust.
          Consider implementing some of these suggestions if you have not
          already done so:
        </p>
        <ul>
          <li>
            a). Be honest in your product descriptions. If a product does not
            live up to expectations, then that customer will not buy from you
            again.
          </li>
          <li>
            b). Be honest in your service descriptions. As with products, make
            sure your service matches your promise – don’t say delivery in 2
            days and then take a week to do it – that customer won’t be back.
          </li>
          <li>
            c). Respond to customer queries (and complaints) quickly. Ideally,
            use a webchat or live chat service – some are free, and some are
            built-in with store platforms. Being available to answer questions
            will win you extra sales from customers with queries.
          </li>
        </ul>
      </div>
    </article>
  );
}
