import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9237",
  "slug": "rock-a-bye-room",
  "url": "/reviews/rock-a-bye-room/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/25/rock-a-bye-room/",
  "title": "Rock-a-Bye Room",
  "publishedAt": "2013-11-25",
  "publishedLabel": "November 25th, 2013",
  "excerpt": "What a sweet bedtime book! With a nod to the lullaby “Rock-a-Bye Baby” and Margaret Wise Brown’s classic bedtime story Good Night, Moon, Susan Meyer’s gentle rhymes and Amy Bates’ darling illustrations are sure to…",
  "image": {
    "src": "/media/2013/11/9781419705373.jpg",
    "alt": "9781419705373",
    "width": 210,
    "height": 210
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
      "name": "Amy Bates",
      "slug": "amy-bates",
      "url": "/topics/amy-bates/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Susan Meyer",
      "slug": "susan-meyer",
      "url": "/topics/susan-meyer/"
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
    "description": "What a sweet bedtime book! With a nod to the lullaby “Rock-a-Bye Baby” and Margaret Wise Brown’s classic bedtime story Good Night, Moon, Susan Meyer’s gentle rhymes and Amy Bates’ darling illustrations are sure to…",
    "image": "https://vegbooks.org/media/2013/11/9781419705373.jpg"
  },
  "previous": {
    "title": "Animals Matter: A Biologist Explains Why We Should Treat Animals with Compassion and Respect",
    "url": "/reviews/animals-matter/"
  },
  "next": {
    "title": "Farmer Will Allen and the Growing Table",
    "url": "/reviews/will/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/9781419705373.jpg"}><img src={"/media/2013/11/9781419705373.jpg"} alt={"9781419705373"} width={210} height={210} /></a>
      </figure>
      <p>{"What a sweet bedtime book! With a nod to the lullaby “Rock-a-Bye Baby” and Margaret Wise Brown’s classic bedtime story "}<em>{"Good Night, Moon"}</em>{", Susan Meyer’s gentle rhymes and Amy Bates’ darling illustrations are sure to soothe your kiddo before bed."}</p>
      <p>{"This safe, quiet, gentle book (which I received as a review copy from "}<a href={"http://www.abramsbooks.com/childrens.html"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{") is perfect for unwinding. I love the illustrations in particular. The mother dances with her young daughter and feeds the rocking horse with treats she’s gathered in the folds of her skirt. Throughout, she nurtures her child’s imagination, taking the time to make sure all the toys are snug in their places before bed and saying goodnight to the pictures on the wall."}</p>
      <p>{"The final scene blends the real with the imaginary too, depicting the mother playing guitar to her daughter as she snuggles in a cradle hung from a tree. The moon and stars hang down on strings."}</p>
      <p>{"Ages 2 to 5."}</p>
    </div>
  );
}
