import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6853",
  "slug": "billie-the-unicorn",
  "url": "/reviews/billie-the-unicorn/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/25/billie-the-unicorn/",
  "title": "Billie the Unicorn",
  "publishedAt": "2012-01-25",
  "publishedLabel": "January 25th, 2012",
  "excerpt": "Billie the Unicorn by Brianne Brouhard is a vividly illustrated story set in what we learn is a world where unicorns grow plants and flowers. Billie is a little blue unicorn who seems to continually long for…",
  "image": {
    "src": "/media/2012/01/9781597020244-lg.jpg",
    "alt": "Billie the Unicorn",
    "width": 210,
    "height": 260
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Brianne Brouhard",
      "slug": "brianne-brouhard",
      "url": "/topics/brianne-brouhard/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Unicorn",
      "slug": "unicorn",
      "url": "/topics/unicorn/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "Billie the Unicorn by Brianne Brouhard is a vividly illustrated story set in what we learn is a world where unicorns grow plants and flowers. Billie is a little blue unicorn who seems to continually long for…",
    "image": "https://vegbooks.org/media/2012/01/9781597020244-lg.jpg"
  },
  "previous": {
    "title": "From Trash to Treasure",
    "url": "/reviews/from-trash-to-treasure/"
  },
  "next": {
    "title": "The Whales’ Song",
    "url": "/reviews/the-whales-song/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/9781597020244-lg.jpg"}><img src={"/media/2012/01/9781597020244-lg.jpg"} alt={"Billie the Unicorn"} width={210} height={260} /></a>
      </figure>
      <p><em><a href={"http://www.billietheunicorn.com/fall.html"} target="_blank" rel="noopener noreferrer">{"Billie the Unicorn"}</a></em>{" by Brianne Brouhard is a vividly illustrated story set in what we learn is a world where unicorns grow plants and flowers. Billie is a little blue unicorn who seems to continually long for different pastures. She tends a cornfield but ventures into the forest to learn from her cousins who show her their skills at growing sunflowers and strawberries. She wants to grow flowers like them but instead grows corn in the forest. With encouragement, she grows a blue cornflower. Billie grows restless again upon hearing of a queen’s beautiful garden and ventures (without her cousins) off in search of it, hoping to learn more about growing flowers."}</p>
      <p>{"At this point the story takes a rather scary turn as the queen’s garden is tended by a miserable imprisoned unicorn who grows metal flowers at the queen’s command. Before Billie can escape, she is the new prisoner of the garden and is commanded to continue the old unicorn’s work. Her friends come to rescue her but first grow real flowers in the garden before making their escape."}</p>
      <p>{"I think that the idea of making any animal, even an imaginary one, a prisoner is a topic of interest to veg families. It is easy for a child to see how different the lives of the free unicorns and the imprisoned one differ. Both have the same powers but when forced to “perform” they are unhappy and fearful. The book’s message is “be yourself” and the illustrations are engaging though I do wonder where the previous unicorn in the queen’s garden ended up as Billie and her cousins live happily ever after."}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
