import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3005",
  "slug": "the-berenstain-bears-new-kitten",
  "url": "/reviews/the-berenstain-bears-new-kitten/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/03/the-berenstain-bears-new-kitten/",
  "title": "The Berenstain Bears’ New Kitten",
  "publishedAt": "2010-09-03",
  "publishedLabel": "September 3rd, 2010",
  "excerpt": "In The Berenstain Bears’ New Kitten, the popular series tackles the subject of stray animals. When Brother finds a kitten in a pond and brings her home, the whole family becomes involved in cleaning and comforting…",
  "image": {
    "src": "/media/2010/09/bb-new-kitten.jpg",
    "alt": "The Berenstain Bears’ New Kitten",
    "width": 210,
    "height": 316
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Animal Shelters",
      "slug": "animal-shelters",
      "url": "/topics/animal-shelters/"
    },
    {
      "name": "Berenstain Bears",
      "slug": "berenstain-bears",
      "url": "/topics/berenstain-bears/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
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
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "In The Berenstain Bears’ New Kitten, the popular series tackles the subject of stray animals. When Brother finds a kitten in a pond and brings her home, the whole family becomes involved in cleaning and comforting…",
    "image": "https://vegbooks.org/media/2010/09/bb-new-kitten.jpg"
  },
  "previous": {
    "title": "Forever Young",
    "url": "/reviews/foreveryoung/"
  },
  "next": {
    "title": "Do Princesses Wear Hiking Boots?",
    "url": "/reviews/do-princesses-wear-hiking-boots/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/bb-new-kitten.jpg"}><img src={"/media/2010/09/bb-new-kitten.jpg"} alt={"The Berenstain Bears’ New Kitten"} width={210} height={316} /></a>
      </figure>
      <p>{"In "}<em><a href={"http://www.powells.com/biblio?isbn=9780060583576"} target="_blank" rel="noopener noreferrer">{"The Berenstain Bears’ New Kitten"}</a></em>{", the popular "}<a href={"http://en.wikipedia.org/wiki/Berenstain_Bears"} target="_blank" rel="noopener noreferrer">{"series"}</a>{" tackles the subject of stray animals. When Brother finds a kitten in a pond and brings her home, the whole family becomes involved in cleaning and comforting the animal. The Bear family elects to keep the kitten, but not before they take the feelings of Little Lady, the family dog, into account. Most of the story revolves around the decision-making process."}</p>
      <p>{"There are a few small things that vigilant animal activists will quibble with in this book, such as the fact that Brother is “hunting” frogs, the methodology by which Little Lady is temper tested around the kitten and that the kitten is introduced to the dog prior to her visit to the vet. One of the most glaring omissions in terms of how to "}<a href={"http://www.aspca.org/adoption/10-ways-to-help-stray-cats.html"} target="_blank" rel="noopener noreferrer">{"handle finding a stray kitten"}</a>{" is that the Bear family does not contact the local shelter to inquire about whether anyone is looking for a lost kitten."}</p>
      <p>{"Despite the above issues, there are many reasons to recommend this book. One reason is that the schoolyard bully is depicted as being very worried about the kitten and gives Brother the hat off of his head to use as a temporary kitten carrier– another reminder that animal lovers are a diverse lot and that we may find common ground when we least expect to. I also liked the Bear parents’ calm handling of Brother’s arrival with the kitten. I appreciated that the book shows Papa and Mama being open to adopting the stray and bringing the kitten to the vet as soon as possible. The ending also models a very important message: the vet encourages the Bear siblings to give Little Lady extra love and affection during the transition period as the family welcomes Gracie, the grey kitten, into their lives."}</p>
      <p>{"This feel-good book is a nice story for kitty lovers ages 4 and up."}</p>
    </div>
  );
}
