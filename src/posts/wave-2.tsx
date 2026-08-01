import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5536",
  "slug": "wave-2",
  "url": "/reviews/wave-2/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/05/wave-2/",
  "title": "Wave",
  "publishedAt": "2011-07-05",
  "publishedLabel": "July 5th, 2011",
  "excerpt": "A little girl’s visit to the beach is masterfully told without a word (aside from the title). Using only charcoal lines and blue, white, and grey paint, Suzy Lee creates an expressive dialogue between the girl and…",
  "image": {
    "src": "/media/2010/09/9780811859240.jpg",
    "alt": "Wave",
    "width": 210,
    "height": 123
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
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "A little girl’s visit to the beach is masterfully told without a word (aside from the title). Using only charcoal lines and blue, white, and grey paint, Suzy Lee creates an expressive dialogue between the girl and…",
    "image": "https://vegbooks.org/media/2010/09/9780811859240.jpg"
  },
  "previous": {
    "title": "Manfish: A Story of Jacques Cousteau",
    "url": "/reviews/manfish-a-story-of-jacques-cousteau/"
  },
  "next": {
    "title": "Wheels of Change",
    "url": "/reviews/wheels-of-change/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/9780811859240.jpg"}><img src={"/media/2010/09/9780811859240.jpg"} alt={"Wave"} width={210} height={123} /></a>
      </figure>
      <p>{"A little girl’s visit to the beach is masterfully told without a word (aside from the title). Using only charcoal lines and blue, white, and grey paint, Suzy Lee creates an expressive dialogue between the girl and the ocean. Conspiring shorebirds humorously echo the girl’s actions and add interest and playfulness to the wordless dialogue. The birds and girl are drawn in a minimalistic but deliberate black line and shading to convey dynamic expression and movement. In contrast, the ocean waves, in a cerulean blue (the only color in the book), appear carelessly painted and capture the wildness of nature. The elongated horizontal shape of the book cleverly allows for the panoramic view of the ocean and highlights the beach landscape. One can almost hear and smell the ocean in this book."}</p>
      <p>{"Although my just-learning-to-read daughter appeared slightly baffled at a book without words, she soon caught the drift and enjoyed reading the pictures. I loved the Zen simplicity of this picture book which truly speaks a thousand words without a single letter."}</p>
      <p>{"Age 3+."}</p>
      <p><strong>{"Note: We don’t usually double up on reviews, but we thought you’d appreciate hearing an artist’s take on "}<em>{"Wave."}</em>{" To read Jessica’s review of the book from last year, click "}<a href={"/reviews/wave/"}>{"here"}</a>{"."}</strong></p>
    </div>
  );
}
