import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1397",
  "slug": "chimpanzee-rescue",
  "url": "/reviews/chimpanzee-rescue/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/02/chimpanzee-rescue/",
  "title": "Chimpanzee Rescue",
  "publishedAt": "2010-04-02",
  "publishedLabel": "April 2nd, 2010",
  "excerpt": "I love children’s books that even I can learn from and Chimpanzee Rescue by Patricia Bow delivers and then some. Who knew there were four subspecies of chimpanzees, based on their location in Africa (eastern,…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Chimpanzee Rescue",
    "width": 210,
    "height": 278
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Habitat Destruction",
      "slug": "habitat-destruction",
      "url": "/topics/habitat-destruction/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Sanctuaries",
      "slug": "sanctuaries",
      "url": "/topics/sanctuaries/"
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
    "description": "I love children’s books that even I can learn from and Chimpanzee Rescue by Patricia Bow delivers and then some. Who knew there were four subspecies of chimpanzees, based on their location in Africa (eastern,…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "Countdown to Spring!",
    "url": "/reviews/countdown-to-spring/"
  },
  "next": {
    "title": "Above All, Be Kind",
    "url": "/reviews/above-all-be-kind/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"Chimpanzee Rescue"} width={210} height={278} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1552979083"} alt={""} width={1} height={1} />
      </figure>
      <p>{"I love children’s books that even I can learn from and "}<em><a href={"http://www.amazon.com/gp/product/1552979083?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1552979083"} target="_blank" rel="noopener noreferrer">{"Chimpanzee Rescue"}</a></em>{" by Patricia Bow delivers and then some. Who knew there were four subspecies of chimpanzees, based on their location in Africa (eastern, central, western, and Nigeria/Cameroon)? Or that they have a red-blue-green color vision? In addition to these informative facts, Ms. Bow also presents the bleak plight facing our next of kin."}</p>
      <p>{"As flesh in the bushmeat trade, slaves in circuses and entertainment, and subjects in biomedical research – among other fields and industries – it’s no wonder that there are less than 200,000 chimps now living in the wild. Habitat destruction plays a big role in their demise as well. Ms. Bow depicts real life, homegrown efforts from "}<a href={"http://www.chimpsanctuarynw.org/"} target="_blank" rel="noopener noreferrer">{"sanctuaries"}</a>{" (this is one of my favorites), scientists and nonprofits seeking to right these wrongs. Realized actions include re-foresting corridors so that chimps can migrate from one parcel of land to another."}</p>
      <p>{"There’s a little slice of hope in this book, but more importantly it serves as an eye opener for kids new to these vastly important animal rights issues."}</p>
      <p>{"Ages 9 -12."}</p>
    </div>
  );
}
