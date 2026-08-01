import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11058",
  "slug": "seaside-stroll",
  "url": "/reviews/seaside-stroll/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/03/16/seaside-stroll/",
  "title": "Seaside Stroll",
  "publishedAt": "2021-03-16",
  "publishedLabel": "March 16th, 2021",
  "excerpt": "SEASIDE STROLL by Charles Trevino will convince families with even the most ardent aversion to cold to venture out for a beach walk no matter the weather. Written as a narrative collection of S-words, this beautiful…",
  "image": {
    "src": "/media/2021/03/seaside-stroll.jpg",
    "alt": "Seaside Stroll",
    "width": 280,
    "height": 217
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
    {
      "name": "Charles Trevino",
      "slug": "charles-trevino",
      "url": "/topics/charles-trevino/"
    },
    {
      "name": "Charlesbridge",
      "slug": "charlesbridge",
      "url": "/topics/charlesbridge/"
    },
    {
      "name": "Maribel Lechuga",
      "slug": "maribel-lechuga",
      "url": "/topics/maribel-lechuga/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "preschool readers",
      "slug": "preschool-readers",
      "url": "/topics/preschool-readers/"
    },
    {
      "name": "Seaside Stroll",
      "slug": "seaside-stroll",
      "url": "/topics/seaside-stroll/"
    },
    {
      "name": "winter walk",
      "slug": "winter-walk",
      "url": "/topics/winter-walk/"
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
    "description": "SEASIDE STROLL by Charles Trevino will convince families with even the most ardent aversion to cold to venture out for a beach walk no matter the weather. Written as a narrative collection of S-words, this beautiful…",
    "image": "https://vegbooks.org/media/2021/03/seaside-stroll.jpg"
  },
  "previous": {
    "title": "You Are Enough: A Book About Inclusion",
    "url": "/reviews/you-are-enough-a-book-about-inclusion/"
  },
  "next": {
    "title": "Oh So Kind!",
    "url": "/reviews/oh-so-kind/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2021/03/seaside-stroll.jpg"}><img src={"/media/2021/03/seaside-stroll.jpg"} alt={"Seaside Stroll"} width={280} height={217} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781580899321"} target="_blank" rel="noopener noreferrer"><strong>{"SEASIDE STROLL"}</strong></a>{" by Charles Trevino will convince families with even the most ardent aversion to cold to venture out for a beach walk no matter the weather. Written as a narrative collection of S-words, this beautiful picture book follows a rambunctious little girl as she explores the snowy, sandy beach with her mother. Seagulls, stones, shells, seaweed, and more are all a part of the adventures as our protagonist delights in her surroundings. Children can find barnacles and crabs of different types as well as sea starts, anemones, and a variety of seaweed in the pictures."}</p>
      <p>{"The words are sensory and descriptive, and Trevino’s skillful ability to lead readers through the story without “telling” it is impressive. One particularly effective part of the story involving a favorite doll: “Steady step, stolid step, shaky step…stumble. Swish…swirl…surge…surprised! Slip…splash…sink…soaked!” Not only is this an excellent book to have fun with onomatopoeia, but for pre-readers and early readers, the words will be fun to repeat aloud and read on their own. For caregivers who want to go the extra mile, pointing out nouns, adjectives, verbs, and interjections will be easy and fun. The author also discussing his inspiration and elaborates on the use of each type of word and the format in the end pages."}</p>
      <p>{"The "}<a href={"https://www.indiebound.org/book/9781580899321"} target="_blank" rel="noopener noreferrer">{"SEASIDE STROLL"}</a>{" illustrations by Maribel Lechuga are powerful in their storytelling as well. The waves splash against the shore and the wind blows hair and lifts seagull wings. The expressions of wonder and joy convey just as much personality as the shock and sniffling sadness the little girl shows. The joyful activity on the beach becomes contemplative stillness from one page to another using colors, textures, and details galore. There are myriad details for children to discover and notice throughout."}</p>
      <p>{"Highly recommended!"}</p>
    </div>
  );
}
