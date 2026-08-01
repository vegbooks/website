import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6163",
  "slug": "uncle-andys-cats",
  "url": "/reviews/uncle-andys-cats/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/04/uncle-andys-cats/",
  "title": "Uncle Andy’s Cats",
  "publishedAt": "2011-10-04",
  "publishedLabel": "October 4th, 2011",
  "excerpt": "Uncle Andy’s Cats is the imaginative story of artist Andy Warhol’s life with many, many cats. Young cat lovers will giggle at the silliness of 25 cats all named Sam running rampant through Andy Warhol’s home, but…",
  "image": {
    "src": "/media/2011/10/s-cats.jpg",
    "alt": "Uncle Andy’s Cats",
    "width": 210,
    "height": 270
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
      "name": "Andy Warhol",
      "slug": "andy-warhol",
      "url": "/topics/andy-warhol/"
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "James Warhola",
      "slug": "james-warhola",
      "url": "/topics/james-warhola/"
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
    "description": "Uncle Andy’s Cats is the imaginative story of artist Andy Warhol’s life with many, many cats. Young cat lovers will giggle at the silliness of 25 cats all named Sam running rampant through Andy Warhol’s home, but…",
    "image": "https://vegbooks.org/media/2011/10/s-cats.jpg"
  },
  "previous": {
    "title": "You Will Be My Friend",
    "url": "/reviews/you-will-be-my-friend/"
  },
  "next": {
    "title": "Care Bears to the Rescue (2011)",
    "url": "/reviews/care-bears-to-the-rescue/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/s-cats.jpg"}><img src={"/media/2011/10/s-cats.jpg"} alt={"Uncle Andy’s Cats"} width={210} height={270} /></a>
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0399251804/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0399251804"} target="_blank" rel="noopener noreferrer">{"Uncle Andy’s Cats"}</a></em>{" is the imaginative story of artist Andy Warhol’s life with many, many cats. Young cat lovers will giggle at the silliness of 25 cats all named Sam running rampant through Andy Warhol’s home, but animal advocates will wince at the unapologetic, unexplained depiction of overbreeding. Eventually, author "}<a href={"http://www.jameswarhola.com/childlit.html"} target="_blank" rel="noopener noreferrer">{"James Warhola’s"}</a>{" (yes, he is one of Andy Warhol’s nephews) Uncle Andy realizes that he must reduce the size of his cat population, but even the superstar artist is hard-pressed to figure out how to do so. Uncle Andy’s solution is to collaborate with his mother on a series of "}<a href={"http://www.christies.com/features/2009-September-London-Andy-Warhol-25-Cats-Named-Sa-102-1.aspx"} target="_blank" rel="noopener noreferrer">{"books about cats"}</a>{" and popularize the idea of having a Warhol cat. The idea is successful, everyone wants a cat and by the end of the story, only the original two cats remain at the Warhol residence."}</p>
      <p>{"If only finding homes for cats were so straightforward! It isn’t. "}<a href={"http://www.aspca.org/about-us/faq/pet-statistics.aspx"} target="_blank" rel="noopener noreferrer">{"Seven out of ten cats in shelters are euthanized."}</a></p>
      <p>{"Faaaaabulous author and commentator "}<a href={"/reviews/beautiful-yetta-the-yiddish-chicken/"}>{"Daniel Pinkwater"}</a>{"doesn’t share my concerns about this story and wholeheartedly recommended this book to NPR host Scott Simon in 2009. Have a listen "}<a href={"http://www.npr.org/templates/story/story.php?storyId=112779118"} target="_blank" rel="noopener noreferrer">{"here"}</a>{" to the two of them discussing this story and sharing in a reading of it — I do love their rapport when they get together to discuss children’s books!"}</p>
      <p>{"Of course, this book provides a great framework for a discussion of why we spay and neuter animals. The silly story and engaging pictures keep a child’s interest, but so too do the imaginative plot twists and fun illustrations in the book "}<em><a href={"/reviews/cats/"}>{"It’s Raining Cats and Cats"}</a></em>{", which contains a much more valuable — and lifesaving — message of spay and neuter."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
