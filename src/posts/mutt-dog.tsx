import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1848",
  "slug": "mutt-dog",
  "url": "/reviews/mutt-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/16/mutt-dog/",
  "title": "Mutt Dog!",
  "publishedAt": "2010-07-16",
  "publishedLabel": "July 16th, 2010",
  "excerpt": "Kiddo has a couple books that will bring me to tears, and Mutt Dog!by Stephen Michael King is one of them. The book’s sensitive approach to homelessness, human and canine, and its happy ending get me every time. Mutt…",
  "image": {
    "src": "/media/2010/07/mutt.jpg",
    "alt": "Mutt Dog!",
    "width": 210,
    "height": 244
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
      "name": "Adoption",
      "slug": "adoption",
      "url": "/topics/adoption/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homelessness",
      "slug": "homelessness",
      "url": "/topics/homelessness/"
    },
    {
      "name": "KIND Children's Honor Books",
      "slug": "kind-childrens-honor-books",
      "url": "/topics/kind-childrens-honor-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Social Justice",
      "slug": "social-justice",
      "url": "/topics/social-justice/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Kiddo has a couple books that will bring me to tears, and Mutt Dog!by Stephen Michael King is one of them. The book’s sensitive approach to homelessness, human and canine, and its happy ending get me every time. Mutt…",
    "image": "https://vegbooks.org/media/2010/07/mutt.jpg"
  },
  "previous": {
    "title": "She’s Wearing a Dead Bird on Her Head!",
    "url": "/reviews/shes-wearing-a-dead-bird-on-her-head/"
  },
  "next": {
    "title": "Baby Whales Drink Milk",
    "url": "/reviews/baby-whales-drink-milk/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/mutt.jpg"}><img src={"/media/2010/07/mutt.jpg"} alt={"Mutt Dog!"} width={210} height={244} /></a>
      </figure>
      <p>{"Kiddo has a couple books that will "}<a href={"/reviews/dog-heaven/"}>{"bring me to tears"}</a>{", and "}<em>{"Mutt Dog!"}</em>{"by "}<a href={"http://www.stephenmichaelking.com/"} target="_blank" rel="noopener noreferrer">{"Stephen Michael King"}</a>{" is one of them. The book’s sensitive approach to homelessness, human and canine, and its happy ending get me every time."}</p>
      <p><em>{"Mutt Dog!"}</em>{" will help kids understand why it’s important to "}<a href={"http://www.adoptdontbuy.org/"} target="_blank" rel="noopener noreferrer">{"adopt, not buy"}</a>{", companion animals."}</p>
      <p>{"Parents should also be prepared for questions about why some people and animals have homes while others do not. Talking through these issues can be difficult, especially with young children, but "}<a href={"http://www.whatkidscando.org/featurestories/2010/02_beta_club2/index.html"} target="_blank" rel="noopener noreferrer">{"putting a face on homelessness"}</a>{" is probably the first step in working to eliminate it altogether."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
