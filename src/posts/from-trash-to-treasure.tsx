import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6842",
  "slug": "from-trash-to-treasure",
  "url": "/reviews/from-trash-to-treasure/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/23/from-trash-to-treasure/",
  "title": "From Trash to Treasure",
  "publishedAt": "2012-01-23",
  "publishedLabel": "January 23rd, 2012",
  "excerpt": "In the same vein as the Grow It Yourself! series, the six titles in the Trash to Treasure lineup make arts and crafts an easy, green practice for early elementary students and also challenge their reading skills.…",
  "image": {
    "src": "/media/2012/01/9781432951528.jpg",
    "alt": "From Trash to Treasure",
    "width": 210,
    "height": 236
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
      "name": "Art",
      "slug": "art",
      "url": "/topics/art/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Craft Projects",
      "slug": "craft-projects",
      "url": "/topics/craft-projects/"
    },
    {
      "name": "Daniel Nunn",
      "slug": "daniel-nunn",
      "url": "/topics/daniel-nunn/"
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
      "name": "Homeschooling",
      "slug": "homeschooling",
      "url": "/topics/homeschooling/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    },
    {
      "name": "Series",
      "slug": "series",
      "url": "/topics/series/"
    },
    {
      "name": "Trash",
      "slug": "trash",
      "url": "/topics/trash/"
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
    "description": "In the same vein as the Grow It Yourself! series, the six titles in the Trash to Treasure lineup make arts and crafts an easy, green practice for early elementary students and also challenge their reading skills.…",
    "image": "https://vegbooks.org/media/2012/01/9781432951528.jpg"
  },
  "previous": {
    "title": "One More Acorn",
    "url": "/reviews/one-more-acorn/"
  },
  "next": {
    "title": "Billie the Unicorn",
    "url": "/reviews/billie-the-unicorn/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/9781432951528.jpg"}><img src={"/media/2012/01/9781432951528.jpg"} alt={"From Trash to Treasure"} width={210} height={236} /></a>
      </figure>
      <p>{"In the same vein as "}<a href={"/reviews/grow-it-yourself/"}>{"the "}<em>{"Grow It Yourself!"}</em>{" series"}</a>{", the six titles in the "}<em><a href={"http://www.capstonepub.com/product/9781432951566"} target="_blank" rel="noopener noreferrer">{"Trash to Treasure"}</a></em>{" lineup make arts and crafts an easy, green practice for early elementary students and also challenge their reading skills."}</p>
      <p>{"Books are broken up into their respective reuse material: cardboard, jars and pots, buttons and beads, old clothes, paper, and plastic. Each work generally has the same format: description of the material, what happens once it’s disposed of (landfill), how to recycle and repurpose it through a pictorial example of craft ideas, and at least 1 how-to project guide. Included activities can be a bit more commonly known (snow globe from a jar), while others are so creative that even I want to do them: a flower bouquet made of buttons or a ceramic pot wind chime."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2012/01/9781432951542.jpg"}><img src={"/media/2012/01/9781432951542.jpg"} alt={""} width={210} height={236} /></a>
      </figure>
      <p>{"I know if I was back in kindergarten I would have absolutely loved to dive into these works with an adult by my side and give them a go. Although there is really only one project with instructions contained within each title, author Daniel Nunn includes website links to the other craft projects. Most adults can figure out what materials are needed and how to assemble them on their own, but who doesn’t love getting more crafty ideas from the net, especially when Nunn recommends "}<a href={"http://pbskids.org/zoom/activities/do/buttonflowers.html"} target="_blank" rel="noopener noreferrer">{"PBS Kids"}</a>{" and "}<a href={"http://www.artistshelpingchildren.org/"} target="_blank" rel="noopener noreferrer">{"Artists Helping Children"}</a>{"?"}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
