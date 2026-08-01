import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5623",
  "slug": "gowanus-dogs",
  "url": "/reviews/gowanus-dogs/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/03/gowanus-dogs/",
  "title": "Gowanus Dogs",
  "publishedAt": "2011-08-03",
  "publishedLabel": "August 3rd, 2011",
  "excerpt": "Dark subject matter and equally dark drawings comprise Gowanus Dogs, the story of a family of homeless dogs and the homeless man who changes their lives and whose life is in turn changed through knowing them. Though…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Gowanus Dogs",
    "width": 210,
    "height": 315
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
      "name": "Brooklyn",
      "slug": "brooklyn",
      "url": "/topics/brooklyn/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homeless Animals",
      "slug": "homeless-animals",
      "url": "/topics/homeless-animals/"
    },
    {
      "name": "Homelessness",
      "slug": "homelessness",
      "url": "/topics/homelessness/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Jonathan Frost",
      "slug": "jonathan-frost",
      "url": "/topics/jonathan-frost/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
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
    "description": "Dark subject matter and equally dark drawings comprise Gowanus Dogs, the story of a family of homeless dogs and the homeless man who changes their lives and whose life is in turn changed through knowing them. Though…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Living Green: A Turtle’s Quest for a Cleaner Planet",
    "url": "/reviews/living-green/"
  },
  "next": {
    "title": "The Story of Doctor Dolittle",
    "url": "/reviews/the-story-of-doctor-doolitte/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Gowanus Dogs"} width={210} height={315} /></a>
      </figure>
      <p>{"Dark subject matter and equally dark drawings comprise "}<a href={"http://www.amazon.com/gp/product/0374310580/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0374310580"} target="_blank" rel="noopener noreferrer"><em>{"Gowanus Dogs"}</em></a>{", the story of a family of homeless dogs and the homeless man who changes their lives and whose life is in turn changed through knowing them. Though the illustrations remain in the same shades-of-grey tenor throughout the book, our spirits are lifted by the story."}</p>
      <p>{"A mother dog and her puppies make their home in an old mixing tank in the industrial area of "}<a href={"http://en.wikipedia.org/wiki/Gowanus_Canal"} target="_blank" rel="noopener noreferrer">{"Gowanus Canal, Brookyn"}</a>{", while the main human character lives in a cardboard box. Not only does this book provide an age-appropriate and quasi-realistic look at the plight of both homeless dogs and people, but it also does an great job of painting a picture of what life in this urban industrial area is like, between depictions of a concrete company, oil boats pumping their cargo into underground holding tanks and life under the Brooklyn-Queens Expressway. It also illustrates some incredibly compassionate and even risky acts that exemplify the best of human (and canine) nature."}</p>
      <p>{"Some of the scenes are set at an animal shelter, where the man brings one of the puppies when he realizes she is ill. Though some of us have had challenging experiences in shelters, this book gives a fairly positive spin on what is often a negative experience. A spirit of kindness pervades this book, as many people do kind deeds for one another and the dogs. The book is full of breaks and opportunities for the dog family and the nameless man, who, by the end of our story, is no longer homeless."}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
