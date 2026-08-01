import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1652",
  "slug": "cats-roxville",
  "url": "/reviews/cats-roxville/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/16/cats-roxville/",
  "title": "The Cats of Roxville Station",
  "publishedAt": "2010-05-16",
  "publishedLabel": "May 16th, 2010",
  "excerpt": "Do you remember having summer reading lists dished out by your public school? There was always such diversity and intrigue (at least in my opinion) amongst the titles that made it to the list. One that I’ll never…",
  "image": {
    "src": "/media/2010/05/catsofroxville.jpg",
    "alt": "The Cats of Roxville Station",
    "width": 216,
    "height": 300
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
      "name": "Animal Behavior",
      "slug": "animal-behavior",
      "url": "/topics/animal-behavior/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Deer",
      "slug": "deer",
      "url": "/topics/deer/"
    },
    {
      "name": "Foxes",
      "slug": "foxes",
      "url": "/topics/foxes/"
    },
    {
      "name": "Jean Craighead George",
      "slug": "jean-craighead-george",
      "url": "/topics/jean-craighead-george/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Owls",
      "slug": "owls",
      "url": "/topics/owls/"
    },
    {
      "name": "Raccoons",
      "slug": "raccoons",
      "url": "/topics/raccoons/"
    },
    {
      "name": "Urban Wildlife",
      "slug": "urban-wildlife",
      "url": "/topics/urban-wildlife/"
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
    "description": "Do you remember having summer reading lists dished out by your public school? There was always such diversity and intrigue (at least in my opinion) amongst the titles that made it to the list. One that I’ll never…",
    "image": "https://vegbooks.org/media/2010/05/catsofroxville.jpg"
  },
  "previous": {
    "title": "Growing Vegetable Soup",
    "url": "/reviews/growing-vegetable-soup/"
  },
  "next": {
    "title": "The Twelve Gifts of Birth",
    "url": "/reviews/twelve-gifts-of-birth/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/catsofroxville.jpg"}><img src={"/media/2010/05/catsofroxville.jpg"} alt={"The Cats of Roxville Station"} width={216} height={300} /></a>
      </figure>
      <p>{"Do you remember having summer reading lists dished out by your public school? There was always such diversity and intrigue (at least in my opinion) amongst the titles that made it to the list. One that I’ll never forget was "}<em>{"My Side of the Mountain"}</em>{", also written by "}<a href={"http://www.jeancraigheadgeorge.com/"}>{"Jean Craighead"}</a><a href={"http://www.jeancraigheadgeorge.com/"}>{"George"}</a>{". I wanted nothing more to run away, live in a tree and hang with wildlife in the Catskill Mountains. "}<em>{"The Cats of"}</em><em>{"Roxville"}</em><em>{"Station"}</em>{" is in the same vein, but on the urban end, where the protagonist Mike, a teen in the foster care of widowed Mrs. Dibber, becomes enchanted with a curious little feline named Rachet. “A lady in a fur coat” had discarded the kitten off a bridge, but not before Rachet had been kicked and tortured by the children in the family."}</p>
      <p>{"The entire book traverses Mike’s attempt to befriend the cat and Rachet’s long-haul in learning the ways of feral (finding a place in the feline hierarchy, giving birth to kittens, hunting mice) and domesticated life (when to trust and when to run from humans). But more importantly it’s an insightful look as to how animals have adapted to the suburban setting. Barn owls find refuge in Mike’s attic, feral cats escape the snow and bitter cold in his basement, and even foxes, raccoons and deer make their appearances in the neighborhood. Mike has the patience to observe animal behavior – "}<a href={"http://www.outdoors.org/education/naturalist/junior/naturalist-home.cfm"}>{"a natural naturalist in the making"}</a>{" – and will inspire readers to investigate their own backyards for the captivating flora and fauna that can be detected."}</p>
      <p>{"Warning: George tells nature like it is…kittens perish, people try to poison the cats, and Rachet protects her litter from predators as best she can. Definitely a read for older kids."}</p>
      <p>{"Ages 9 -12."}</p>
    </div>
  );
}
