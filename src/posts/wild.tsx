import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4247",
  "slug": "wild",
  "url": "/reviews/wild/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/02/08/wild/",
  "title": "All the Wild Wonders: Poems of Our Earth",
  "publishedAt": "2011-02-08",
  "publishedLabel": "February 8th, 2011",
  "excerpt": "It never ceases to amaze me how poets are able to condense abstract and even concrete ideas into the simplest of phrases or pen a poem that can alter your mood 180 degrees. A few authors in the poetic anthology All…",
  "image": {
    "src": "/media/2011/02/all-the-wild-wonders.jpg",
    "alt": "All the Wild Wonders: Poems of Our Earth",
    "width": 210,
    "height": 265
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "John Milton",
      "slug": "john-milton",
      "url": "/topics/john-milton/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Piet Grobler",
      "slug": "piet-grobler",
      "url": "/topics/piet-grobler/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Tony Bradman",
      "slug": "tony-bradman",
      "url": "/topics/tony-bradman/"
    },
    {
      "name": "Wendy Cooling",
      "slug": "wendy-cooling",
      "url": "/topics/wendy-cooling/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    },
    {
      "name": "William Blake",
      "slug": "william-blake",
      "url": "/topics/william-blake/"
    },
    {
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
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
    "description": "It never ceases to amaze me how poets are able to condense abstract and even concrete ideas into the simplest of phrases or pen a poem that can alter your mood 180 degrees. A few authors in the poetic anthology All…",
    "image": "https://vegbooks.org/media/2011/02/all-the-wild-wonders.jpg"
  },
  "previous": {
    "title": "Dog Blue",
    "url": "/reviews/dog-blue/"
  },
  "next": {
    "title": "Bringing In the New Year",
    "url": "/reviews/bringing-in-the-new-year/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/02/all-the-wild-wonders.jpg"}><img src={"/media/2011/02/all-the-wild-wonders.jpg"} alt={"All the Wild Wonders: Poems of Our Earth"} width={210} height={265} /></a>
      </figure>
      <p>{"It never ceases to amaze me how poets are able to condense abstract and even "}<a href={"/reviews/meow-ruff/"}>{"concrete ideas"}</a>{" into the simplest of phrases or pen a poem that can alter your mood 180 degrees. A few authors in the poetic anthology "}<a href={"http://www.franceslincoln.co.uk/en/C/1/Book/1781/All_the_Wild_Wonders.html"} target="_blank" rel="noopener noreferrer"><em>{"All the Wild Wonders"}</em></a>{" are superstars when it comes to trimming down their word count, including William Blake and his two-liner: “A Robin Red breast in a Cage / Puts all Heaven in a Rage.” Most are a bit lengthier and come out of the historic and present day literary woodwork to thematically convey earthy subjects: a celebration and exploration of flora and fauna, warnings of a planet in peril, and other general observations of life in the world from a global perspective, from Guyana to Greenland. Several poems also cover animal rights issues, including circuses and zoos!"}</p>
      <p>{"I’ll be the first one to admit, however, that poetry is not my forte, and for the average kid, it’s probably not theirs either. But this compilation is a wonderful tool to introduce youngsters to the literary format, spark their interest in the genre and have them put on their critical thinking caps."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2011/02/who-am-i.jpg"}><img src={"/media/2011/02/who-am-i.jpg"} alt={""} width={300} height={189} /></a>
      </figure>
      <p>{"Piet Grobler’s fanciful folk-art-inspired, pencil-and-watercolor illustrations not only entrance readers, but help tie the poetry together. For example, a two-page spread with the cutest whale you’ll "}<em>{"ever"}</em>{" see presents three poems: Tony Bradman’s “Leave the Whales Alone, Please” (USA), a portion of John Milton’s Paradise Lost (England), and an anonymous piece that declares,"}</p>
      <p>{"If you ever ever ever ever ever"}</p>
      <p>{"If you ever ever ever meet a whale"}</p>
      <p>{"You must never never never never never"}</p>
      <p>{"You must never never never touch its tail:"}</p>
      <p>{"For if you ever ever ever ever ever"}</p>
      <p>{"If you ever ever ever touch its tail,"}</p>
      <p>{"You will never never never never never"}</p>
      <p>{"You will never never meet another whale."}</p>
      <p>{"Ages 9-12, but adults can enjoy this one too!"}</p>
    </div>
  );
}
