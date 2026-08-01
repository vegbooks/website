import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7379",
  "slug": "momo-come-home",
  "url": "/reviews/momo-come-home/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/23/momo-come-home/",
  "title": "Momo Come Home",
  "publishedAt": "2012-04-23",
  "publishedLabel": "April 23rd, 2012",
  "excerpt": "Momo Come Home addresses a topic of interest to many children – the disappearance of a beloved pet. At the start of this self-published picture book, the narrator is walking down the street with her small pet parrot,…",
  "image": {
    "src": "/media/2012/04/momo-pictures-1.jpg",
    "alt": "Momo Come Home",
    "width": 210,
    "height": 162
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
      "name": "Bonnie Lee",
      "slug": "bonnie-lee",
      "url": "/topics/bonnie-lee/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Parrots",
      "slug": "parrots",
      "url": "/topics/parrots/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sandi Lancaster",
      "slug": "sandi-lancaster",
      "url": "/topics/sandi-lancaster/"
    },
    {
      "name": "Tzuling Liu",
      "slug": "tzuling-liu",
      "url": "/topics/tzuling-liu/"
    }
  ],
  "reviewer": {
    "name": "Sandi Lancaster",
    "slug": "sandi-lancaster",
    "url": "/contributors/sandi-lancaster/",
    "aliases": [
      "SANDI LANCASTER"
    ]
  },
  "seo": {
    "description": "Momo Come Home addresses a topic of interest to many children – the disappearance of a beloved pet. At the start of this self-published picture book, the narrator is walking down the street with her small pet parrot,…",
    "image": "https://vegbooks.org/media/2012/04/momo-pictures-1.jpg"
  },
  "previous": {
    "title": "Fancy Nancy: Every Day is Earth Day",
    "url": "/reviews/fancy-nancy-every-day-is-earth-day/"
  },
  "next": {
    "title": "Struffel",
    "url": "/reviews/struffel/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/04/momo-pictures-1.jpg"}><img src={"/media/2012/04/momo-pictures-1.jpg"} alt={"Momo Come Home"} width={210} height={162} /></a>
      </figure>
      <p><em>{"Momo Come Home"}</em>{" addresses a topic of interest to many children – the disappearance of a beloved pet. At the start of this self-published picture book, the narrator is walking down the street with her small pet parrot, Momo, when the parrot suddenly flies away. The rest of the story chronicles the numerous attempts made by the narrator to find her parrot and get him back. The narrator eventually finds Momo after an extensive search, and she unsuccessfully attempts to catch Momo as the parrot keeps flying away. At the end of the story, after many repeated attempts, the narrator succeeds in catching her parrot."}</p>
      <p>{"The pictures are sweet, and the story held the attention of both my four-year old daughter and her four-year old friend as I read it to them. The book has some grammatical errors and at times the wording is a bit awkward. However, this went totally unnoticed by my four-year old audience, who remained content throughout the reading."}</p>
      <p>{"Throughout the story, the narrator’s love and concern for her parrot shine through. Some vegan families may really appreciate the depth of the love that the narrator feels for Momo. Other vegan families may have questions about whether or not an escaping pet bird may be demonstrating a desire to be free. The story can perhaps serve as a starting point for a discussion with vegan children about both perspectives – the love people can feel for pets, as well as what habitats are best for various animals."}</p>
    </div>
  );
}
