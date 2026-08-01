import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3098",
  "slug": "i-see-a-kookaburra",
  "url": "/reviews/i-see-a-kookaburra/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/15/i-see-a-kookaburra/",
  "title": "I See a Kookaburra!",
  "publishedAt": "2010-09-15",
  "publishedLabel": "September 15th, 2010",
  "excerpt": "Steve Jenkins and Robin Page create a clever and fun scavenger-hunt style book. Six different habitats of the world are illustrated in paper collage with parts of eight indigenous animals for each habitat peeking…",
  "image": {
    "src": "/media/2010/10/0618507647-lres.jpg",
    "alt": "I See a Kookaburra!",
    "width": 210,
    "height": 209
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Habitats",
      "slug": "habitats",
      "url": "/topics/habitats/"
    },
    {
      "name": "Huyen MacMicahel",
      "slug": "huyen-macmicahel",
      "url": "/topics/huyen-macmicahel/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Robin Page",
      "slug": "robin-page",
      "url": "/topics/robin-page/"
    },
    {
      "name": "Steve Jenkins",
      "slug": "steve-jenkins",
      "url": "/topics/steve-jenkins/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Steve Jenkins and Robin Page create a clever and fun scavenger-hunt style book. Six different habitats of the world are illustrated in paper collage with parts of eight indigenous animals for each habitat peeking…",
    "image": "https://vegbooks.org/media/2010/10/0618507647-lres.jpg"
  },
  "previous": {
    "title": "The Trouble with Dogs, Said Dad",
    "url": "/reviews/the-trouble-with-dogs-said-dad/"
  },
  "next": {
    "title": "Hunwick’s Egg",
    "url": "/reviews/hunwicks-egg/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/0618507647-lres.jpg"}><img src={"/media/2010/10/0618507647-lres.jpg"} alt={"I See a Kookaburra!"} width={210} height={209} /></a>
      </figure>
      <p>{"Steve Jenkins and Robin Page create a clever and fun scavenger-hunt style book. Six different habitats of the world are illustrated in paper collage with parts of eight indigenous animals for each habitat peeking through foliage and rock. Following the pages of each habitat are pages where the hidden animals are revealed. The animals are in the exact same spot but all foliage and the surrounding environment are removed so the image of the animal stands on the white of the page. A descriptive sentence is included for each habitat and on the following page, each animal has a descriptive sentence. At the end of the book, five pages are devoted to additional zoological details about the animals as well as a map indicating the six areas where the habitats are located."}</p>
      <p>{"The paper collage illustrations are as detailed and beautiful as expected and the structure of the book is well thought out. The habitat pages begin in a sentence like, “In the desert I see…” and the revealed animal pages finish with “a sharp-eyed kit fox leaving its burrow” and “a javelina sniffing out tender roots” and the remaining descriptions of the eight animals. Children will enjoy the “I spy” style game of finding the hidden animals, while learning a variety of new faces and facts. Some of the lesser known creatures include a trapdoor spider, a peacock worm, a secretary bird, a "}<a href={"http://en.wikipedia.org/wiki/Cassowary"} target="_blank" rel="noopener noreferrer">{"cassowary"}</a>{", and a northern pike."}</p>
      <p>{"Ages 6-10."}</p>
    </div>
  );
}
