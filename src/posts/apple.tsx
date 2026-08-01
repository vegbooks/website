import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8247",
  "slug": "apple",
  "url": "/reviews/apple/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/02/apple/",
  "title": "Apple",
  "publishedAt": "2012-10-02",
  "publishedLabel": "October 2nd, 2012",
  "excerpt": "With simple pictures and a single word on each page, Apple by Nikki McClure tells the story of the life cycle of an apple. The story begins with the apple falling from a tree. The readers follow the apple on its…",
  "image": {
    "src": "/media/2012/10/apple-cvr.jpg",
    "alt": "Apple",
    "width": 210,
    "height": 210
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
      "name": "Apples",
      "slug": "apples",
      "url": "/topics/apples/"
    },
    {
      "name": "Autumn",
      "slug": "autumn",
      "url": "/topics/autumn/"
    },
    {
      "name": "Composting",
      "slug": "composting",
      "url": "/topics/composting/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Lifecycle",
      "slug": "lifecycle",
      "url": "/topics/lifecycle/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Nikki McClure",
      "slug": "nikki-mcclure",
      "url": "/topics/nikki-mcclure/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    },
    {
      "name": "Sandi Lancaster",
      "slug": "sandi-lancaster",
      "url": "/topics/sandi-lancaster/"
    }
  ],
  "reviewer": {
    "name": "Sandi Lancaster",
    "slug": "sandi-lancaster",
    "url": "/contributors/sandi-lancaster/",
    "aliases": [
      "SANDI LANCASTER"
    ]
  },
  "seo": {
    "description": "With simple pictures and a single word on each page, Apple by Nikki McClure tells the story of the life cycle of an apple. The story begins with the apple falling from a tree. The readers follow the apple on its…",
    "image": "https://vegbooks.org/media/2012/10/apple-cvr.jpg"
  },
  "previous": {
    "title": "We’re Sailing to Galapagos",
    "url": "/reviews/were-sailing-to-galapagos/"
  },
  "next": {
    "title": "Nature’s Patchwork Quilt",
    "url": "/reviews/natures-patchwork-quilt/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/10/apple-cvr.jpg"}><img src={"/media/2012/10/apple-cvr.jpg"} alt={"Apple"} width={210} height={210} /></a>
      </figure>
      <p>{"With simple pictures and a single word on each page, "}<em>{"Apple"}</em>{" by "}<a href={"http://www.nikkimcclure.com/"} target="_blank" rel="noopener noreferrer">{"Nikki McClure"}</a>{" tells the story of the life cycle of an apple. The story begins with the apple falling from a tree. The readers follow the apple on its journey from the tree, to being found and taken and later forgotten, to being returned to the earth, and then, lastly, sprouting again in the springtime. The black and white pictures, with just a bit of red, are sweet, and they set a gentle backdrop for the story."}</p>
      <p>{"At one point in the story, when the apple ends up in a kitchen, a child takes the apple (with the simple caption “Sneak”), hides the apple in a backpack (“Hide”), and with his mother unaware, takes the apple with him when he leaves the house (“Secret”). For our family, such an occurrence in a story leads to a discussion about the importance of being honest rather than sneaky with one another. This seems to be far removed from the author’s intention, but some families reading the book may find it important to address this."}</p>
      <p>{"Vegetarian and vegan families wishing to instill in their children an appreciation for nature may appreciate that, after the story ends, the author includes information on composting, as well as information on the life of an apple tree. As I read the book to my 4-year-old audience (my daughter and her friend), I found that while the story itself seems appropriate for younger children (preschool age, perhaps), the manner of presentation of the composting information at the end may be better suited for a somewhat older readership."}</p>
      <p>{"Overall, the story is a simple celebration of nature. It is clearly intended to encourage children to have an appreciation for the earth, which is a worthy goal, indeed."}</p>
      <p><em>{"A review copy was received from "}<a href={"http://www.abramsbooks.com/"} target="_blank" rel="noopener noreferrer">{"Abrams Books"}</a>{"."}</em></p>
    </div>
  );
}
