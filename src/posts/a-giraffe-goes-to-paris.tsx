import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5408",
  "slug": "a-giraffe-goes-to-paris",
  "url": "/reviews/a-giraffe-goes-to-paris/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/17/a-giraffe-goes-to-paris/",
  "title": "A Giraffe Goes to Paris",
  "publishedAt": "2011-06-17",
  "publishedLabel": "June 17th, 2011",
  "excerpt": "As a follow-up to her historical fiction piece on Clara the Rhino, author/ curator/ teacher Mary Tavener Holmes depicts the life and travels of one other influential animal in A Giraffe Goes to Paris. Born in 1824,…",
  "image": {
    "src": "/media/2011/06/giraffe.jpg",
    "alt": "A Giraffe Goes to Paris",
    "width": 210,
    "height": 269
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "African Animals",
      "slug": "african-animals",
      "url": "/topics/african-animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Giraffes",
      "slug": "giraffes",
      "url": "/topics/giraffes/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Jon Cannell",
      "slug": "jon-cannell",
      "url": "/topics/jon-cannell/"
    },
    {
      "name": "Mary Tavener Holmes",
      "slug": "mary-tavener-holmes",
      "url": "/topics/mary-tavener-holmes/"
    },
    {
      "name": "Wild Animals in Captivity",
      "slug": "wild-animals-in-captivity",
      "url": "/topics/wild-animals-in-captivity/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "As a follow-up to her historical fiction piece on Clara the Rhino, author/ curator/ teacher Mary Tavener Holmes depicts the life and travels of one other influential animal in A Giraffe Goes to Paris. Born in 1824,…",
    "image": "https://vegbooks.org/media/2011/06/giraffe.jpg"
  },
  "previous": {
    "title": "The Snail and the Whale",
    "url": "/reviews/the-snail-and-the-whale/"
  },
  "next": {
    "title": "The Day I Swapped My Dad for Two Goldfish",
    "url": "/reviews/the-day-i-swapped-my-dad-for-two-goldfish/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/giraffe.jpg"}><img src={"/media/2011/06/giraffe.jpg"} alt={"A Giraffe Goes to Paris"} width={210} height={269} /></a>
      </figure>
      <p>{"As a follow-up to her historical fiction piece on "}<a href={"http://en.wikipedia.org/wiki/Clara_%28rhinoceros%29"} target="_blank" rel="noopener noreferrer">{"Clara the Rhino"}</a>{", author/ curator/ teacher Mary Tavener Holmes depicts the life and travels of one other influential animal in "}<em><a href={"http://www.amazon.com/gp/product/0761455957/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217153&creative=399349&creativeASIN=0761455957"} target="_blank" rel="noopener noreferrer">{"A Giraffe Goes to Paris"}</a></em>{". Born in 1824, Belle is given to the King of France, Charles X, as an exotic gift from the Pasha of Egypt, Muhammad Ali. The person charged with her care during the voyage is Atir, who also serves as the story’s narrator."}</p>
      <p>{"Like Clara, Belle was an absolute sensation. No one had seen the likes of her before: “Was she some kind of camel? She had spots like a leopard’s. She had a long tongue, almost like a snake’s. And she walked so strangely – first her two rights legs, then her two left legs – so she was not a horse. What was she? Everyone had a different idea.”"}</p>
      <p>{"Belle’s trip involved some additional pondering such as how to transport her on a boat (think: a hole carved out of the top deck for her neck) or how to get her to Paris (Let’s just have her walk all 500 miles over 41 days!). For food, they provided her with cow’s milk and, for companionship, a few antelopes. From an animal rights perspective, there’s a host of ethical issues in this historical narrative, but there’s no denying that it’s an interesting tale."}</p>
      <p>{"From Belle tchotchke to giraffe-inspired hairdos to the thousands that flooded Le Jardin Des Plantes to see her (where she spent the remaining 18 years of her life with Atir), it’s easy to acknowledge that the people of France were in love with this docile creature. What I appreciate most in this book is the way in which illustrator Jon Cannell incorporates actual artifacts and artwork into his design work. My only criticism would be that there is no discussion guide for teachers, parents or students; without ethical commentary or queries (should wild animals be given as gifts?), history loses its significance and becomes disjointed from the present and future. Otherwise, "}<em>{"A Giraffe Goes to Paris"}</em>{" is a great tidbit from human-animal studies and one that shows Atir’s sincere commitment to Belle and her welfare (as you’ll see, if you pick up a copy!)."}</p>
      <p>{"Ages 6-9."}</p>
    </div>
  );
}
