import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10637",
  "slug": "an-american-tail-1986",
  "url": "/reviews/an-american-tail-1986/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/11/12/an-american-tail-1986/",
  "title": "An American Tail (1986)",
  "publishedAt": "2018-11-12",
  "publishedLabel": "November 12th, 2018",
  "excerpt": "As children of the 80’s, my wife and I are very familiar with Fievel and his family. We can belt out Somewhere Out There with the best of them. When I saw An American Tail on a list of recommended movies about…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317
  },
  "categories": [
    {
      "name": "Movies",
      "slug": "movies",
      "url": "/movies/"
    }
  ],
  "tags": [
    {
      "name": "An American Tail",
      "slug": "an-american-tail",
      "url": "/topics/an-american-tail/"
    },
    {
      "name": "immigrant experience",
      "slug": "immigrant-experience",
      "url": "/topics/immigrant-experience/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "vegetarians in films",
      "slug": "vegetarians-in-films",
      "url": "/topics/vegetarians-in-films/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "As children of the 80’s, my wife and I are very familiar with Fievel and his family. We can belt out Somewhere Out There with the best of them. When I saw An American Tail on a list of recommended movies about…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "How Many Hugs? and If Animals Said I Love You",
    "url": "/reviews/how-many-hugs-and-if-animals-said-i-love-you/"
  },
  "next": {
    "title": "Wild Orca: The Oldest, Wisest Whale in the World",
    "url": "/reviews/wild-orca-the-oldest-wisest-whale-in-the-world/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"As children of the 80’s, my wife and I are very familiar with Fievel and his family. We can belt out "}<em>{"Somewhere Out There"}</em>{" with the best of them. When I saw "}<a href={"https://film.avclub.com/coming-to-america-19-movies-about-u-s-immigration-1798257916"} target="_blank" rel="noopener noreferrer"><em>{"An American Tail"}</em>{" on a list of recommended movies"}</a>{" about immigrants in America, I decided to watch it with my children for family movie night."}</p>
      <p>{"I’m always filled with trepidation when revisiting a childhood favorite. Will it hold up? I’m here to tell you that this one does! My kids were singing "}<em>{"There Are No Cats in America!"}</em>{" for days. The story was understandable for my 4 year old but still interesting for my 9 year old. And it was fun and funny and exciting, which made it a big hit for family movie night."}</p>
      <p>{"What I hadn’t remembered, but was happily surprised by, was that a major character in this film is a vegetarian. My family cheered when Tiger, the massive cat that guards Feivel’s cage after he’s captured by the cat gang, lets Feivel free because Tiger’s a vegetarian. Tiger and Feivel become fast friends, and Tiger even helps him find his family."}</p>
      <p>{"Common Sense Media recommends this movie for ages 5+. It was enjoyed by my kids ages 4 and 9. I highly recommend this movie for your entire family."}</p>
    </div>
  );
}
