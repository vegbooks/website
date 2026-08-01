import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6486",
  "slug": "all-about-turkeys",
  "url": "/reviews/all-about-turkeys/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/24/all-about-turkeys/",
  "title": "All About Turkeys",
  "publishedAt": "2011-11-24",
  "publishedLabel": "November 24th, 2011",
  "excerpt": "We picked up All About Turkeys at the library and have been enjoying it a great deal during the last few weeks. Author and illustrator Jim Arnosky provides detailed facts and images about the bird that is always late…",
  "image": {
    "src": "/media/2011/11/all-about-turkeys-cover.jpg",
    "alt": "All About Turkeys",
    "width": 210,
    "height": 175
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Jim Arnosky",
      "slug": "jim-arnosky",
      "url": "/topics/jim-arnosky/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Science Books",
      "slug": "science-books",
      "url": "/topics/science-books/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "We picked up All About Turkeys at the library and have been enjoying it a great deal during the last few weeks. Author and illustrator Jim Arnosky provides detailed facts and images about the bird that is always late…",
    "image": "https://vegbooks.org/media/2011/11/all-about-turkeys-cover.jpg"
  },
  "previous": {
    "title": "You Be You",
    "url": "/reviews/you-be-you/"
  },
  "next": {
    "title": "Kokeshi Kimonos Book",
    "url": "/reviews/kokeshi-kimonos-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/all-about-turkeys-cover.jpg"}><img src={"/media/2011/11/all-about-turkeys-cover.jpg"} alt={"All About Turkeys"} width={210} height={175} /></a>
      </figure>
      <p>{"We picked up "}<em><a href={"http://www.amazon.com/gp/product/0590481479/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0590481479"} target="_blank" rel="noopener noreferrer">{"All About Turkeys"}</a></em>{" at the library and have been enjoying it a great deal during the last few weeks. Author and illustrator "}<a href={"http://www.jimarnosky.com/"} target="_blank" rel="noopener noreferrer">{"Jim Arnosky"}</a>{" provides detailed facts and images about the bird that is always late November’s talk of the town: the turkey. Our young fact collector loved hearing about all of the details about wild turkeys, and I learned a great deal myself (for example, wild turkeys can fly up to fifty miles per hour, though they are not winter migrators). This knowledge made for interesting conversation as we rambled through suburban yards in the dark one recent evening, seeking out an injured wild turkey we’d seen at dusk (what the book doesn’t mention is that a one-legged hopping turkey can be difficult to find in this environment). My child reminded me that the hopping turkey would probably be ok even without a stint at wildlife rehab because turkeys are powerful birds who can only be killed by high level canine or feline predators — or humans."}</p>
      <p>{"This book does not talk about the wild turkey’s less fortunate domestic counterpart. It is, however, a nice way to introduce some of the traits of turkeys to kids. I’m looking forward to checking out some more books by Mr. Arnosky."}</p>
      <p>{"Ages 6 and up."}</p>
    </div>
  );
}
