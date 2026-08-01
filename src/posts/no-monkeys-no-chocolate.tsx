import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9077",
  "slug": "no-monkeys-no-chocolate",
  "url": "/reviews/no-monkeys-no-chocolate/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/09/17/no-monkeys-no-chocolate/",
  "title": "No Monkeys, No Chocolate",
  "publishedAt": "2013-09-17",
  "publishedLabel": "September 17th, 2013",
  "excerpt": "No Monkeys, No Chocolate is a children’s book about the web of life repackaged for a new generation. Who wouldn’t want to read about some adorable monkeys and chocolate? Who knew there was even a connection? Authors…",
  "image": {
    "src": "/media/2013/09/no-monkeys-no-chocolate-300.jpg",
    "alt": "NoMonkeysNoChocolate_300",
    "width": 210,
    "height": 164
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
      "name": "Allen Young",
      "slug": "allen-young",
      "url": "/topics/allen-young/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chocolate",
      "slug": "chocolate",
      "url": "/topics/chocolate/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Melissa Stewart",
      "slug": "melissa-stewart",
      "url": "/topics/melissa-stewart/"
    },
    {
      "name": "Monkeys",
      "slug": "monkeys",
      "url": "/topics/monkeys/"
    },
    {
      "name": "Nicole Wong",
      "slug": "nicole-wong",
      "url": "/topics/nicole-wong/"
    },
    {
      "name": "Pollination",
      "slug": "pollination",
      "url": "/topics/pollination/"
    },
    {
      "name": "Rainforest",
      "slug": "rainforest",
      "url": "/topics/rainforest/"
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
    "description": "No Monkeys, No Chocolate is a children’s book about the web of life repackaged for a new generation. Who wouldn’t want to read about some adorable monkeys and chocolate? Who knew there was even a connection? Authors…",
    "image": "https://vegbooks.org/media/2013/09/no-monkeys-no-chocolate-300.jpg"
  },
  "previous": {
    "title": "Animals Have Feelings, Too!",
    "url": "/reviews/animals-have-feelings-too/"
  },
  "next": {
    "title": "I Know A Lot!",
    "url": "/reviews/i-know-a-lot/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/09/no-monkeys-no-chocolate-300.jpg"}><img src={"/media/2013/09/no-monkeys-no-chocolate-300.jpg"} alt={"NoMonkeysNoChocolate_300"} width={210} height={164} /></a>
      </figure>
      <p><em><a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5769"} target="_blank" rel="noopener noreferrer">{"No Monkeys, No Chocolate"}</a></em>{" is a children’s book about the web of life repackaged for a new generation. Who wouldn’t want to read about some adorable monkeys and chocolate? Who knew there was even a connection?"}</p>
      <p>{"Authors "}<a href={"http://www.melissa-stewart.com/"} target="_blank" rel="noopener noreferrer">{"Melissa Stewart"}</a>{" and Allen Young team up to deliver a multi-level story about how we wouldn’t have chocolate if it weren’t for the all the different parts of a plant (cocoa pods, flowers, leaves, stems, roots, and beans) and their use by different animals for food (midges, leaf-cutter ants, coffin flies, aphids, anoles, and, yes, monkeys) who then help to pollinate, distribute seeds, control pests, and other important acts needed to continue the cycle of life and production of cocoa beans!"}</p>
      <p>{"In essence, there are two stories being told: a simpler sequence of text for younger audiences and a second more in depth narrative with much more emphasis on plant science and biology. My favorite part has to be a mini sidebar conversation that takes place on every page with two quite humorous bookworms –"}</p>
      <blockquote>
        <p>{"Bookworm 1: “That’s what happens inside a flower? Plants are amazing!”"}<br />{" Bookworm 2: “You can say that again!”"}<br />{" Bookworm 1: “Plants are amazing!”"}</p>
      </blockquote>
      <p>{"Kids have to hold out until the very last page to find out the monkey’s part in all of this, but they’ll enjoy the journey there. Nicole Wong’s illustrations are colorful, beautiful, and honest. The authors end with a note on current cocoa bean farming which actually produces less crop than in rainforest cocoa groves and also provide a list of what kids can do to help save rainforests. Surprisingly there’s no mention of "}<a href={"http://www.foodispower.org/chocolate-list/"} target="_blank" rel="noopener noreferrer">{"fair-trade chocolate"}</a>{", a big concern for any ethical consumer."}</p>
      <p>{"Ages 5 to 8."}</p>
      <p><em>{"Charlesbridge provided a review copy."}</em></p>
    </div>
  );
}
