import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10940",
  "slug": "listen",
  "url": "/reviews/listen/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/01/20/listen/",
  "title": "Listen",
  "publishedAt": "2020-01-20",
  "publishedLabel": "January 20th, 2020",
  "excerpt": "LISTEN by Holly M. McGhee is a gentle, sweet book that leads readers towards empathy by reminding us all to slowly take in our surroundings and revel in our connectedness. Aimed at ages 4-7, it will work for slightly…",
  "image": {
    "src": "/media/2020/01/listen-mc-ghee.jpg",
    "alt": "Listen",
    "width": 268,
    "height": 300
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
      "name": "Empathy",
      "slug": "empathy",
      "url": "/topics/empathy/"
    },
    {
      "name": "Holly McGhee",
      "slug": "holly-mcghee",
      "url": "/topics/holly-mcghee/"
    },
    {
      "name": "Listen",
      "slug": "listen",
      "url": "/topics/listen/"
    },
    {
      "name": "mindfulness",
      "slug": "mindfulness",
      "url": "/topics/mindfulness/"
    },
    {
      "name": "Pascal Lemaitre",
      "slug": "pascal-lemaitre",
      "url": "/topics/pascal-lemaitre/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "pre-K readers",
      "slug": "pre-k-readers",
      "url": "/topics/pre-k-readers/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "LISTEN by Holly M. McGhee is a gentle, sweet book that leads readers towards empathy by reminding us all to slowly take in our surroundings and revel in our connectedness. Aimed at ages 4-7, it will work for slightly…",
    "image": "https://vegbooks.org/media/2020/01/listen-mc-ghee.jpg"
  },
  "previous": {
    "title": "If Elephants Disappeared",
    "url": "/reviews/if-elephants-disappeared/"
  },
  "next": {
    "title": "The Truth About Hawks",
    "url": "/reviews/the-truth-about-hawks/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2020/01/listen-mc-ghee.jpg"}><img src={"/media/2020/01/listen-mc-ghee.jpg"} alt={"Listen"} width={268} height={300} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781250318121"} target="_blank" rel="noopener noreferrer">{"LISTEN by Holly M. McGhee"}</a>{" is a gentle, sweet book that leads readers towards empathy by reminding us all to slowly take in our surroundings and revel in our connectedness. Aimed at ages 4-7, it will work for slightly younger and much older children and adults as a tool for meditation and calm."}</p>
      <p>{"The repetitive structure and relaxed pace serve the picture book’s purpose in encouraging living in the moment and listening to our hearts – and observing with all our senses. The lovely illustrations by Pascal Lemaitre are at once detailed and simple; they suit the story perfectly."}</p>
      <p>{"Messages centered on connecting to the world around us, allowing nature to inspire and comfort, and hoping that a new generation will learn empathy for others and themselves intertwine throughout "}<a href={"https://www.indiebound.org/book/9781250318121"} target="_blank" rel="noopener noreferrer">{"LISTEN"}</a>{". This is a wonderful read aloud (and read alone) book for the open-hearted of all ages."}</p>
    </div>
  );
}
