import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4507",
  "slug": "the-kids-solar-energy-book",
  "url": "/reviews/the-kids-solar-energy-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/29/the-kids-solar-energy-book/",
  "title": "The Kids’ Solar Energy Book",
  "publishedAt": "2011-03-29",
  "publishedLabel": "March 29th, 2011",
  "excerpt": "Frequent Vegbooks readers may have picked up on my scorn of some alternative energy nonfiction that clearly omits any mention of solar energy. The cosmos aligned and sent me a copy of The Kids’ Solar Energy Book,…",
  "image": {
    "src": "/media/2011/03/kidssola-rlo.jpg",
    "alt": "The Kids’ Solar Energy Book",
    "width": 205,
    "height": 144
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
      "name": "Alternative Energy",
      "slug": "alternative-energy",
      "url": "/topics/alternative-energy/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Malcom Wells",
      "slug": "malcom-wells",
      "url": "/topics/malcom-wells/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Renewable Energy",
      "slug": "renewable-energy",
      "url": "/topics/renewable-energy/"
    },
    {
      "name": "Solar Power",
      "slug": "solar-power",
      "url": "/topics/solar-power/"
    },
    {
      "name": "Tilly Spetgang",
      "slug": "tilly-spetgang",
      "url": "/topics/tilly-spetgang/"
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
    "description": "Frequent Vegbooks readers may have picked up on my scorn of some alternative energy nonfiction that clearly omits any mention of solar energy. The cosmos aligned and sent me a copy of The Kids’ Solar Energy Book,…",
    "image": "https://vegbooks.org/media/2011/03/kidssola-rlo.jpg"
  },
  "previous": {
    "title": "Shlemiel Crooks",
    "url": "/reviews/shlemiel-crooks/"
  },
  "next": {
    "title": "Easter Parade",
    "url": "/reviews/easter-parade/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/kidssola-rlo.jpg"}><img src={"/media/2011/03/kidssola-rlo.jpg"} alt={"The Kids’ Solar Energy Book"} width={205} height={144} /></a>
      </figure>
      <p>{"Frequent Vegbooks readers may have picked up on my scorn of some "}<a href={"/reviews/onion-juice-poop-and-other-surprising-sources-of-alternative-energy/"}>{"alternative energy nonfiction"}</a>{" that clearly omits any mention of solar energy. The cosmos aligned and sent me a copy of "}<a href={"http://www.imaginebks.com/children/kids_solar.html"} target="_blank" rel="noopener noreferrer"><em>{"The Kids’ Solar Energy Book"}</em></a>{", which is a humorous means of investigating active systems, passive solar, and the conversion of sunlight into electricity through a classroom setting. The information presented within is very much a la Charlie Brown, whereby we can’t see the teacher, but we can hear her. Students are drawn in a 1970’s style (the book was originally published in 1982 and rereleased in 2009) and help to elaborate on their lessons and make many a joke."}</p>
      <p>{"Illustrator Malcom Wells does a fantastic job incorporating the laugh-out-loud absurd in his cartoons: cats, dinosaurs and giant ants sitting at desks, kids in random costume and engaging in off-topic behavior (knitting, brewing coffee, and doing hand stands). However, it takes nearly 90 pages to convey the basics of solar energy – a bit lengthy I think, especially when the pages are set up in the same manner and look virtually identical (the entire book is done in a green/white two-tone color scale). Overall, this text is an unusual take on solar energy, but one that kids will enjoy. It may just take a few sessions to get through."}</p>
      <p>{"Ages 9+."}</p>
    </div>
  );
}
