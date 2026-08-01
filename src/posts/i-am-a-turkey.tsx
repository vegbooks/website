import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4021",
  "slug": "i-am-a-turkey",
  "url": "/reviews/i-am-a-turkey/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/21/i-am-a-turkey/",
  "title": "I’m a Turkey",
  "publishedAt": "2011-01-21",
  "publishedLabel": "January 21st, 2011",
  "excerpt": "This lighthearted picture book gives kids a realistic view of what the lives of wild turkeys are like. If you’ve ever been to a farm or farm sanctuary, you might be surprised to learn that wild turkeys — who have not…",
  "image": {
    "src": "/media/2011/01/ma-turkey-cover-small.jpg",
    "alt": "I’m a Turkey",
    "width": 210,
    "height": 163
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
      "name": "Animal Emotion",
      "slug": "animal-emotion",
      "url": "/topics/animal-emotion/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Communication",
      "slug": "communication",
      "url": "/topics/communication/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jim Arnosky",
      "slug": "jim-arnosky",
      "url": "/topics/jim-arnosky/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "This lighthearted picture book gives kids a realistic view of what the lives of wild turkeys are like. If you’ve ever been to a farm or farm sanctuary, you might be surprised to learn that wild turkeys — who have not…",
    "image": "https://vegbooks.org/media/2011/01/ma-turkey-cover-small.jpg"
  },
  "previous": {
    "title": "Anh’s Anger",
    "url": "/reviews/anhs-anger/"
  },
  "next": {
    "title": "Sleepy Time",
    "url": "/reviews/sleepy-time/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/ma-turkey-cover-small.jpg"}><img src={"/media/2011/01/ma-turkey-cover-small.jpg"} alt={"I’m a Turkey"} width={210} height={163} /></a>
      </figure>
      <p>{"This lighthearted picture book gives kids a realistic view of what the lives of wild turkeys are like. If you’ve ever been to a farm or farm sanctuary, you might be surprised to learn that wild turkeys — who have not been fattened up to be someone’s dinner — can fly at 50 miles per hour over treetops."}</p>
      <p>{"This book reminds us that turkeys have families (“I’ve got a turkey dad/ And a turkey mom./ I’ve got a turkey brother/ And sister, too.”); that they communicate, using a variety of sounds instead of words; and that they have emotions, including fear of those who find them “tasty.”"}</p>
      <p>{"This would make a great read around Thanksgiving, but it’s really perfect anytime. Kids who enjoy the book will delight that "}<a href={"http://www2.scholastic.com/browse/contributor.jsp?id=1247"} target="_blank" rel="noopener noreferrer">{"Jim Arnosky performs a spoken word version of the text on the Scholastic website"}</a>{"."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
