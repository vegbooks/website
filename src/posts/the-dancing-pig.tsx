import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5601",
  "slug": "the-dancing-pig",
  "url": "/reviews/the-dancing-pig/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/18/the-dancing-pig/",
  "title": "The Dancing Pig",
  "publishedAt": "2011-07-18",
  "publishedLabel": "July 18th, 2011",
  "excerpt": "This colorful picture book by Judy Sierra and Jesse Sweetwater brings to life a folktale from Bali, in which a dancing pig saves twin girls from an ogress. Using bold illustrations and expressive language, The…",
  "image": {
    "src": "/media/2011/07/the-dancing-pig.jpg",
    "alt": "The Dancing Pig",
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
      "name": "Bali",
      "slug": "bali",
      "url": "/topics/bali/"
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
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Jesse Sweetwater",
      "slug": "jesse-sweetwater",
      "url": "/topics/jesse-sweetwater/"
    },
    {
      "name": "Judy Sierra",
      "slug": "judy-sierra",
      "url": "/topics/judy-sierra/"
    },
    {
      "name": "Mice",
      "slug": "mice",
      "url": "/topics/mice/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "This colorful picture book by Judy Sierra and Jesse Sweetwater brings to life a folktale from Bali, in which a dancing pig saves twin girls from an ogress. Using bold illustrations and expressive language, The…",
    "image": "https://vegbooks.org/media/2011/07/the-dancing-pig.jpg"
  },
  "previous": {
    "title": "Mary Had a Little Lamp",
    "url": "/reviews/mary-had-a-little-lamp/"
  },
  "next": {
    "title": "Buffalo Music",
    "url": "/reviews/buffalo-music/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/the-dancing-pig.jpg"}><img src={"/media/2011/07/the-dancing-pig.jpg"} alt={"The Dancing Pig"} width={210} height={260} /></a>
      </figure>
      <p>{"This colorful picture book by "}<a href={"http://www.judysierra.net/bio.htm"} target="_blank" rel="noopener noreferrer">{"Judy Sierra"}</a>{" and Jesse Sweetwater brings to life a folktale from Bali, in which a dancing pig saves twin girls from an ogress. Using bold illustrations and expressive language, "}<em>{"The Dancing Pig"}</em>{" recounts the rescue — which involves a bunch of musical frogs and a mouse — and the family’s loving reunion."}</p>
      <p>{"In addition to the visual appeal and the fairytale quality of this book, I appreciate the book’s treatment of animals. We know the twins are kind because they regularly leave a bit of food on the ground for the mouse and they spend time with the family pig, performing dances for her so that she will be a little less lonely. When they are abducted, their mother unquestioningly follows the directions of the pig, in hopes of getting her children back. And in the end, the family’s reunion is portrayed by the mother and two girls gazing adoringly at the pig."}</p>
      <p>{"Parents concerned about the "}<a href={"http://msmagazine.com/blog/blog/2011/05/25/where-are-the-girls-in-childrens-lit/"} target="_blank" rel="noopener noreferrer">{"portrayal of women and girls in children’s books"}</a>{" — and I’m among them — will appreciate that all of the characters are either depicted as female or else their gender is not indicated. (Interestingly, there are few female pigs in children’s literature. "}<a href={"http://www.goodreads.com/book/show/24178.Charlotte_s_Web"} target="_blank" rel="noopener noreferrer">{"Wilbur"}</a>{", "}<a href={"/reviews/a-garden-for-pig/"} target="_blank" rel="noopener noreferrer">{"Pig"}</a>{", "}<a href={"/reviews/perfect-the-pig/"}>{"Perfect"}</a>{", and "}<a href={"/reviews/granny-gomez-and-jigsaw/"}>{"Jigsaw"}</a>{" are all male. Serena in "}<em><a href={"/reviews/no-place-for-a-pig/"}>{"No Place for Pig"}</a></em>{" is the only other female who comes to mind.)"}</p>
      <p>{"Ages 4-7."}</p>
    </div>
  );
}
