import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10965",
  "slug": "how-to-speak-dog",
  "url": "/reviews/how-to-speak-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/04/22/how-to-speak-dog/",
  "title": "How To Speak Dog",
  "publishedAt": "2020-04-22",
  "publishedLabel": "April 22nd, 2020",
  "excerpt": "HOW TO SPEAK DOG by Aline Alexander Newman and Gary Weitzman, D.V.M. is irreverent and nutty and fun and incredibly informative. With scores of body language, barking, and general dog-behavior examples to learn, any…",
  "image": {
    "src": "/media/2020/04/how-to-speak-dog.jpg",
    "alt": "How To Speak Dog",
    "width": 202,
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
      "name": "Aline Alexander Newman",
      "slug": "aline-alexander-newman",
      "url": "/topics/aline-alexander-newman/"
    },
    {
      "name": "dog behaviors",
      "slug": "dog-behaviors",
      "url": "/topics/dog-behaviors/"
    },
    {
      "name": "dog facts",
      "slug": "dog-facts",
      "url": "/topics/dog-facts/"
    },
    {
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Gary Weitzman MD",
      "slug": "gary-weitzman-md",
      "url": "/topics/gary-weitzman-md/"
    },
    {
      "name": "How to Speak Dog",
      "slug": "how-to-speak-dog",
      "url": "/topics/how-to-speak-dog/"
    },
    {
      "name": "National Geographic",
      "slug": "national-geographic",
      "url": "/topics/national-geographic/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "HOW TO SPEAK DOG by Aline Alexander Newman and Gary Weitzman, D.V.M. is irreverent and nutty and fun and incredibly informative. With scores of body language, barking, and general dog-behavior examples to learn, any…",
    "image": "https://vegbooks.org/media/2020/04/how-to-speak-dog.jpg"
  },
  "previous": {
    "title": "One Little Bag: An Amazing Journey",
    "url": "/reviews/one-little-bag-an-amazing-journey/"
  },
  "next": {
    "title": "The Unicorn Came to Dinner",
    "url": "/reviews/the-unicorn-came-to-dinner/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2020/04/how-to-speak-dog.jpg"}><img src={"/media/2020/04/how-to-speak-dog.jpg"} alt={"How To Speak Dog"} width={202} height={300} /></a>
      </figure>
      <p><strong><a href={"https://www.indiebound.org/book/9781426313738"} target="_blank" rel="noopener noreferrer">{"HOW TO SPEAK DOG"}</a></strong>{" by Aline Alexander Newman and Gary Weitzman, D.V.M. is irreverent and nutty and fun and incredibly informative. With scores of body language, barking, and general dog-behavior examples to learn, any child who adores dogs will be absorbed and entertained in perpetuity. As with most National Geographic children’s publications, the photographs and graphics are sometimes silly and sometimes adorable, but always kid-friendly and on topic."}</p>
      <p>{"This colorful book explains sweet doggy behaviors like putting a pay on your knee and licking your face, and it goes into concerning actions like ear scratching and chewing the woodwork around your home. Everything is explained in easy-to-understand language and images. Important for children — really everyone — there is also a page about greeting a “new” dog that includes how to approach and handle meeting a dog in public. One important section in “Body Talk” is the “Wiggles Away From You” tips. Children especially can get into sticky situations with dogs, and the authors explain how a dog may feel with a relatable comparison: “Hugging might feel as scary to a dog as it would to you if a bigger kid sat on your chest and refused to get off.” Yikes!"}</p>
      <p>{"There is so much to learn in "}<a href={"https://www.indiebound.org/book/9781426313738"} target="_blank" rel="noopener noreferrer"><strong>{"How to Speak Dog"}</strong></a>{", and families will refer back to the different sections time and again. The different types of barks and tail wags and facial expressions. Younger children can focus on the photos and graphics and “fun facts,” while older children and adults can learn about the nuances of canine behavior and dog facts."}</p>
    </div>
  );
}
