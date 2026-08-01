import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3383",
  "slug": "rights-for-animals",
  "url": "/reviews/rights-for-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/27/rights-for-animals/",
  "title": "Rights for Animals?",
  "publishedAt": "2010-10-27",
  "publishedLabel": "October 27th, 2010",
  "excerpt": "Now out of print, Rights for Animals? in the Viewpoints series provides a close-up, bi-focal look at the myriad of issues plaguing animals, us and our ethics. Thoughtfully including quotes from notable organizations,…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Rights for Animals?",
    "width": 210,
    "height": 317
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
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Animal Rights Books for Kids",
      "slug": "animal-rights-books-for-kids",
      "url": "/topics/animal-rights-books-for-kids/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Deidre Rochford",
      "slug": "deidre-rochford",
      "url": "/topics/deidre-rochford/"
    },
    {
      "name": "Fur",
      "slug": "fur",
      "url": "/topics/fur/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Vivisection",
      "slug": "vivisection",
      "url": "/topics/vivisection/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "Now out of print, Rights for Animals? in the Viewpoints series provides a close-up, bi-focal look at the myriad of issues plaguing animals, us and our ethics. Thoughtfully including quotes from notable organizations,…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Biscuit Finds a Friend",
    "url": "/reviews/biscuit-finds-a-friend/"
  },
  "next": {
    "title": "World Water Watch",
    "url": "/reviews/world-water-watch/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Rights for Animals?"} width={210} height={317} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0749653469"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Now out of print, "}<a href={"http://www.amazon.com/gp/product/0749653469?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0749653469"} target="_blank" rel="noopener noreferrer"><em>{"Rights for Animals?"}</em></a>{" in the Viewpoints series provides a close-up, bi-focal look at the myriad of issues plaguing animals, us and our ethics. Thoughtfully including quotes from notable organizations, philosophers, campaigners, and historical figures on either side of the AR debate, each topic is covered over a two-page-spread with colorful, appropriate – albeit at times repugnant – photographs (think a sea-turned-red with blood from battered whales in the Faroe Islands) and brief summative text. All the big ones are covered: vivisection, veg*nism, hunting, fashion, and entertainment, and a few final chapters further discuss the idea of rights, ways to protect animals, etc."}</p>
      <p>{"Deidre Rochford’s research and writing provides valuable information for youngsters to use in their school papers, will help diversify their vocabulary with introductions to words such as BSE, culling and shechita, and is overall a concise synopsis of the complexities involved in ethical quandaries."}</p>
      <p>{"For more recent titles on the subject, check out the same publisher’s website, "}<a href={"http://www.franklinwatts.co.uk/searchResults.aspx?submitSearch.x=0&submitSearch.y=0&q=animal+rights"} target="_blank" rel="noopener noreferrer">{"Franklin Watts"}</a>{"."}</p>
      <p>{"Ages 9-14."}</p>
    </div>
  );
}
