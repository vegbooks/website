import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2776",
  "slug": "oil-spill",
  "url": "/reviews/oil-spill/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/01/oil-spill/",
  "title": "Oil Spill!",
  "publishedAt": "2010-08-01",
  "publishedLabel": "August 1st, 2010",
  "excerpt": "I probably should’ve bitten my tongue in an earlier post, because here I find myself reviewing yet another publication in the “Let’s Read and Find out Science” series. At the “Sea & Me” Gallery in the children’s…",
  "image": {
    "src": "/media/2010/07/oil-spill.jpg",
    "alt": "Oil Spill!",
    "width": 210,
    "height": 170
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
      "name": "Melvin Berger",
      "slug": "melvin-berger",
      "url": "/topics/melvin-berger/"
    },
    {
      "name": "Oil Spill",
      "slug": "oil-spill",
      "url": "/topics/oil-spill/"
    },
    {
      "name": "Paul Mirocha",
      "slug": "paul-mirocha",
      "url": "/topics/paul-mirocha/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
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
    "description": "I probably should’ve bitten my tongue in an earlier post, because here I find myself reviewing yet another publication in the “Let’s Read and Find out Science” series. At the “Sea & Me” Gallery in the children’s…",
    "image": "https://vegbooks.org/media/2010/07/oil-spill.jpg"
  },
  "previous": {
    "title": "Hug Time",
    "url": "/reviews/hug-time/"
  },
  "next": {
    "title": "Unlovable",
    "url": "/reviews/unlovable/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/oil-spill.jpg"}><img src={"/media/2010/07/oil-spill.jpg"} alt={"Oil Spill!"} width={210} height={170} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0064451216"} alt={""} width={1} height={1} />
      </figure>
      <p>{"I probably should’ve bitten my tongue in "}<a href={"/reviews/baby-whales-drink-milk/"}>{"an earlier post"}</a>{", because here I find myself reviewing yet another publication in the “Let’s Read and Find out Science” series. At the “Sea & Me” Gallery in the children’s museum where I do my 9-5, I spotted "}<em><a href={"http://www.amazon.com/gp/product/0064451216?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0064451216"} target="_blank" rel="noopener noreferrer">{"Oil Spill!"}</a></em>{" by Melvin Berger in our book nook. Although it focuses on the Exxon Valdez spill from the late ’90s, the book’s information reviews how and why spills occur, the damage they inflict on marine animals, and ways humans attempt to clean up the mess. As I’ve been interacting with the museum’s young patrons in this particular exhibit, I’ve discovered most of them are aware and very concerned about what’s taken place in the Gulf and this book is not only timely, but quite comprehensive."}</p>
      <p>{"Artist Paul Mirocha’s illustrations are engaging and, when featuring otters, seals and other critters, very cute. The activist in me loves the “How to Help Prevent Oil Spills” section, where Berger encourages youth to write letters to members of Congress and consider saving electricity and driving smaller cars, since they both require oil. Less demand, less supply, less tankers, fewer spills (in theory)."}</p>
      <p>{"The "}<a href={"http://www.nwf.org/Kids/Ranger-Rick/Activities/Help-Nature/Mixture-of-Species/How-People-Help-Nature-In-Oil-Spills.aspx"} target="_blank" rel="noopener noreferrer">{"National Wildlife Federation offers a nice website"}</a>{" for kids (remember Ranger Rick?), featuring other wetland- and oil spill- related titles and additional resources."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
