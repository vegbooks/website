import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9269",
  "slug": "brother-bear",
  "url": "/reviews/brother-bear/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/14/brother-bear/",
  "title": "Brother Bear (2003)",
  "publishedAt": "2013-12-14",
  "publishedLabel": "December 14th, 2013",
  "excerpt": "Wow, I was blown away by this Disney movie. My daughter and I enjoyed this as a movie night feature. It is an intense movie and she reacted strongly to it, but days later she was still talking about it and she says…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "width": 210,
    "height": 320
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family Films",
      "slug": "family-films",
      "url": "/topics/family-films/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Wow, I was blown away by this Disney movie. My daughter and I enjoyed this as a movie night feature. It is an intense movie and she reacted strongly to it, but days later she was still talking about it and she says…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Almost an Animal Alphabet",
    "url": "/reviews/almost-an-animal-alphabet/"
  },
  "next": {
    "title": "There Are No Animals in This Book (Only Feelings)",
    "url": "/reviews/no-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Movie pic"} width={210} height={320} /></a>
      </figure>
      <p>{"Wow, I was blown away by this Disney movie. My daughter and I enjoyed this as a movie night feature. It is an intense movie and she reacted strongly to it, but days later she was still talking about it and she says it is one of her favorite movies."}</p>
      <p>{"The movie ("}<a href={"http://www.amazon.com/gp/product/B00005JMFH/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005JMFH&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") tells a story of a spirited Inuit boy Kenai who lived long ago. When his older brother Sitka is killed in a fight with a bear, Kenai seeks revenge by killing the bear. This angers the spirits, including Sitka. Sitka and the other spirits transform Kenai into a bear until he can show compassion and love bears. As a bear, Kenai befriends a bear cub Koda who has been abandoned by his mother. Through his journey and his friendship with Koda, Kenai’s perceptions of bears changes from believing they are unthinking monsters to realizing they are sentient beings with families they love. I won’t give away the twist but it is truly heart-wrenching."}</p>
      <p>{"“Brother Bear” was nominated for an Academy Award in 2004 for best animated feature, losing out to another movie beloved by animal lovers, “"}<a href={"/reviews/finding-nemo/"}>{"Finding Nemo"}</a>{".” It is a beautiful movie that I would definitely recommend for movie night for the entire family. "}<a href={"http://www.commonsensemedia.org/movie-reviews/brother-bear"} target="_blank" rel="noopener noreferrer">{"Commonsense Media"}</a>{" recommends it for ages 5+. I enjoyed it with my daughter who is four and a half."}</p>
    </div>
  );
}
