import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8167",
  "slug": "kids-animals",
  "url": "/reviews/kids-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/09/05/kids-animals/",
  "title": "Kids & Animals",
  "publishedAt": "2012-09-05",
  "publishedLabel": "September 5th, 2012",
  "excerpt": "I’ve reviewed at least one other title from my good friend Marc Bekoff, the internationally renowned animal ethologist. This one is just as tender and sweet. Kids & Animals (download a free version here) is an…",
  "image": {
    "src": "/media/2012/09/cover.jpg",
    "alt": "Kids & Animals",
    "width": 221,
    "height": 152
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Coloring",
      "slug": "coloring",
      "url": "/topics/coloring/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "E-Books",
      "slug": "e-books",
      "url": "/topics/e-books/"
    },
    {
      "name": "Life-Affirming",
      "slug": "life-affirming",
      "url": "/topics/life-affirming/"
    },
    {
      "name": "Marc Bekoff",
      "slug": "marc-bekoff",
      "url": "/topics/marc-bekoff/"
    },
    {
      "name": "Peace",
      "slug": "peace",
      "url": "/topics/peace/"
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
    "description": "I’ve reviewed at least one other title from my good friend Marc Bekoff, the internationally renowned animal ethologist. This one is just as tender and sweet. Kids & Animals (download a free version here) is an…",
    "image": "https://vegbooks.org/media/2012/09/cover.jpg"
  },
  "previous": {
    "title": "Granny’s Clan",
    "url": "/reviews/grannys-clan/"
  },
  "next": {
    "title": "The Secret World of Arrietty (2012)",
    "url": "/reviews/the-secret-world-of-arrietty/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/09/cover.jpg"}><img src={"/media/2012/09/cover.jpg"} alt={"Kids & Animals"} width={221} height={152} /></a>
      </figure>
      <p>{"I’ve reviewed at least "}<a href={"/reviews/animals-at-play-rules-of-the-game/"}>{"one other title"}</a>{" from my good friend Marc Bekoff, the internationally renowned animal ethologist. This one is just as tender and sweet. "}<em>{"Kids & Animals"}</em>{" (download a free version "}<a href={"http://www.projectcoyote.org/Kids_And_Animals_Jane_Goodall_and_Marc_Bekoff.pdf"} target="_blank" rel="noopener noreferrer">{"here"}</a>{") is an artistic showcase of what the youngsters involved in Jane Goodall’s "}<a href={"http://www.rootsandshoots.org/"} target="_blank" rel="noopener noreferrer">{"Roots & Shoots"}</a>{" program have created in response to different prompts: “I have a dream that…” and “I am thankful for…” Readers will see that kids just like them share the same goals and dreams, as are outlined in the chapter titles of this short publication:"}</p>
      <ul>
        <li>{"safety for animals"}</li>
        <li>{"peace"}</li>
        <li>{"loving, caring & families"}</li>
        <li>{"homes & habitats"}</li>
        <li>{"coexistence & cooperation"}</li>
        <li>{"celebration"}</li>
      </ul>
      <p>{"The artwork comes from youth around the globe and Marc does an incredible job of including examples of how these Roots & Shoots club members have put their dreams and thankfulness into action: clean-ups, fundraisers, volunteerism, and much more. A wonderful little gem of a book that shows how a piece of paper and some colored pencils can do wonders to encourage “a more peaceful and compassionate world for all.”"}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
