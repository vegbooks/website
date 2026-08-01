import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11001",
  "slug": "hello-my-name-is-ruby",
  "url": "/reviews/hello-my-name-is-ruby/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/08/05/hello-my-name-is-ruby/",
  "title": "Hello, My Name is Ruby",
  "publishedAt": "2020-08-05",
  "publishedLabel": "August 5th, 2020",
  "excerpt": "HELLO, MY NAME IS RUBY by Philip C. Stead is a charming story of a tiny bird with a big heart who meets many new friends with different personalities and skills. Ruby, the title character, travels around introducing…",
  "image": {
    "src": "/media/2020/08/hello-my-name-is-ruby.jpg",
    "alt": "Hello, My Name is Ruby",
    "width": 341,
    "height": 400
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hello My Name is Ruby",
      "slug": "hello-my-name-is-ruby",
      "url": "/topics/hello-my-name-is-ruby/"
    },
    {
      "name": "Philip C. Stead",
      "slug": "philip-c-stead",
      "url": "/topics/philip-c-stead/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
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
    "description": "HELLO, MY NAME IS RUBY by Philip C. Stead is a charming story of a tiny bird with a big heart who meets many new friends with different personalities and skills. Ruby, the title character, travels around introducing…",
    "image": "https://vegbooks.org/media/2020/08/hello-my-name-is-ruby.jpg"
  },
  "previous": {
    "title": "Weird, Wild, Amazing! Exploring the Incredible World of Animals",
    "url": "/reviews/weird-wild-amazing-exploring-the-incredible-world-of-animals/"
  },
  "next": {
    "title": "Poopendous!",
    "url": "/reviews/poopendous/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2020/08/hello-my-name-is-ruby.jpg"}><img src={"/media/2020/08/hello-my-name-is-ruby.jpg"} alt={"Hello, My Name is Ruby"} width={341} height={400} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781596438095"} target="_blank" rel="noopener noreferrer">{"HELLO, MY NAME IS RUBY"}</a>{" by Philip C. Stead is a charming story of a tiny bird with a big heart who meets many new friends with different personalities and skills. Ruby, the title character, travels around introducing herself to fellow birds of all sizes, hoping to get to know them better. The illustrations are colorful and childlike, with just enough detail to entice small readers to inspect closely and admire feathers and shapes and feet and beaks. HELLO, MY NAME IS RUBY is a wonderful book to share before a child starts on a new adventure with enthusiasm or with shyness, with positive results or with disappointment."}</p>
      <p>{"Ruby’s perseverance and sweetness would be enough to carry this picture book, but the supporting characters make sure that everyone will find someone to champion in the story. None of the birds are labeled by species, but by attributes. A colorful Kiwi shows Ruby that not all birds fly to get around, and a disinterested Peacock makes Ruby sad for a moment, allowing us to see how Ruby handles rejection: with a sad song. Each interaction teaches Ruby something about the world and new skills, until finally Ruby finds an entire flock of birds just like her and introduces her new friends to the flock (peacock excepted…)."}</p>
      <p>{"The illustrations have visible lines and “squiggles” throughout, and the colors don’t always stay inside the lines perfectly. Children tend to respond well to this style because they recognize their own tendencies in it. Despite the intentional roughness, emotions jump out at readers. When Ruby is excited, it’s clear she is happy. The curious Ostrich really looks curious, and even the Kiwi has a perplexed look when asking, “What is flying?”"}</p>
      <p>{"Finding friends and a place for oneself can be a challenge, and "}<a href={"https://www.indiebound.org/book/9781596438095"} target="_blank" rel="noopener noreferrer">{"HELLO, MY NAME IS RUBY"}</a>{" uses little Ruby to show children that while the world is a big place with lots of different types of friends, we each have a place in it. Highly recommended."}</p>
    </div>
  );
}
