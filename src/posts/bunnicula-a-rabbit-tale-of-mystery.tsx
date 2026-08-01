import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10177",
  "slug": "bunnicula-a-rabbit-tale-of-mystery",
  "url": "/reviews/bunnicula-a-rabbit-tale-of-mystery/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/10/16/bunnicula-a-rabbit-tale-of-mystery/",
  "title": "Bunnicula: A Rabbit Tale of Mystery",
  "publishedAt": "2015-10-16",
  "publishedLabel": "October 16th, 2015",
  "excerpt": "The Bunnicula series were my wife’s favorite childhood books. She’s very excited to finally have a child old enough to share this series of books with her. It tells the story of the Monroe family adopting a very…",
  "image": {
    "src": "/media/2015/10/bunnicula-cover.jpg",
    "alt": "Bunnicula_cover",
    "width": 210,
    "height": 312
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
      "name": "Chapter Books",
      "slug": "chapter-books",
      "url": "/topics/chapter-books/"
    },
    {
      "name": "Deborah Howe",
      "slug": "deborah-howe",
      "url": "/topics/deborah-howe/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "James Howe",
      "slug": "james-howe",
      "url": "/topics/james-howe/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Vampires",
      "slug": "vampires",
      "url": "/topics/vampires/"
    },
    {
      "name": "Vegetarian Protagonist",
      "slug": "vegetarian-protagonist",
      "url": "/topics/vegetarian-protagonist/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "The Bunnicula series were my wife’s favorite childhood books. She’s very excited to finally have a child old enough to share this series of books with her. It tells the story of the Monroe family adopting a very…",
    "image": "https://vegbooks.org/media/2015/10/bunnicula-cover.jpg"
  },
  "previous": {
    "title": "Dirty Rats?",
    "url": "/reviews/dirty-rats/"
  },
  "next": {
    "title": "Human Body Theater",
    "url": "/reviews/human-body-theater/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/10/bunnicula-cover.jpg"} alt={"Bunnicula_cover"} width={210} height={312} />
      </figure>
      <p>{"The Bunnicula series were my wife’s favorite childhood books. She’s very excited to finally have a child old enough to share this series of books with her. It tells the story of the Monroe family adopting a very strange bunny named Bunnicula."}</p>
      <p>{"Good natured but slow-witted Harold the Dog (the narrator) and snobby and well-read Chester the Cat, a very humorous duo, notice something strange about Bunnicula who arrives at the same time that odd things start occurring at the Monroe household. The two investigate the strange bunny, who, SPOILER ALERT, turns out to be a vegetarian vampire bunny who sneaks out of his cage at night to drink the juices of all the fruits and vegetables in the kitchen. Harold and Chester remain suspicious of Bunnicula until something happens in which Bunnicula saves the day and shows himself to be a great addition to the Monroe family."}</p>
      <p>{"A fun read for Halloween or any time, with lots of books in the series to keep an excited young reader engaged for a long time."}</p>
      <p>{"Ages 6 to 12."}</p>
    </div>
  );
}
