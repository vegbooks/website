import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5822",
  "slug": "chickens-to-the-rescue",
  "url": "/reviews/chickens-to-the-rescue/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/23/chickens-to-the-rescue/",
  "title": "Chickens to the Rescue",
  "publishedAt": "2011-08-23",
  "publishedLabel": "August 23rd, 2011",
  "excerpt": "When the typical order of daily events breaks down on a farm, some atypical helpers emerge in Chickens to the Rescue. Silly events develop as the helpful poultry assist in all quarters. Watch fell down a well? Too…",
  "image": {
    "src": "/media/2011/08/9780805079517.jpg",
    "alt": "Chickens to the Rescue",
    "width": 210,
    "height": 194
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Farm",
      "slug": "farm",
      "url": "/topics/farm/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "John Himmelman",
      "slug": "john-himmelman",
      "url": "/topics/john-himmelman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "When the typical order of daily events breaks down on a farm, some atypical helpers emerge in Chickens to the Rescue. Silly events develop as the helpful poultry assist in all quarters. Watch fell down a well? Too…",
    "image": "https://vegbooks.org/media/2011/08/9780805079517.jpg"
  },
  "previous": {
    "title": "The Substitute Creacher",
    "url": "/reviews/the-substitute-creacher/"
  },
  "next": {
    "title": "Moonshot: The Flight of Apollo 11",
    "url": "/reviews/moonshot-the-flight-of-apollo-11/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/9780805079517.jpg"}><img src={"/media/2011/08/9780805079517.jpg"} alt={"Chickens to the Rescue"} width={210} height={194} /></a>
      </figure>
      <p>{"When the typical order of daily events breaks down on a farm, some atypical helpers emerge in "}<em><a href={"http://www.amazon.com/gp/product/0805079513/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0805079513"} target="_blank" rel="noopener noreferrer">{"Chickens to the Rescue"}</a></em>{". Silly events develop as the helpful poultry assist in all quarters. Watch fell down a well? Too tired to make dinner? Homework eaten by the dog? Duck absconded in a truck? This farm’s flock of chickens is ready to step in and make things happen!"}</p>
      <p>{"We cannot read this story without chuckling at the flock’s fervor and passion for helping their fellow farm dwellers. Though a cow named Milky is featured, which may not sit well with some, this tale by author/illustrator "}<a href={"http://jch.homestead.com/home.html"} target="_blank" rel="noopener noreferrer">{"John Himmelman"}</a>{" characterizes chickens as lovable, capable do-gooders. We all should have a flock of such good-natured, helpful assistants."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
