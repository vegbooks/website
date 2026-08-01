import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1244",
  "slug": "green-guide-for-artists",
  "url": "/reviews/green-guide-for-artists/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/24/green-guide-for-artists/",
  "title": "Green Guide for Artists",
  "publishedAt": "2010-04-24",
  "publishedLabel": "April 24th, 2010",
  "excerpt": "As a crafty dabbler who lives with both a spare-time painter and a young child in whom we are attempting to instill a strong sense of appreciation for his own and others’ creative processes, I end up thinking a lot…",
  "image": {
    "src": "/media/2010/03/9781592535187.jpg",
    "alt": "Green Guide for Artists",
    "width": 218,
    "height": 235
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
      "name": "Art Projects",
      "slug": "art-projects",
      "url": "/topics/art-projects/"
    },
    {
      "name": "Creativity",
      "slug": "creativity",
      "url": "/topics/creativity/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
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
    "description": "As a crafty dabbler who lives with both a spare-time painter and a young child in whom we are attempting to instill a strong sense of appreciation for his own and others’ creative processes, I end up thinking a lot…",
    "image": "https://vegbooks.org/media/2010/03/9781592535187.jpg"
  },
  "previous": {
    "title": "Biscuit’s Earth Day Celebration",
    "url": "/reviews/biscuits-earth-day-celebration/"
  },
  "next": {
    "title": "So, You Love Animals",
    "url": "/reviews/so-you-love-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/03/9781592535187.jpg"}><img src={"/media/2010/03/9781592535187.jpg"} alt={"Green Guide for Artists"} width={218} height={235} /></a>
      </figure>
      <p>{"As a crafty dabbler who lives with both a spare-time painter and a young child in whom we are attempting to instill a strong sense of appreciation for his own and others’ creative processes, I end up thinking a lot about the impacts of what can happen if we aren’t mindful when we answer the creative call. I was ripe for some new suggestions and inspiration."}</p>
      <p>{"Karen Michel (with artist interviewer Kristen Hampshire) gives excellent insight to those types of thoughts. Her book, "}<em><a href={"http://www.quarrybooks.com/description.asp?isbn=9781592535187"} target="_blank" rel="noopener noreferrer">{"Green Guide for Artists: Nontoxic Recipes, Green Art Ideas & Resources For The Eco-Conscious Artist"}</a></em>{", is divided into four chunky chapters. The first contains an introduction to and information about greening your studio (I’m undaunted by the fact that none of us in this household actually "}<em>{"has"}</em>{"a studio). The information provided is really instructive for anyone using a wide range of visual art supplies including paints, canvases, sealants and mediums. Some of the product safety concerns raised are fairly sobering. Chapter 2 gives recipes for eco-friendly methods of concocting the materials discussed in Chapter 1. This was probably one of the more interesting aspects of this book. Michel provides directions for both vegetarian (milk, casein, honey and egg-based recipes) and vegan methods of creating non-toxic paints, dyes, binders and adhesives. Chapter Three lays out straightforward (some – but not all – little kid friendly) projects using your newfound skills in, for example, making india ink or paper-mache glue. The final chapter highlights a handful of artists who are creating in very interesting and environmentally aware ways."}</p>
      <p>{"The resource guide in the back is extremely informative and contains an array of websites that offer further information on this subject including sources of recycled paper, art supplies, recycle centers for alternative art materials and green artist organizations."}</p>
      <p>{"This book is a great tool in one’s quest to green up art projects with children of any age. Older children and their grown-ups will find themselves inspired and intrigued by the featured projects and artists."}</p>
    </div>
  );
}
