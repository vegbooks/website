import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2678",
  "slug": "hug-time",
  "url": "/reviews/hug-time/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/31/hug-time/",
  "title": "Hug Time",
  "publishedAt": "2010-07-31",
  "publishedLabel": "July 31st, 2010",
  "excerpt": "With Hug Time, Patrick McDonnell, longtime cartoonist and creator of “Mutts” (as well as the artist behind New Jersey’s animal friendly license plate), has crafted another winner. The sweet rhyming cadence and nicely…",
  "image": {
    "src": "/media/2010/07/hug-time.jpg",
    "alt": "Hug Time",
    "width": 210,
    "height": 183
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
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Kittens",
      "slug": "kittens",
      "url": "/topics/kittens/"
    },
    {
      "name": "Monkeys",
      "slug": "monkeys",
      "url": "/topics/monkeys/"
    },
    {
      "name": "Patrick McDonnell",
      "slug": "patrick-mcdonnell",
      "url": "/topics/patrick-mcdonnell/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "With Hug Time, Patrick McDonnell, longtime cartoonist and creator of “Mutts” (as well as the artist behind New Jersey’s animal friendly license plate), has crafted another winner. The sweet rhyming cadence and nicely…",
    "image": "https://vegbooks.org/media/2010/07/hug-time.jpg"
  },
  "previous": {
    "title": "101 Dalmatians (1961)",
    "url": "/reviews/101-dalmatians/"
  },
  "next": {
    "title": "Oil Spill!",
    "url": "/reviews/oil-spill/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/hug-time.jpg"}><img src={"/media/2010/07/hug-time.jpg"} alt={"Hug Time"} width={210} height={183} /></a>
      </figure>
      <p>{"With "}<em><a href={"http://www.powells.com/biblio/2-9780316114943-4"} target="_blank" rel="noopener noreferrer">{"Hug Time"}</a></em>{", Patrick McDonnell, longtime cartoonist and creator of “"}<a href={"http://muttscomics.com/"} target="_blank" rel="noopener noreferrer">{"Mutts"}</a>{"” (as well as the artist behind "}<a href={"http://www.state.nj.us/mvc/Vehicle/AnimalFriendly.htm"} target="_blank" rel="noopener noreferrer">{"New Jersey’s animal friendly license plate"}</a>{"), has crafted another winner. The sweet rhyming cadence and nicely balanced illustrations happily hook adults and children as they follow Jules the Kitten. Jules is feeling a little down about the state of global affairs and has come up with a solution: to hug the whole world. Caregivers of young children can probably relate to Doozy as she helps Jules with his sweater and asks, “hug the whole world, will that make it better?” Jules answers in the affirmative (ah! the certainty of the very young!) and sets out."}</p>
      <p>{"Along the way, there are allusions to various environmental themes as we follow Jules through the world and he experiences finding (and hugging) charismatic mega-fauna and lesser-known species as well. A nod to climate change and its impact on polar bears makes its way into the end of the story but before the plot becomes too heavy, we are reminded that change begins with our actions at home, sometimes with just one hug."}</p>
      <p>{"An adorable book to share with huggable folks ages 3 and up."}</p>
    </div>
  );
}
