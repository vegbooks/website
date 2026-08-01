import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9",
  "slug": "the-cinder-eyed-cats",
  "url": "/reviews/the-cinder-eyed-cats/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/25/the-cinder-eyed-cats/",
  "title": "The Cinder-Eyed Cats",
  "publishedAt": "2009-10-25",
  "publishedLabel": "October 25th, 2009",
  "excerpt": "This beautifully illustrated book by Eric Rohmann portrays the journey of a boy who traverses the sky to dance in the night with wild cats and a vast array of sea animals. Kids will enjoy looking for signs of the…",
  "image": {
    "src": "/media/2009/11/cinder1.jpg",
    "alt": "Cinder-Eyed Cats",
    "width": 222,
    "height": 226
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
      "name": "Adventure",
      "slug": "adventure",
      "url": "/topics/adventure/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eric Rohmann",
      "slug": "eric-rohmann",
      "url": "/topics/eric-rohmann/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "This beautifully illustrated book by Eric Rohmann portrays the journey of a boy who traverses the sky to dance in the night with wild cats and a vast array of sea animals. Kids will enjoy looking for signs of the…",
    "image": "https://vegbooks.org/media/2009/11/cinder1.jpg"
  },
  "next": {
    "title": "Fancy Nancy and the Posh Puppy",
    "url": "/reviews/fancy-nancy-and-the-posh-puppy/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/cinder1.jpg"} alt={"Cinder-Eyed Cats"} width={222} height={226} />
      </figure>
      <p>{"This beautifully illustrated book by "}<a href={"http://www.childrensliteraturenetwork.org/aifolder/aipages/ai_r/rohmann.html"} target="_blank" rel="noopener noreferrer">{"Eric Rohmann"}</a>{" portrays the journey of a boy who traverses the sky to dance in the night with wild cats and a vast array of sea animals. Kids will enjoy looking for signs of the cats before they ever appear on the pages of the book: as the boy flies through the clouds in his boat, for example, he passes hills shaped like sleeping cats. And that Rohmann leaves large expanses of his book without words is fun for kids and parents alike."}</p>
      <p>{"Most importantly, this book emphasizes the connections between people and 0ther animals without resorting to anthropomorphism. Rohmann’s animals do not wear clothes or talk; the cats investigate the boy on the beach, leap like playful kittens, and eventually curl up for a good cat nap."}</p>
      <p>{"Ideal for ages 3-7. For more reviews, "}<a href={"http://www.commonsensemedia.org/book-reviews/Cinder-Eyed-Cats.html"} target="_blank" rel="noopener noreferrer">{"click here"}</a>{"."}</p>
    </div>
  );
}
