import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3255",
  "slug": "zen-ghosts",
  "url": "/reviews/zen-ghosts/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/14/zen-ghosts/",
  "title": "Zen Ghosts",
  "publishedAt": "2010-10-14",
  "publishedLabel": "October 14th, 2010",
  "excerpt": "This is a strange and mysterious Zen ghost story within a ghost story that is perfect for Halloween. Jon J. Muth’s third book about Stillwater the Zen panda bear and his friends Addy, Michael, and Karl continues to…",
  "image": {
    "src": "/media/2010/10/zen-ghosts-cover.jpg",
    "alt": "Zen Ghosts",
    "width": 210,
    "height": 220
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "This is a strange and mysterious Zen ghost story within a ghost story that is perfect for Halloween. Jon J. Muth’s third book about Stillwater the Zen panda bear and his friends Addy, Michael, and Karl continues to…",
    "image": "https://vegbooks.org/media/2010/10/zen-ghosts-cover.jpg"
  },
  "previous": {
    "title": "Benji Bean Sprout Doesn’t Eat Meat",
    "url": "/reviews/benji-beansprout/"
  },
  "next": {
    "title": "Keeping Water Clean",
    "url": "/reviews/keeping-water-clean/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/zen-ghosts-cover.jpg"}><img src={"/media/2010/10/zen-ghosts-cover.jpg"} alt={"Zen Ghosts"} width={210} height={220} /></a>
      </figure>
      <p>{"This is a strange and mysterious Zen ghost story within a ghost story that is perfect for Halloween. Jon J. Muth’s third book about "}<a href={"/reviews/zen-shorts/"}>{"Stillwater the Zen panda bear"}</a>{" and his friends Addy, Michael, and Karl continues to raise questions to help children think. Muth, through Stillwater, delivers an old Chinese koan, or question, about Senjo and her separated soul."}</p>
      <p>{"“"}<a href={"http://en.wikipedia.org/wiki/K%C5%8Dan"} target="_blank" rel="noopener noreferrer">{"Koans"}</a>{" are basically questions you"}<strong>{"have to answer for yourself. They appeal directly to the intuitive part of human consciousness, not the intellect,” Muth explains in the author’s note at the end. Often riddle-like, there is not necessarily a right and wrong answer but more that the audience/student has responses that demonstrate understanding. This particular koan, although ancient with different versions, has applications for the child and adult in today’s society. A split in soul or a divide in ourselves is not merely limited to a ghost story begun over 1000 years ago."}</strong></p>
      <p>{"The story, of course, has the preparation and build-up to Halloween as it builds up to the Senjo koan. The children select costumes, trick-or-treat for candy, and finally meet Stillwater as a ghost, who brings them to a panda storyteller who looks exactly like Stillwater. There are several paradoxical references that definitely struck me as clever and creepy at the same time. The storyteller begins telling the story in drawing and Muth’s illustrations transition to a simple black and white Chinese brush painting. The color illustrations throughout the other parts of the book are stunningly detailed watercolors that compliment the complex story. My favorite illustration is a two page spread of Stillwater, Addy, Michael, and Karl meditating under the Halloween moon."}</p>
      <p>{"Children and adults will find the illustrations appealing and the mystery riveting. The koan, itself, leaves a lot unanswered and may leave some folks frustrated. The koan as well as the encompassing story require some contemplation which is a novel experience for a society that is constantly on the move, seeking quick answers and instant gratification."}</p>
      <p>{"Initially I wasn’t as impressed with this book as some of Muth’s previous books but it has definitely grown on me each time I consider the complexity of the message and story. The illustrations are impeccable as usual. My preschooler enjoyed seeing Stillwater again and sat attentively through the whole story."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
