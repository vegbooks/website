import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5461",
  "slug": "me-jane",
  "url": "/reviews/me-jane/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/27/me-jane/",
  "title": "Me … Jane",
  "publishedAt": "2011-06-27",
  "publishedLabel": "June 27th, 2011",
  "excerpt": "Two powerhouses team up to bring young readers a sweet and inspiring autobiography of one girl who made her dream a reality. Vegbooks contributors Jennifer and Jessica (not once, but twice!) have fawned over Patrick…",
  "image": {
    "src": "/media/2011/06/mejanecover.jpg",
    "alt": "Me … Jane",
    "width": 210,
    "height": 193
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
      "name": "Africa",
      "slug": "africa",
      "url": "/topics/africa/"
    },
    {
      "name": "ALSC Notable Childrens Book",
      "slug": "alsc-notable-childrens-book",
      "url": "/topics/alsc-notable-childrens-book/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Caldecott Honor",
      "slug": "caldecott-honor",
      "url": "/topics/caldecott-honor/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Charlotte Zolotow Award",
      "slug": "charlotte-zolotow-award",
      "url": "/topics/charlotte-zolotow-award/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Cybils Award",
      "slug": "cybils-award",
      "url": "/topics/cybils-award/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jane Goodall",
      "slug": "jane-goodall",
      "url": "/topics/jane-goodall/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2011",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2011",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2011/"
    },
    {
      "name": "Patrick McDonnell",
      "slug": "patrick-mcdonnell",
      "url": "/topics/patrick-mcdonnell/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Two powerhouses team up to bring young readers a sweet and inspiring autobiography of one girl who made her dream a reality. Vegbooks contributors Jennifer and Jessica (not once, but twice!) have fawned over Patrick…",
    "image": "https://vegbooks.org/media/2011/06/mejanecover.jpg"
  },
  "previous": {
    "title": "Beautiful Yetta: The Yiddish Chicken",
    "url": "/reviews/beautiful-yetta-the-yiddish-chicken/"
  },
  "next": {
    "title": "Hands: Growing Up to Be an Artist",
    "url": "/reviews/hands-growing-up-to-be-an-artist/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/mejanecover.jpg"}><img src={"/media/2011/06/mejanecover.jpg"} alt={"Me … Jane"} width={210} height={193} /></a>
      </figure>
      <p>{"Two powerhouses team up to bring young readers a sweet and inspiring autobiography of one girl who made her dream a reality. Vegbooks contributors "}<a href={"/reviews/hug-time/"}>{"Jennifer"}</a>{" and Jessica (not "}<a href={"/reviews/wag/"}>{"once"}</a>{", but "}<a href={"/reviews/the-gift-of-nothing/"}>{"twice"}</a>{"!) have fawned over Patrick McDonnell’s work, but now they and you too can appreciate his artistic style and prose in a different light. None of the mutts that made McDonnell famous can be found here, but several of the protagonist’s own drawings and puzzles make a debut."}</p>
      <p>{"In "}<em><a href={"http://www.janegoodall.org/media/news/me%E2%80%A6jane-bookstores-near-you"}>{"Me…Jane"}</a></em>{", McDonnell records the curious making of a young naturalist: bonding with a stuffed animal friend, watching birds make a nest and spiders spin a web, absorbing information about flora and fauna like a sponge, climbing trees, learning how eggs are made firsthand, and dreaming of a life helping animals in Africa."}</p>
      <p>{"The cartoon-illustrated and simply written text leads up to a fully colored photograph of famed primatologist, animal advocate and UN Messenger of Peace, Dr. Jane Goodall, reaching out her hand to meet that of a baby chimpanzee, a tell tale image that her dream came true. "}<em>{"Me…Jane"}</em>{" is an touching biography because every reader can identify with Jane’s nature explorations of her youth and come to believe that they too can realize their ambitions."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
