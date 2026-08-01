import type { PostMetadata } from '../content/types';

export const article = {
  "id": "466",
  "slug": "the-lion-the-mouse",
  "url": "/reviews/the-lion-the-mouse/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/16/the-lion-the-mouse/",
  "title": "The Lion and the Mouse",
  "publishedAt": "2009-12-16",
  "publishedLabel": "December 16th, 2009",
  "excerpt": "Jerry Pinkney’s new book is a visual treat, using stunning illustrations to retell Aesop’s fable. Using only the occasional sound, Mr. Pinkney’s storybook lends itself to an interpretation that supports and…",
  "image": {
    "src": "/media/2009/12/lionmouse11.jpg",
    "alt": "The Lion and the Mouse",
    "width": 210,
    "height": 182
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
      "name": "Animal Rights Books for Kids",
      "slug": "animal-rights-books-for-kids",
      "url": "/topics/animal-rights-books-for-kids/"
    },
    {
      "name": "Caldecott Medal",
      "slug": "caldecott-medal",
      "url": "/topics/caldecott-medal/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Jerry Pinkney",
      "slug": "jerry-pinkney",
      "url": "/topics/jerry-pinkney/"
    },
    {
      "name": "Lion",
      "slug": "lion",
      "url": "/topics/lion/"
    },
    {
      "name": "Mouse",
      "slug": "mouse",
      "url": "/topics/mouse/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2009",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2009",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2009/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Jerry Pinkney’s new book is a visual treat, using stunning illustrations to retell Aesop’s fable. Using only the occasional sound, Mr. Pinkney’s storybook lends itself to an interpretation that supports and…",
    "image": "https://vegbooks.org/media/2009/12/lionmouse11.jpg"
  },
  "previous": {
    "title": "The Little Yellow Leaf",
    "url": "/reviews/the-yellow-leaf/"
  },
  "next": {
    "title": "Madeline",
    "url": "/reviews/madeline/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/12/lionmouse11.jpg"}><img src={"/media/2009/12/lionmouse11.jpg"} alt={"The Lion and the Mouse"} width={210} height={182} /></a>
      </figure>
      <p><a href={"http://www.jerrypinkneystudio.com/frameset.html"} target="_blank" rel="noopener noreferrer">{"Jerry Pinkney’s"}</a>{" new book is a visual treat, using stunning illustrations to retell Aesop’s fable. Using only the occasional sound, Mr. Pinkney’s storybook lends itself to an interpretation that supports and reinforces animal rights. The gist is this: the lion spares the mouse and the mouse frees the lion from a hunter’s net."}</p>
      <p>{"As the "}<a href={"http://www.nytimes.com/2009/11/08/books/review/Sutton-t.html"} target="_blank" rel="noopener noreferrer">{"New York Times Book Review"}</a>{" aptly points out, Mr. Pinkney seems right at home drawing animals who are animals, “not humans in disguise.” Now if only we could be as kind to the mice and lions as this book depicts them being to each other!"}</p>
      <p>{"Ages 4-8. For another perspective, check out the "}<a href={"http://www.schoollibraryjournal.com/blog/1790000379/post/190046819.html"} target="_blank" rel="noopener noreferrer">{"School Library Journal"}</a>{" or "}<a href={"http://100scopenotes.wordpress.com/2009/09/09/toon-review-the-lion-the-mouse-by-jerry-pinkney/"} target="_blank" rel="noopener noreferrer">{"Toon Review"}</a>{"."}</p>
    </div>
  );
}
