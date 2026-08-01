import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5330",
  "slug": "making-good-choices-about-renewable-resources",
  "url": "/reviews/making-good-choices-about-renewable-resources/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/09/making-good-choices-about-renewable-resources/",
  "title": "Making Good Choices About Renewable Resources",
  "publishedAt": "2011-06-09",
  "publishedLabel": "June 9th, 2011",
  "excerpt": "In Making Good Choices About Renewable Resources, author Jeanne Nagle provides a comprehensive overview of renewable energy: solar, geothermal, wind, hydro and biomass. Each type of power source is discussed in…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Making Good Choices About Renewable Resources",
    "width": 210,
    "height": 280
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
      "name": "Energy",
      "slug": "energy",
      "url": "/topics/energy/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Jeanne Nagle",
      "slug": "jeanne-nagle",
      "url": "/topics/jeanne-nagle/"
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
      "name": "Renewable Energy",
      "slug": "renewable-energy",
      "url": "/topics/renewable-energy/"
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
    "description": "In Making Good Choices About Renewable Resources, author Jeanne Nagle provides a comprehensive overview of renewable energy: solar, geothermal, wind, hydro and biomass. Each type of power source is discussed in…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "Muncha! Muncha! Muncha!",
    "url": "/reviews/muncha-muncha-muncha/"
  },
  "next": {
    "title": "The Poky Little Puppy",
    "url": "/reviews/the-poky-little-puppy/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"Making Good Choices About Renewable Resources"} width={210} height={280} /></a>
      </figure>
      <p>{"In "}<a href={"http://www.amazon.com/gp/product/1435856023/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=1435856023"} target="_blank" rel="noopener noreferrer"><em>{"Making Good Choices About Renewable Resources"}</em></a>{", author Jeanne Nagle provides a comprehensive overview of renewable energy: solar, geothermal, wind, hydro and biomass. Each type of power source is discussed in detail, and related issues such as sustainability and conservation are defined and explained."}</p>
      <p>{"This book is very thorough and it is peppered with interesting photos throughout each chapter. Beyond the important knowledge it imparts (and we all know that knowledge is power!), another great aspect of this book is the encouragement and tips that it gives to kids. This book is a great tool for helping kids feel optimistic about the future of renewable energy in our world and empowered to make the changes necessary to bring about that evolution in their daily lives."}</p>
      <p>{"Recommended for ages 9 and up."}</p>
    </div>
  );
}
