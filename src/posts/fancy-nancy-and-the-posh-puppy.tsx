import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11",
  "slug": "fancy-nancy-and-the-posh-puppy",
  "url": "/reviews/fancy-nancy-and-the-posh-puppy/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/25/fancy-nancy-and-the-posh-puppy/",
  "title": "Fancy Nancy and the Posh Puppy",
  "publishedAt": "2009-10-25",
  "publishedLabel": "October 25th, 2009",
  "excerpt": "I’ve got mixed feelings about the Fancy Nancy series by Jane O’Connor and Robin Preiss Glasser. On one hand, Nancy is a bright, confident girl who likes learning new words and being thoughtful to her friends. On the…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Fancy Nancy and the Posh Puppy",
    "width": 210,
    "height": 139
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
      "name": "Animal Shelters",
      "slug": "animal-shelters",
      "url": "/topics/animal-shelters/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fancy Nancy",
      "slug": "fancy-nancy",
      "url": "/topics/fancy-nancy/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jane O'Connor",
      "slug": "jane-oconnor",
      "url": "/topics/jane-oconnor/"
    },
    {
      "name": "Mutts",
      "slug": "mutts",
      "url": "/topics/mutts/"
    },
    {
      "name": "Pink",
      "slug": "pink",
      "url": "/topics/pink/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robin Preiss Glasser",
      "slug": "robin-preiss-glasser",
      "url": "/topics/robin-preiss-glasser/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "I’ve got mixed feelings about the Fancy Nancy series by Jane O’Connor and Robin Preiss Glasser. On one hand, Nancy is a bright, confident girl who likes learning new words and being thoughtful to her friends. On the…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Cinder-Eyed Cats",
    "url": "/reviews/the-cinder-eyed-cats/"
  },
  "next": {
    "title": "Olivia",
    "url": "/reviews/olivia/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Fancy Nancy and the Posh Puppy"} width={210} height={139} /></a>
      </figure>
      <p>{"I’ve got mixed feelings about the "}<a href={"/reviews/fancy-nancy-every-day-is-earth-day/"}><em>{"Fancy Nancy"}</em></a>{" series by Jane O’Connor and Robin Preiss Glasser. On one hand, Nancy is a bright, confident girl who likes learning new words and being thoughtful to her friends. On the other, what she really loves — her whole raison d’etre — is to be fancy. And heaven knows there’s enough "}<a href={"http://www.commercialexploitation.org/news/2009/05/princessfever.html"} target="_blank" rel="noopener noreferrer">{"princess lit"}</a>{" geared to little girls."}</p>
      <p>{"So when kiddo received "}<em>{"Fancy Nancy and the Posh Puppy"}</em>{", I had qualms. Would Nancy go for a purebred papillon, like her neighbor Mrs. Devine’s dog Jewel? Would she convince her parents they "}<em>{"absolutely"}</em>{" needed to go to a breeder, where they could find the fanciest dog?"}</p>
      <p>{"Happily, the answer to both of those questions is NO. Nancy does dogsit Jewel for a day, but when her parents stop by the local animal shelter after an evening out (eating what I can only assume is pizza with "}<a href={"http://www.daiyafoods.com/"} target="_blank" rel="noopener noreferrer">{"Daiya"}</a>{" “cheese” at King’s Crown), she falls in love with Frenchy. In the end, even Fancy Nancy finds her dream dog is a rescue."}</p>
      <p>{"To O’Connor and Preiss Glasser’s credit, the "}<a href={"http://stoppuppymills.org/"} target="_blank" rel="noopener noreferrer">{"shelter message"}</a>{" is crystal clear — but kids might need to be told that Frenchy is not only a shelter dog, but a mutt. (Nancy’s dad’s reference to a “La Salle spaniel,” a nod to the name of the animal shelter, might be too subtle for some.)"}</p>
      <p>{"Ideal for kids ages 3-7. ("}<a href={"http://www.harpercollinschildrens.com/kids/gamesandcontests/features/fancynancybooks/"} target="_blank" rel="noopener noreferrer">{"Publisher"}</a>{" says 4-7 but kiddo loved this series when she was 3.)"}</p>
    </div>
  );
}
