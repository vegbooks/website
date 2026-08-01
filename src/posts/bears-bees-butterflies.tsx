import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5983",
  "slug": "bears-bees-butterflies",
  "url": "/reviews/bears-bees-butterflies/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/04/bears-bees-butterflies/",
  "title": "Bears, Bees & Butterflies",
  "publishedAt": "2011-09-04",
  "publishedLabel": "September 4th, 2011",
  "excerpt": "Get ready for Vegbooks’ first CD review! I had the pleasure of meeting the ever so talented Paul Helou at HSUS’s Taking Action for Animals Conference this July, and he graciously provided me a copy of his latest…",
  "image": {
    "src": "/media/2011/08/newbearcd.jpg",
    "alt": "Bears, Bees & Butterflies",
    "width": 210,
    "height": 193
  },
  "categories": [
    {
      "name": "Music",
      "slug": "music",
      "url": "/music/"
    }
  ],
  "tags": [
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Paul Helou",
      "slug": "paul-helou",
      "url": "/topics/paul-helou/"
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
    "description": "Get ready for Vegbooks’ first CD review! I had the pleasure of meeting the ever so talented Paul Helou at HSUS’s Taking Action for Animals Conference this July, and he graciously provided me a copy of his latest…",
    "image": "https://vegbooks.org/media/2011/08/newbearcd.jpg"
  },
  "previous": {
    "title": "The Lucky Lobsters",
    "url": "/reviews/the-lucky-lobsters/"
  },
  "next": {
    "title": "Grin and Bear It",
    "url": "/reviews/grin-and-bear-it/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/newbearcd.jpg"}><img src={"/media/2011/08/newbearcd.jpg"} alt={"Bears, Bees & Butterflies"} width={210} height={193} /></a>
      </figure>
      <p>{"Get ready for Vegbooks’ first CD review! I had the pleasure of meeting the ever so talented Paul Helou at "}<a href={"http://www.humanesociety.org/about/events/tafa/"} target="_blank" rel="noopener noreferrer">{"HSUS’s Taking Action for Animals Conference"}</a>{" this July, and he graciously provided me a copy of his latest album of nature-inspired songs for children: "}<em>{"Bears, Bees & Butterflies."}</em>{" Paul is not only a theatrical improviser and actor, but a gifted musician and songwriter, which certainly shines through in this 20-track production geared towards preschoolers."}</p>
      <p>{"The three-year-old that I care for from time to time really enjoyed listening to Paul’s musical stylings on our car trips around town this week, but I’ll admit that I even started to sing along with Paul. The lyrics and arrangements are so catchy, creative and fun, that you just can’t help it! And each song is quite unique from any other, not only in subject matter, but rhythm and style too. “The Legend of Black Bear Lake” reminds me a sleep-away campfire song, while “Dancing Bumblebee” is the perfect dance tune for preschoolers who want to imagine themselves as these magnificent insects flying around in a garden setting. The entire album is a testament to the beauty of nature, a celebration of our connection to it, and a reminder that we need to take care of it."}</p>
      <p>{"Pick up a copy and enjoy the sound of acoustic guitars, percussion, fiddle, and even a mandolin on "}<em>{"Bears, Bees & Butterflies!"}</em>{" For a preview of the songs, visit "}<a href={"http://www.paulhelou.com/home.html"} target="_blank" rel="noopener noreferrer">{"Paul Helou’s website"}</a>{"."}</p>
      <p>{"Ages 2+"}</p>
    </div>
  );
}
