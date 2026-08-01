import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1853",
  "slug": "animals-in-captivity",
  "url": "/reviews/animals-in-captivity/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/13/animals-in-captivity/",
  "title": "Wild Animals in Captivity",
  "publishedAt": "2010-06-13",
  "publishedLabel": "June 13th, 2010",
  "excerpt": "If my buddies Jonathan Balcombe and Marc Bekoff, along with PETA’s own Ingrid Newkirk, are endorsing a kid’s book then you know it’s not only going to be good, but ethically spot-on. Rob Laidlaw, a longtime…",
  "image": {
    "src": "/media/2010/06/wild-animals-in-captivity.jpg",
    "alt": "Wild Animals in Captivity",
    "width": 206,
    "height": 270
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Jonathan Balcombe",
      "slug": "jonathan-balcombe",
      "url": "/topics/jonathan-balcombe/"
    },
    {
      "name": "Marc Bekoff",
      "slug": "marc-bekoff",
      "url": "/topics/marc-bekoff/"
    },
    {
      "name": "PETA",
      "slug": "peta",
      "url": "/topics/peta/"
    },
    {
      "name": "Rob Laidlaw",
      "slug": "rob-laidlaw",
      "url": "/topics/rob-laidlaw/"
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
    "description": "If my buddies Jonathan Balcombe and Marc Bekoff, along with PETA’s own Ingrid Newkirk, are endorsing a kid’s book then you know it’s not only going to be good, but ethically spot-on. Rob Laidlaw, a longtime…",
    "image": "https://vegbooks.org/media/2010/06/wild-animals-in-captivity.jpg"
  },
  "previous": {
    "title": "Artist to Artist",
    "url": "/reviews/artist/"
  },
  "next": {
    "title": "Duck Soup",
    "url": "/reviews/duck-soup/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/wild-animals-in-captivity.jpg"}><img src={"/media/2010/06/wild-animals-in-captivity.jpg"} alt={"Wild Animals in Captivity"} width={206} height={270} /></a>
      </figure>
      <p>{"If my buddies "}<a href={"http://www.jonathanbalcombe.com/"} target="_blank" rel="noopener noreferrer">{"Jonathan Balcombe"}</a>{" and "}<a href={"http://literati.net/Bekoff/"} target="_blank" rel="noopener noreferrer">{"Marc Bekoff"}</a>{", along with PETA’s own Ingrid Newkirk, are endorsing a kid’s book then you know it’s not only going to be good, but ethically spot-on. Rob Laidlaw, a longtime campaigner for animal protection and founder of "}<a href={"http://www.zoocheck.com/"}>{"Zoocheck Canada"}</a>{", pens his first children’s book on the plight of wild animals living in captivity (but you gleaned that from the title, right?). He juxtaposes the lives both wild and confined elephants, polar bears, great apes and orcas lead, all while providing scientific facts on each species, their conservation status, familial ties, adaptations, etc."}</p>
      <p>{"Any child reading this couldn’t deny that animals, especially the larger species mentioned, require “Five Freedoms,” which are freedom from (1) thirst, hunger and malnutrition, (2) discomfort, (3) pain, injury and disease, (4) fear and distress, and freedom to (5) express normal behavior. Mr. Laidlaw encourages children to assess the welfare of animals they see in a variety of settings: public, roadside and safari park zoos, wild animal and marine parks, and aquariums and report problematic scenes to proper authorities. Nine other ways to help wild animals are outlined in the concluding chapter, including wildlife viewing in natural areas or at sanctuaries, in lieu of zoos."}</p>
      <p>{"Other book components that make this an interesting read –"}</p>
      <ul>
        <li>{"brief synopsis of the history of zoos and their evolution (some have made the effort to switch from cages to “natural” enclosures, but not all);"}</li>
        <li>{"overview of zoos’ captive breeding programs (unwanted babies supply roadside zoos and laboratories); and"}</li>
        <li>{"selected models of "}<a href={"http://www.desertmuseum.org/"} target="_blank" rel="noopener noreferrer">{"what zoos could look like"}</a>{" (sanctuaries, conservation/breeding centers for endangered wildlife) and efforts current zoos can take to improve their lot (such as eliminating elephant enclosures, like the Detroit Zoo)."}</li>
      </ul>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1554551439"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Look for Mr. Laidlaw’s next work in October 2010, "}<a href={"http://www.amazon.com/gp/product/1554551439?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1554551439"} target="_blank" rel="noopener noreferrer"><em>{"On Parade: The Hidden World of Animals in Entertainment"}</em></a>{". Should be promising!"}</p>
      <p>{"Ages 9 – 12."}</p>
    </div>
  );
}
