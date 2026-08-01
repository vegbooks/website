import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4515",
  "slug": "tadpoles-promise",
  "url": "/reviews/tadpoles-promise/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/21/tadpoles-promise/",
  "title": "Tadpole’s Promise",
  "publishedAt": "2011-04-21",
  "publishedLabel": "April 21st, 2011",
  "excerpt": "This book would make a fantastic gift for a dear friend going through a particularly hard breakup. But as a kids’ book? I’m skeptical. What I do know is that vegan and vegetarian kids are unlikely to enjoy the way…",
  "image": {
    "src": "/media/2011/04/s-promise-cover.jpg",
    "alt": "Tadpole’s Promise",
    "width": 210,
    "height": 166
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
      "name": "Butterflies",
      "slug": "butterflies",
      "url": "/topics/butterflies/"
    },
    {
      "name": "Caterpillars",
      "slug": "caterpillars",
      "url": "/topics/caterpillars/"
    },
    {
      "name": "Controversial Kids Books",
      "slug": "controversial-kids-books",
      "url": "/topics/controversial-kids-books/"
    },
    {
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Jeanne Willis",
      "slug": "jeanne-willis",
      "url": "/topics/jeanne-willis/"
    },
    {
      "name": "Metamorphosis",
      "slug": "metamorphosis",
      "url": "/topics/metamorphosis/"
    },
    {
      "name": "Predators",
      "slug": "predators",
      "url": "/topics/predators/"
    },
    {
      "name": "Tadpoles",
      "slug": "tadpoles",
      "url": "/topics/tadpoles/"
    },
    {
      "name": "Tony Ross",
      "slug": "tony-ross",
      "url": "/topics/tony-ross/"
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
    "description": "This book would make a fantastic gift for a dear friend going through a particularly hard breakup. But as a kids’ book? I’m skeptical. What I do know is that vegan and vegetarian kids are unlikely to enjoy the way…",
    "image": "https://vegbooks.org/media/2011/04/s-promise-cover.jpg"
  },
  "previous": {
    "title": "We Are Extremely Very Good Recyclers",
    "url": "/reviews/we-are-extremely-very-good-recyclers/"
  },
  "next": {
    "title": "Dog of Discovery: A Newfoundland’s Adventures with Lewis and Clark",
    "url": "/reviews/dog-of-discovery-a-newfoundlands-adventures-with-lewis-and-clark/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/s-promise-cover.jpg"}><img src={"/media/2011/04/s-promise-cover.jpg"} alt={"Tadpole’s Promise"} width={210} height={166} /></a>
      </figure>
      <p>{"This book would make a fantastic gift for a dear friend going through a particularly hard breakup. But as a kids’ book? I’m skeptical. What I do know is that vegan and vegetarian kids are unlikely to enjoy the way this one ends."}</p>
      <p>{"Like Lane Smith’s "}<em><a href={"/reviews/its-a-book/"}>{"It’s a Book"}</a></em>{", this picture book from author Jeanne Willis and illustrator Tony Ross inspires strong feelings in people. Its critics (count me as one) contend that it’s not really suitable for children, going so far as to call "}<a href={"http://www.publishersweekly.com/978-0-689-86524-4"} target="_blank" rel="noopener noreferrer">{"a turn in the plot “sadistic"}</a>{",” but "}<a href={"http://www.goodreads.com/book/show/669839.Tadpole_s_Promise_Bccb_Blue_Ribbon_Picture_Book_Awards"} target="_blank" rel="noopener noreferrer">{"its defenders"}</a>{" tell us to, well, just lighten up. Let me tell you the gist of the plot, so you can decide which side you’re likely to be on."}</p>
      <p>{"A tadpole and caterpillar fall in love, and promise never to change. So when the tadpole begins growing legs and eventually turns into a frog, the caterpillar shuns him, claiming he has broken her heart. Then — you guessed it — the caterpillar undergoes her own metamorphosis and decides to forgive him. The new butterfly approaches the frog to ask after her lost love, and he “leap[s] up and swallow[s] her in one great gulp.” The book ends with the tadpole-turned-frog pining after the creature he has unknowingly just eaten."}</p>
      <p>{"Don’t get me wrong. It’s not the animal-eating "}<em>{"per se"}</em>{" that gets me. On several occasions, I’ve defended the "}<a href={"/reviews/family-pack/"}>{"portrayal of predators in children’s books"}</a>{". The humor in this book lies in the anthropomorphism of animals, and as an adult, I can see how it’s funny to poke fun at that by reminding the reader that in the real world, frogs eat butterflies. It’s just that I don’t think most kids of a herbivorous persuasion would really appreciate this particular joke, nor do I think they really deserve to be as jaded about love as Willis seems to be."}</p>
      <p>{"In my book, this one’s just for adults."}</p>
    </div>
  );
}
