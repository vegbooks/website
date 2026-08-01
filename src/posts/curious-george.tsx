import type { PostMetadata } from '../content/types';

export const article = {
  "id": "387",
  "slug": "curious-george",
  "url": "/reviews/curious-george/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/05/curious-george/",
  "title": "Curious George",
  "publishedAt": "2009-12-05",
  "publishedLabel": "December 5th, 2009",
  "excerpt": "Revisiting the original book about everyone’s favorite chimpanzee, Curious Georgeby Margret and H.A. Ray, I was surprised by some of the details I’d forgotten as a child. Of course, The Man with the Yellow Hat baits…",
  "image": {
    "src": "/media/2010/01/0395159938-lres1.jpg",
    "alt": "Curious George",
    "width": 219,
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
      "name": "1940s Childrens Literature",
      "slug": "1940s-childrens-literature",
      "url": "/topics/1940s-childrens-literature/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Margret and H.A. Ray",
      "slug": "margret-and-h-a-ray",
      "url": "/topics/margret-and-h-a-ray/"
    },
    {
      "name": "Monkeys",
      "slug": "monkeys",
      "url": "/topics/monkeys/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "Revisiting the original book about everyone’s favorite chimpanzee, Curious Georgeby Margret and H.A. Ray, I was surprised by some of the details I’d forgotten as a child. Of course, The Man with the Yellow Hat baits…",
    "image": "https://vegbooks.org/media/2010/01/0395159938-lres1.jpg"
  },
  "previous": {
    "title": "Five Lost Chicks",
    "url": "/reviews/five-lost-chicks/"
  },
  "next": {
    "title": "Books I’m Dying to Read",
    "url": "/reviews/books-im-dying-to-read/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/01/0395159938-lres1.jpg"}><img src={"/media/2010/01/0395159938-lres1.jpg"} alt={"Curious George"} width={219} height={270} /></a>
      </figure>
      <p>{"Revisiting the original book about everyone’s "}<a href={"http://blog.seattlepi.com/tv/archives/105365.asp"} target="_blank" rel="noopener noreferrer">{"favorite chimpanzee"}</a>{", "}<em>{"Curious George"}</em>{"by Margret and H.A. Ray, I was surprised by some of the details I’d forgotten as a child. Of course, The Man with the Yellow Hat baits and captures George, removing him from his African homeland and "}<a href={"http://www.savewildelephants.com/"} target="_blank" rel="noopener noreferrer">{"ultimately placing him in a zoo"}</a>{" — there’s that. But there is also the bit where George smokes a pipe and another part where George is placed in prison."}</p>
      <p>{"I don’t think there’s anyone who doesn’t love Curious George’s sense of adventure, but there’s lots to talk about after you read the original book. What, for example, is the difference between the prison and the zoo? Why would George love one and not the other? (I’d also throw in a quick chat about the dangers of smoking.)"}</p>
      <p>{"Ages 4-8."}</p>
      <p>{"A related note: There was "}<a href={"http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2006/02/10/GEORGE.TMP"} target="_blank" rel="noopener noreferrer">{"a lot of controversy"}</a>{" surrounding the release of the Curious George movie several years ago. What did you think? I’ve yet to see it, but kiddo and I love Jack Johnson’s soundtrack."}</p>
    </div>
  );
}
