import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7223",
  "slug": "peregrines-sky",
  "url": "/reviews/peregrines-sky/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/04/peregrines-sky/",
  "title": "Peregrine’s Sky",
  "publishedAt": "2012-04-04",
  "publishedLabel": "April 4th, 2012",
  "excerpt": "Peregrine’s Sky traces the early life of a young peregrine falcon and her family. From Peregrine’s parents’ mating rituals to her early moments out of her shell (and her loud brothers) to the nerve wracking moments…",
  "image": {
    "src": "/media/2012/04/peregrine-cover.jpg",
    "alt": "Peregrine’s Sky",
    "width": 210,
    "height": 166
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
      "name": "Consie Powell",
      "slug": "consie-powell",
      "url": "/topics/consie-powell/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Raptors",
      "slug": "raptors",
      "url": "/topics/raptors/"
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
    "description": "Peregrine’s Sky traces the early life of a young peregrine falcon and her family. From Peregrine’s parents’ mating rituals to her early moments out of her shell (and her loud brothers) to the nerve wracking moments…",
    "image": "https://vegbooks.org/media/2012/04/peregrine-cover.jpg"
  },
  "previous": {
    "title": "Only One Ocean",
    "url": "/reviews/only-one-ocean/"
  },
  "next": {
    "title": "Sweet Dreams",
    "url": "/reviews/sweet-dreams/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/04/peregrine-cover.jpg"}><img src={"/media/2012/04/peregrine-cover.jpg"} alt={"Peregrine’s Sky"} width={210} height={166} /></a>
      </figure>
      <p><em><a href={"http://www.wnpa.org/Merchant2/merchant.mv?Screen=PROD&Store_Code=WNPAS&Product_Code=P1210"} target="_blank" rel="noopener noreferrer">{"Peregrine’s Sky"}</a></em>{" traces the early life of a young peregrine falcon and her family. From Peregrine’s parents’ mating rituals to her early moments out of her shell (and her loud brothers) to the nerve wracking moments of her uncertain first flight, this story is richly informative about this once-endangered species (peregrines were removed from the federal Endangered Species list in 1999)."}</p>
      <p>{"While the story focuses on a specific family group, sidebars provide general knowledge and background regarding the biology of this species and it’s relationship to the ecosystem. The afterward is not to be missed. It is a short but comprehensive overview of the falcon, including information about the species’ migratory routes, historical significance, "}<a href={"http://library.fws.gov/ES/peregrine06.pdf"} target="_blank" rel="noopener noreferrer">{"decline due to DDT"}</a>{" and current recovery and nest site choices (peregrines have been habituating to urban environments, including "}<a href={"http://www.nbcbayarea.com/news/local/Falcons-Hatch-in-San-Francisco-146047255.html"} target="_blank" rel="noopener noreferrer">{"San Francisco"}</a>{", "}<a href={"http://amps-webflash.amps.ms.mit.edu/public/MIT/2011-2012/raptorCAM/"} target="_blank" rel="noopener noreferrer">{"Cambridge"}</a>{", "}<a href={"http://www.nj.gov/dep/fgw/peregrinecam/index.html"} target="_blank" rel="noopener noreferrer">{"Jersey City"}</a>{" and "}<a href={"http://www.falconcam-cmnh.org/news.php"} target="_blank" rel="noopener noreferrer">{"Cleveland"}</a>{"). The glossary at the end of the book provides definitions for potentially unfamiliar terms such as tiercels, eyas and falconers."}</p>
      <p>{"Caregivers of sensitive children will want to know that, as one would expect in a book about raptors, there are indeed illustrations depicting the birds of prey eating their catches. There is also a description of Peregrine’s first successful nab of a smaller bird."}</p>
      <p>{"Recommended for kids who are ready to learn about raptors and endangered species conservation; ages 4 and up."}</p>
    </div>
  );
}
