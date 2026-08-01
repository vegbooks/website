import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5085",
  "slug": "birthday-zoo",
  "url": "/reviews/birthday-zoo/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/07/birthday-zoo/",
  "title": "Birthday Zoo",
  "publishedAt": "2011-05-07",
  "publishedLabel": "May 7th, 2011",
  "excerpt": "Birthday Zoo is a story that revolves around animals in the zoo who are celebrating a boy’s birthday party. Through clever rhymes, each animal plays a different role at the party. For example, the sloth says, “Spread…",
  "image": {
    "src": "/media/2011/05/9780807507773.jpg",
    "alt": "Birthday Zoo",
    "width": 210,
    "height": 271
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
      "name": "Bats",
      "slug": "bats",
      "url": "/topics/bats/"
    },
    {
      "name": "Birthday",
      "slug": "birthday",
      "url": "/topics/birthday/"
    },
    {
      "name": "Deborah Lee Rose",
      "slug": "deborah-lee-rose",
      "url": "/topics/deborah-lee-rose/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Lynn Munsinger",
      "slug": "lynn-munsinger",
      "url": "/topics/lynn-munsinger/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Sloths",
      "slug": "sloths",
      "url": "/topics/sloths/"
    },
    {
      "name": "Tapirs",
      "slug": "tapirs",
      "url": "/topics/tapirs/"
    },
    {
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "Birthday Zoo is a story that revolves around animals in the zoo who are celebrating a boy’s birthday party. Through clever rhymes, each animal plays a different role at the party. For example, the sloth says, “Spread…",
    "image": "https://vegbooks.org/media/2011/05/9780807507773.jpg"
  },
  "previous": {
    "title": "Fred Stays With Me!",
    "url": "/reviews/fred-stays-with-me/"
  },
  "next": {
    "title": "The Chimpanzee Kid",
    "url": "/reviews/the-chimpanzee-kid/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/9780807507773.jpg"}><img src={"/media/2011/05/9780807507773.jpg"} alt={"Birthday Zoo"} width={210} height={271} /></a>
      </figure>
      <p><em>{"Birthday Zoo"}</em>{" is a story that revolves around animals in the zoo who are celebrating a boy’s birthday party. Through clever rhymes, each animal plays a different role at the party. For example, the sloth says, “Spread out a cloth,” and the bats instruct, “Pass out the hats.” My favorite came from the tapir, who says, “Recycle the paper.” It’s always nice to throw a positive message into the mix .Together, the animals create a happy celebration for all! The illustrations are colorful, lively, and full of details. It’s a fun book that will kids will enjoy reading."}</p>
      <p>{"However, that being said, the actual title of the book, "}<em>{"Birthday Zoo"}</em>{", is not an ideal title for veg parents. If you can overlook the title and the one reference to the zoo in the story (other than those, you wouldn’t know these animals live at a zoo), this is a nice book. But for those who care about the welfare of animals and who are committed to abolishing "}<a href={"http://as.nyu.edu/docs/IO/1192/Against_Zoos.pdf"} target="_blank" rel="noopener noreferrer">{"venues and industries that exploit them"}</a>{", I would leave this book off your bookshelves."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
