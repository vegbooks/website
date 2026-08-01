import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5598",
  "slug": "mary-had-a-little-lamp",
  "url": "/reviews/mary-had-a-little-lamp/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/17/mary-had-a-little-lamp/",
  "title": "Mary Had a Little Lamp",
  "publishedAt": "2011-07-17",
  "publishedLabel": "July 17th, 2011",
  "excerpt": "Cruising our local library shelves, my eyes lit upon this ingeniously light-hearted variation of the nursery rhyme Mary had a Little Lamb. Of course my daughter and I took a shine to author Jack Lechner’s descriptive…",
  "image": {
    "src": "/media/2011/07/mary-had-lamp-rgb.jpg",
    "alt": "Mary Had a Little Lamp",
    "width": 210,
    "height": 261
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
      "name": "Bob Staake",
      "slug": "bob-staake",
      "url": "/topics/bob-staake/"
    },
    {
      "name": "Child Development",
      "slug": "child-development",
      "url": "/topics/child-development/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jack Lechner",
      "slug": "jack-lechner",
      "url": "/topics/jack-lechner/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Cruising our local library shelves, my eyes lit upon this ingeniously light-hearted variation of the nursery rhyme Mary had a Little Lamb. Of course my daughter and I took a shine to author Jack Lechner’s descriptive…",
    "image": "https://vegbooks.org/media/2011/07/mary-had-lamp-rgb.jpg"
  },
  "previous": {
    "title": "Pale Male: Citizen Hawk of New York City",
    "url": "/reviews/pale-male-citizen-hawk-of-new-york-city/"
  },
  "next": {
    "title": "The Dancing Pig",
    "url": "/reviews/the-dancing-pig/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/mary-had-lamp-rgb.jpg"}><img src={"/media/2011/07/mary-had-lamp-rgb.jpg"} alt={"Mary Had a Little Lamp"} width={210} height={261} /></a>
      </figure>
      <p>{"Cruising our local library shelves, my eyes lit upon this ingeniously light-hearted variation of the nursery rhyme "}<a href={"http://en.wikipedia.org/wiki/Mary_Had_a_Little_Lamb"} target="_blank" rel="noopener noreferrer">{"Mary had a Little Lamb"}</a>{". Of course my daughter and I took a shine to author Jack Lechner’s descriptive rhymes right off the bat."}</p>
      <p>{"“Mary had a little lamp-"}<br />{" The bendy, gooseneck kind."}<br />{" And everywhere that Mary went"}<br />{" She dragged the lamp behind.”"}</p>
      <p>{"After describing the lamp, Lechner switches to Mary’s various daily activities with her lamp (including a trip to school, of course), and the off-the-wall compainionship that follows. I love how Mary remains steady in her attachment even though she has to put up with kids calling her crazy, her parents worrying, and seeing specialists about the lamp love. Mary’s obsession/love of her pet lamp does not waver til summer camp one year when she is ready to leave it behind. Lechner helps us laughingly address the strange and funny phases children can go through with their attachments and the subtle message for parents seems to be that kids will move on when they’re ready."}</p>
      <p>{"Illustrator Bob Staake spotlights the characters with bright colors and geometric shapes for eye-catching graphics."}</p>
      <p>{"I recommended anyone with a kid and a light source read this brilliant story with a shade of silliness."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
