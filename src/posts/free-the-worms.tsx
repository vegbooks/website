import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1969",
  "slug": "free-the-worms",
  "url": "/reviews/free-the-worms/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/20/free-the-worms/",
  "title": "Free the Worms!",
  "publishedAt": "2010-06-20",
  "publishedLabel": "June 20th, 2010",
  "excerpt": "Katie Kazoo, Switcheroo is a series of books about a young girl. In Free the Worms, she is at odds with the notion that she is a vegetarian and her teacher wants the class to gather worms to feed to the classroom…",
  "image": {
    "src": "/media/2010/05/free-the-worms.jpg",
    "alt": "Free the Worms!",
    "width": 209,
    "height": 314
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Meat-eating",
      "slug": "meat-eating",
      "url": "/topics/meat-eating/"
    },
    {
      "name": "Nancy Krulik",
      "slug": "nancy-krulik",
      "url": "/topics/nancy-krulik/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Vegetarian Characters",
      "slug": "vegetarian-characters",
      "url": "/topics/vegetarian-characters/"
    },
    {
      "name": "Vegetarian Protagonist",
      "slug": "vegetarian-protagonist",
      "url": "/topics/vegetarian-protagonist/"
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
    "description": "Katie Kazoo, Switcheroo is a series of books about a young girl. In Free the Worms, she is at odds with the notion that she is a vegetarian and her teacher wants the class to gather worms to feed to the classroom…",
    "image": "https://vegbooks.org/media/2010/05/free-the-worms.jpg"
  },
  "previous": {
    "title": "The Gift of Nothing",
    "url": "/reviews/the-gift-of-nothing/"
  },
  "next": {
    "title": "A Chimpanzee Tale",
    "url": "/reviews/a-chimpanzee-tale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/05/free-the-worms.jpg"} alt={"Free the Worms!"} width={209} height={314} />
      </figure>
      <p><a href={"http://www.katiekazoo.com/books.html"} target="_blank" rel="noopener noreferrer">{"Katie Kazoo, Switcheroo"}</a>{" is a series of books about a young girl. In "}<em>{"Free the Worms"}</em>{", she is at odds with the notion that she is a vegetarian and her teacher wants the class to gather worms to feed to the classroom snake."}</p>
      <p>{"While gathering worms with the other students, she learns that they will become food for the snake. She sets hers free and tells the other kids to do the same. She is uncomfortable being responsible for the death of the worm, and at the notion that any will be fed to the snake."}</p>
      <p>{"After the children return to school, a magic wind comes along, allowing Katie the chance to see what it is like to be the snake. When the magic wind turns her back into herself, she comes to terms with the idea of feeding the worms to the snake."}</p>
      <p>{"What she learned is that humans have "}<a href={"http://www.hsus.org/farm/news/ournews/greger_dvds_nutrition_06209.html"} target="_blank" rel="noopener noreferrer">{"dietary choices"}</a>{", but that other animals in nature are not created the same way."}</p>
      <p>{"This book is helpful in teaching kids about why they may be vegetarian and yet "}<a href={"http://kidsplanet.org/tt/index.html"} target="_blank" rel="noopener noreferrer">{"other animals are not"}</a>{". It is refreshing to read that Katie is a vegetarian and not afraid to let her teacher and class know about her beliefs."}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
