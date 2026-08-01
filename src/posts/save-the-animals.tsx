import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1618",
  "slug": "save-the-animals",
  "url": "/reviews/save-the-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/02/save-the-animals/",
  "title": "Let’s Save the Animals",
  "publishedAt": "2010-05-02",
  "publishedLabel": "May 2nd, 2010",
  "excerpt": "“I wish we could save all the endangered animals in the world!” So begins this creative book by Frances Barry. Bold, simple sentences with compelling action verbs (rhinos wallowing, penguins skidding, turtles…",
  "image": {
    "src": "/media/2010/05/9780763645014.jpg",
    "alt": "Let’s Save the Animals",
    "width": 214,
    "height": 194
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Frances Barry",
      "slug": "frances-barry",
      "url": "/topics/frances-barry/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Penguins",
      "slug": "penguins",
      "url": "/topics/penguins/"
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
      "name": "Rhinos",
      "slug": "rhinos",
      "url": "/topics/rhinos/"
    },
    {
      "name": "Turtles",
      "slug": "turtles",
      "url": "/topics/turtles/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "“I wish we could save all the endangered animals in the world!” So begins this creative book by Frances Barry. Bold, simple sentences with compelling action verbs (rhinos wallowing, penguins skidding, turtles…",
    "image": "https://vegbooks.org/media/2010/05/9780763645014.jpg"
  },
  "previous": {
    "title": "Farmer Duck",
    "url": "/reviews/farmer-duck/"
  },
  "next": {
    "title": "The Chicken Gave It to Me",
    "url": "/reviews/the-chicken-gave-it-to-me/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/9780763645014.jpg"}><img src={"/media/2010/05/9780763645014.jpg"} alt={"Let’s Save the Animals"} width={214} height={194} /></a>
      </figure>
      <p>{"“I wish we could save all the endangered animals in the world!” So begins this creative book by "}<a href={"http://www.francesbarry.com/"}>{"Frances Barry"}</a>{". Bold, simple sentences with compelling action verbs (rhinos wallowing, penguins skidding, turtles scuttling) describe 10 endangered animals the author would save. Additional sentences in smaller, unobtrusive text highlight a bit about why each animal is endangered. (These sentences could be skipped, if desired, for younger audiences.) Textures, colors and patterns in the collage illustrations help breathe life into the story, and the flaps cleverly reveal two views of each animal in her habitat."}</p>
      <p>{"The ending of the book turns more somber, using stark black and white (and simple silhouettes of the animals) to emphasize: “Let’s save them all before they are…gone forever.” The book then offers a few simple actions young people can take to help animals, such as “Don’t litter” or “Let animals sleep, feed, and play on their own.” A great title for nurturing respect for animals and cultivating positive action in children."}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
