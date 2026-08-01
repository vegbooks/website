import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2200",
  "slug": "winston-of-churchill",
  "url": "/reviews/winston-of-churchill/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/11/winston-of-churchill/",
  "title": "Winston of Churchill",
  "publishedAt": "2010-06-11",
  "publishedLabel": "June 11th, 2010",
  "excerpt": "Pictures of polar bears clinging to small bits of ice have been a primary rallying symbol for the fight to stop global climate change. In Winston of Churchill: One Bear’s Battle Against Global Warming, the bears take…",
  "image": {
    "src": "/media/2010/07/winston-cvr.jpg",
    "alt": "Winston of Churchill",
    "width": 199,
    "height": 156
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
      "name": "Climate Change",
      "slug": "climate-change",
      "url": "/topics/climate-change/"
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
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Green Earth Book Award Winner",
      "slug": "green-earth-book-award-winner",
      "url": "/topics/green-earth-book-award-winner/"
    },
    {
      "name": "Jean Davies Okimoto",
      "slug": "jean-davies-okimoto",
      "url": "/topics/jean-davies-okimoto/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Winston Churchill",
      "slug": "winston-churchill",
      "url": "/topics/winston-churchill/"
    },
    {
      "name": "World War II",
      "slug": "world-war-ii",
      "url": "/topics/world-war-ii/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "Pictures of polar bears clinging to small bits of ice have been a primary rallying symbol for the fight to stop global climate change. In Winston of Churchill: One Bear’s Battle Against Global Warming, the bears take…",
    "image": "https://vegbooks.org/media/2010/07/winston-cvr.jpg"
  },
  "previous": {
    "title": "How Do Dinosaurs Love Their Cats?",
    "url": "/reviews/how-do-dinosaurs-love-their-cats/"
  },
  "next": {
    "title": "Artist to Artist",
    "url": "/reviews/artist/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/winston-cvr.jpg"}><img src={"/media/2010/07/winston-cvr.jpg"} alt={"Winston of Churchill"} width={199} height={156} /></a>
      </figure>
      <p>{"Pictures of polar bears clinging to small bits of ice have been a primary "}<a href={"http://www.newscientist.com/article/dn2285-climate-change-threatens-polar-bears.html"} target="_blank" rel="noopener noreferrer">{"rallying symbol for the fight to stop global climate change"}</a>{". In "}<em>{"Winston of Churchill: One Bear’s Battle Against Global Warming"}</em>{", the bears take matters into their own paws, thanks to the courage and foresight of Winston, who leads the bears in a campaign to defend their ice-dependent homes. Since "}<a href={"http://blog.sustainablog.org/the-top-causes-of-global-warming-natural-or-human/"} target="_blank" rel="noopener noreferrer">{"people are the primary cause of global warming"}</a>{", Winston mobilizes the bears to protest in front of the tourists (complete with signs and chants) to make them aware of how their destructive actions are melting the ice and destroying the bears’ land."}</p>
      <p><em>{"Winston of Churchill"}</em>{" is a fun, playful way to introduce kids to the issue of global warming, the importance of "}<a href={"http://www.nature.org/initiatives/climatechange/calculator/"} target="_blank" rel="noopener noreferrer">{"personal responsibility"}</a>{" (Winston’s wife points out that his cigar pollutes, too), and the power of taking positive, peaceful action. Although the quotes and references to the World War II leader will be lost on kids, parents may appreciate them. Great for sparking age-appropriate discussion about an important topic that affects everyone."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
