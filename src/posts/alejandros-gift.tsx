import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3142",
  "slug": "alejandros-gift",
  "url": "/reviews/alejandros-gift/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/23/alejandros-gift/",
  "title": "Alejandro’s Gift",
  "publishedAt": "2010-09-23",
  "publishedLabel": "September 23rd, 2010",
  "excerpt": "Giving is an art form, and it takes elderly Alejandro a few tries before he offers just the right thing – in the right way – to those who share in this desert homestead. With a sole burro for companionship, Alejandro…",
  "image": {
    "src": "/media/2010/09/0811813428.jpg",
    "alt": "Alejandro’s Gift",
    "width": 180,
    "height": 180
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
      "name": "Desert",
      "slug": "desert",
      "url": "/topics/desert/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Generosity",
      "slug": "generosity",
      "url": "/topics/generosity/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Richard E. Albert",
      "slug": "richard-e-albert",
      "url": "/topics/richard-e-albert/"
    },
    {
      "name": "Sylvia Long",
      "slug": "sylvia-long",
      "url": "/topics/sylvia-long/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "Giving is an art form, and it takes elderly Alejandro a few tries before he offers just the right thing – in the right way – to those who share in this desert homestead. With a sole burro for companionship, Alejandro…",
    "image": "https://vegbooks.org/media/2010/09/0811813428.jpg"
  },
  "previous": {
    "title": "The Perfect Pet",
    "url": "/reviews/the-perfect-pet/"
  },
  "next": {
    "title": "Ninety-Five",
    "url": "/reviews/ninety-five/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/0811813428.jpg"}><img src={"/media/2010/09/0811813428.jpg"} alt={"Alejandro’s Gift"} width={180} height={180} /></a>
      </figure>
      <p>{"Giving is an art form, and it takes elderly Alejandro a few tries before he offers just the right thing – in the right way – to those who share in this desert homestead. With a sole burro for companionship, Alejandro enjoys tending to his garden which brings curious and thirsty critters (squirrel, jackrabbit, and roadrunner) to his yard. Deducing that water is what drives the wildlife to his plot, Alejandro creates a watering hole specifically for them and the larger creatures like javelinas and coyotes. But not every gift, including Alejandro’s, is delivered in a way the locals can appreciate."}</p>
      <p>{"Due to the proximity of Alejandro’s house and a nearby road, the watering hole becomes a flop. Graciously, Alejandro constructs a new drinking spot that’s off the beaten path and not visible to onlookers, including its engineer. Knowing that the animals are benefiting from this gift, even if he can’t view it himself, brings Alejandro a simple, but great joy."}</p>
      <p>{"A down-to-earth, straightforward tale of life in the desert and the beauty found in acts of kindness, "}<em>{"Alejandro’s Gift"}</em>{" is a gem. Click here for a "}<a href={"http://www.youtube.com/watch?v=sglzergGLiE&playnext=1&list=PL92D781E5FD1FF24D"} target="_blank" rel="noopener noreferrer">{"Reading Rainbow"}</a>{" episode on desert life, featuring a retelling of the book and the realistic artwork of "}<a href={"http://www.sylvia-long.com/"} target="_blank" rel="noopener noreferrer">{"Sylvia Long"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
