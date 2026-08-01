import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4097",
  "slug": "dog-blue",
  "url": "/reviews/dog-blue/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/02/06/dog-blue/",
  "title": "Dog Blue",
  "publishedAt": "2011-02-06",
  "publishedLabel": "February 6th, 2011",
  "excerpt": "Bertie loves the color blue, so much that he’s got a blue dog collar and pretends he has a bluedog. So when a “black and white, beautiful, spotted, perfect dog” comes into his life, he decides that he should give the…",
  "image": {
    "src": "/media/2011/01/9780763638818.jpg",
    "alt": "Dog Blue",
    "width": 210,
    "height": 240
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
      "name": "Animal Care",
      "slug": "animal-care",
      "url": "/topics/animal-care/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
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
      "name": "KIND Children's Honor Books",
      "slug": "kind-childrens-honor-books",
      "url": "/topics/kind-childrens-honor-books/"
    },
    {
      "name": "Polly Dunbar",
      "slug": "polly-dunbar",
      "url": "/topics/polly-dunbar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Bertie loves the color blue, so much that he’s got a blue dog collar and pretends he has a bluedog. So when a “black and white, beautiful, spotted, perfect dog” comes into his life, he decides that he should give the…",
    "image": "https://vegbooks.org/media/2011/01/9780763638818.jpg"
  },
  "previous": {
    "title": "Henry Hikes to Fitchburg",
    "url": "/reviews/henry-hikes-to-fitchburg/"
  },
  "next": {
    "title": "All the Wild Wonders: Poems of Our Earth",
    "url": "/reviews/wild/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/9780763638818.jpg"}><img src={"/media/2011/01/9780763638818.jpg"} alt={"Dog Blue"} width={210} height={240} /></a>
      </figure>
      <p>{"Bertie loves the color blue, so much that he’s got a blue dog collar and pretends he has a "}<em>{"blue"}</em>{"dog. So when a “black and white, beautiful, spotted, perfect dog” comes into his life, he decides that he should give the dog something blue: the name Blue!"}</p>
      <p>{"Kids will appreciate the simple affection of a boy for his dog, and parents will appreciate that the book models good caretaking. Bertie feeds Blue, pets him, takes him for walks, and plays with him. The only “gray area” in this book is how Blue came into Bertie’s life. The reader is told that Blue was a “tiny dog, all alone and looking for an owner.” While this "}<em>{"sounds"}</em>{" like a rescue situation, I would have appreciated if a brief visit to the animal shelter was involved."}</p>
      <p>{"Still, this book is a good read and has been recommended by several humane organizations, including the "}<a href={"http://www.humanesocietyofnortheastgeorgia.org/education/reading.php"} target="_blank" rel="noopener noreferrer">{"Humane Society of Northeast Georgia"}</a>{" and the now-defunct Humane Society Youth."}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
