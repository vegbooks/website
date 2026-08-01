import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8887",
  "slug": "each-living-thing",
  "url": "/reviews/each-living-thing/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/27/each-living-thing/",
  "title": "Each Living Thing",
  "publishedAt": "2013-05-27",
  "publishedLabel": "May 27th, 2013",
  "excerpt": "This week as I walked past the shelves of books in the children’s library my eyes landed on one that was displayed on top of the shelf. The title, Each Living Thing, got me interested right away and I snagged it to…",
  "image": {
    "src": "/media/2013/05/9780152018986-hres.jpg",
    "alt": "9780152018986_hres",
    "width": 210,
    "height": 250
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
      "name": "Ashley Wolff",
      "slug": "ashley-wolff",
      "url": "/topics/ashley-wolff/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Joanne Ryder",
      "slug": "joanne-ryder",
      "url": "/topics/joanne-ryder/"
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
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "This week as I walked past the shelves of books in the children’s library my eyes landed on one that was displayed on top of the shelf. The title, Each Living Thing, got me interested right away and I snagged it to…",
    "image": "https://vegbooks.org/media/2013/05/9780152018986-hres.jpg"
  },
  "previous": {
    "title": "Noisy Bug Sing-a-Long",
    "url": "/reviews/noisy-bug/"
  },
  "next": {
    "title": "Mind of My Own",
    "url": "/reviews/mind-of-my-own/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/05/9780152018986-hres.jpg"}><img src={"/media/2013/05/9780152018986-hres.jpg"} alt={"9780152018986_hres"} width={210} height={250} /></a>
      </figure>
      <p>{"This week as I walked past the shelves of books in the children’s library my eyes landed on one that was displayed on top of the shelf. The title, "}<em>{"Each Living Thing"}</em>{", got me interested right away and I snagged it to put in my pile. As many of us know, titles can be deceiving, so I had no idea what the story would reveal. Upon getting it home to read with my children I was delighted at this little treasure that I had stumbled across."}</p>
      <p>{"E"}<em>{"ach Living Thing"}</em>{" is a wondering book that takes young readers on a journey through nature, asking them to do such things as to watch out for spiders, let the toads cross the road, and to watch out for every living thing. The book offers a wonderful message, saying to take care of them, and let them be – the very same message most vegetarian and vegan parents try to convey."}</p>
      <p>{"With beautiful nature illustrations and a thought-provoking message, this is a book that every vegetarian and vegan family will want to share with their children. And if they have the opportunity, it’s a great one to get in the hands of those families that are not vegetarian or vegan, with hopes that the message helps to gently spread compassion to all those who read it ("}<a href={"http://www.amazon.com/gp/product/0152018980/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0152018980&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affilate link"}</a>{")."}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
