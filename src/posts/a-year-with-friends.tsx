import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8754",
  "slug": "a-year-with-friends",
  "url": "/reviews/a-year-with-friends/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/08/a-year-with-friends/",
  "title": "A Year with Friends",
  "publishedAt": "2013-05-08",
  "publishedLabel": "May 8th, 2013",
  "excerpt": "A Year With Friends is a sweet, simple book which celebrates the months of the year through the eyes of children. Each month is given a specific purpose involving nature, family and friends, or holidays, with…",
  "image": {
    "src": "/media/2013/05/9781419704437c.jpg",
    "alt": "9781419704437c",
    "width": 210,
    "height": 174
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
      "name": "Christmas",
      "slug": "christmas",
      "url": "/topics/christmas/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jana Christy",
      "slug": "jana-christy",
      "url": "/topics/jana-christy/"
    },
    {
      "name": "John Seven",
      "slug": "john-seven",
      "url": "/topics/john-seven/"
    },
    {
      "name": "Months",
      "slug": "months",
      "url": "/topics/months/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sandi Lancaster",
      "slug": "sandi-lancaster",
      "url": "/topics/sandi-lancaster/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
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
    "description": "A Year With Friends is a sweet, simple book which celebrates the months of the year through the eyes of children. Each month is given a specific purpose involving nature, family and friends, or holidays, with…",
    "image": "https://vegbooks.org/media/2013/05/9781419704437c.jpg"
  },
  "previous": {
    "title": "Little Acorn Grows Up",
    "url": "/reviews/little-acorn-grows-up/"
  },
  "next": {
    "title": "What’s in the Garden?",
    "url": "/reviews/whats-in-the-garden/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/05/9781419704437c.jpg"}><img src={"/media/2013/05/9781419704437c.jpg"} alt={"9781419704437c"} width={210} height={174} /></a>
      </figure>
      <p><em>{"A Year With Friends"}</em>{" is a sweet, simple book which celebrates the months of the year through the eyes of children. Each month is given a specific purpose involving nature, family and friends, or holidays, with declarations such as “February is for snuggling,” and “March is time to hold on to your hat.” The illustrations are charming, and they depict two children and their animal friends having a different adventure each month."}</p>
      <p>{"Overall, the book is a gentle celebration of nature, loved ones, and the changes that we experience throughout the year. However, vegetarian families should note that the illustration for November includes a turkey platter for a Thanksgiving meal. Vegan families, as well as families who do not celebrate Christmas, should note that the illustration for December includes children cracking eggs to make Christmas cookies."}</p>
      <p>{"The November and December illustrations aside, the rest of the book beautifully highlights many wondrous things that bring children joy throughout the year. Vegetarian and vegan families can make a personal choice as to whether the two illustrations of animals-as-food and eggs-as-food are deal-breakers for a book intended for young children, or whether the illustrations merely warrant a comment along the lines of “Some people make different choices than we do.”"}</p>
      <p>{"A review copy was provided by "}<a href={"http://www.abramsbooks.com/"} target="_blank" rel="noopener noreferrer">{"Abrams"}</a>{"."}</p>
    </div>
  );
}
