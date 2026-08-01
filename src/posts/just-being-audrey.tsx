import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9889",
  "slug": "just-being-audrey",
  "url": "/reviews/just-being-audrey/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/10/22/just-being-audrey/",
  "title": "Just Being Audrey",
  "publishedAt": "2014-10-22",
  "publishedLabel": "October 22nd, 2014",
  "excerpt": "With the title of her book Just Being Audrey,Margaret Cardillo captures the down-to-earth character of the world renowned actress about which she writes. Perhaps this line captures the essence of Cardillo’s picture…",
  "image": {
    "src": "/media/2014/10/audrey-hc-c.jpg",
    "alt": "Audrey HC c",
    "width": 480,
    "height": 697
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
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Bullying",
      "slug": "bullying",
      "url": "/topics/bullying/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Margaret Cardillo",
      "slug": "margaret-cardillo",
      "url": "/topics/margaret-cardillo/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "With the title of her book Just Being Audrey,Margaret Cardillo captures the down-to-earth character of the world renowned actress about which she writes. Perhaps this line captures the essence of Cardillo’s picture…",
    "image": "https://vegbooks.org/media/2014/10/audrey-hc-c.jpg"
  },
  "previous": {
    "title": "Mini Myths: Play Nice, Hercules & Be Patient, Pandora",
    "url": "/reviews/mini-myths-play-nice-hercules-be-patient-pandora/"
  },
  "next": {
    "title": "Best Books for 5-Year-Old Vegan & Vegetarian Kids",
    "url": "/reviews/best-books-for-5-year-old-vegan-vegetarian-kids/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"With the title of her book "}<em>{"Just Being Audrey,"}</em>{"Margaret Cardillo captures the down-to-earth character of the world renowned actress about which she writes. Perhaps this line captures the essence of Cardillo’s picture book biography: “Audrey’s life was not always a fairy tale, but she chose hope over sorrow.” As a child, Audrey was taller than the rest and her imagination was more vivid, yet her spirit endured. At the rise of World War II, she lived a life far less luxurious than her mother, a baroness, yet she did not give up hope. She had dreams, an intuitive sense of knowing her limitations and ability to change."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2014/10/audrey-hc-c.jpg"} alt={"Audrey HC c"} width={480} height={697} />
      </figure>
      <p>{"In this current culture of bulling, "}<em>{"Just Being Audrey,"}</em>{"sends an important message to just be yourself. In this life, the ability to change is amazing. As the author so aptly phrases, “And the very things that made her appear awkward as a child? They were precisely the things that made her beautiful as an adult.”"}</p>
      <p>{"This book teaches many lessons in one with a historical context. The illustrations by Julia Denos, add a charm to this book akin to Audrey herself. As a lover of Audrey, I am giving this book to my niece to her fourth birthday, so she can learn about not only an iconic actress but an altruistic soul."}</p>
      <p>{"The timeline and bibliography at the end of the book are an added bonus to this delightful tribute to Audrey’s life."}</p>
    </div>
  );
}
