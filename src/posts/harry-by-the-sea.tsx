import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3518",
  "slug": "harry-by-the-sea",
  "url": "/reviews/harry-by-the-sea/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/12/harry-by-the-sea/",
  "title": "Harry by the Sea",
  "publishedAt": "2010-11-12",
  "publishedLabel": "November 12th, 2010",
  "excerpt": "At first glance, I thought that Harry By The Sea would become a favorite in our house, but after reading it once with our daughter, I quietly stuck it in our basement storage, hoping that it would soon be forgotten.…",
  "image": {
    "src": "/media/2010/11/harry-by-the-sea-pb.jpg",
    "alt": "Harry by the Sea",
    "width": 210,
    "height": 293
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
    {
      "name": "Books to Avoid",
      "slug": "books-to-avoid",
      "url": "/topics/books-to-avoid/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Gene Zion",
      "slug": "gene-zion",
      "url": "/topics/gene-zion/"
    },
    {
      "name": "Sandi Lancaster",
      "slug": "sandi-lancaster",
      "url": "/topics/sandi-lancaster/"
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
    "description": "At first glance, I thought that Harry By The Sea would become a favorite in our house, but after reading it once with our daughter, I quietly stuck it in our basement storage, hoping that it would soon be forgotten.…",
    "image": "https://vegbooks.org/media/2010/11/harry-by-the-sea-pb.jpg"
  },
  "previous": {
    "title": "ASPCA: The American Society for the Prevention of Cruelty to Animals",
    "url": "/reviews/aspca-the-american-society-for-the-prevention-of-cruelty-to-animals/"
  },
  "next": {
    "title": "I Can Save the Earth",
    "url": "/reviews/i-can-save-the-earth/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/harry-by-the-sea-pb.jpg"}><img src={"/media/2010/11/harry-by-the-sea-pb.jpg"} alt={"Harry by the Sea"} width={210} height={293} /></a>
      </figure>
      <p>{"At first glance, I thought that "}<em><a href={"http://www.commonsensemedia.org/book-reviews/Harry-by-Sea.html"} target="_blank" rel="noopener noreferrer">{"Harry By The Sea"}</a></em>{" would become a favorite in our house, but after reading it once with our daughter, I quietly stuck it in our basement storage, hoping that it would soon be forgotten."}</p>
      <p>{"The story starts with Harry the dog going to the beach with his family. There’s not enough room for him under his family’s umbrella, so his family tells him to leave. Throughout the book, all the characters that Harry encounters are less than kind to him – telling him to “get lost,” etc. When Harry gets completely covered with seaweed, he is mistaken for a sea monster, and at this point the people he encounters become even more unkind. The beach attendants try to capture him to take him to an aquarium. At the end of the story, after he becomes clean and recognizable again, he reunites with his family, who finally decide to get a bigger umbrella so Harry can be included."}</p>
      <p>{"The family’s change of heart at the end feels like too little too late, especially when it seems like the reader is supposed to find it funny that all the people around Harry are cruel to him. Vegetarian families may also dislike the recurring mention of hot dogs and hamburgers throughout the book. And we also could have done without seeing one of the characters referred to as “a fat lady.” All in all, we felt like we were better off putting this book in basement storage rather in our daughter’s bookcase."}</p>
    </div>
  );
}
