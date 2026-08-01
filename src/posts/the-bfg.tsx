import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10398",
  "slug": "the-bfg",
  "url": "/reviews/the-bfg/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/08/30/the-bfg/",
  "title": "The BFG",
  "publishedAt": "2016-08-30",
  "publishedLabel": "August 30th, 2016",
  "excerpt": "Inspired by the movie that was recently released, my seven-year-old daughter and I read The BFG together. It’s a fun read and many times my daughter laughed out loud. From Roald Dahl, the author of Charlie and the…",
  "image": {
    "src": "/media/2016/08/the-bfg-movie-tie-in-1.jpg",
    "alt": "The BFG Movie Tie-In (1)",
    "width": 549,
    "height": 840
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Read Aloud",
      "slug": "read-aloud",
      "url": "/topics/read-aloud/"
    },
    {
      "name": "Roald Dahl",
      "slug": "roald-dahl",
      "url": "/topics/roald-dahl/"
    },
    {
      "name": "Vegan Protagonist",
      "slug": "vegan-protagonist",
      "url": "/topics/vegan-protagonist/"
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
    "description": "Inspired by the movie that was recently released, my seven-year-old daughter and I read The BFG together. It’s a fun read and many times my daughter laughed out loud. From Roald Dahl, the author of Charlie and the…",
    "image": "https://vegbooks.org/media/2016/08/the-bfg-movie-tie-in-1.jpg"
  },
  "previous": {
    "title": "The BFG (2016)",
    "url": "/reviews/the-bfg-2016/"
  },
  "next": {
    "title": "Mighty Jack",
    "url": "/reviews/mighty-jack/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Inspired by "}<a href={"/reviews/the-bfg-2016/"} target="_blank" rel="noopener noreferrer">{"the movie that was recently released"}</a>{", my seven-year-old daughter and I read "}<em>{"The BFG"}</em>{" together. It’s a fun read and many times my daughter laughed out loud."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/08/the-bfg-movie-tie-in-1.jpg"} alt={"The BFG Movie Tie-In (1)"} width={549} height={840} />
      </figure>
      <p>{"From Roald Dahl, the author of "}<em>{"Charlie and the Chocolate Factory"}</em>{" and "}<em>{"The Magic Finger"}</em>{", this novel tells the story of a little girl named Sophie who is captured in the night by a giant and whisked away to giant country. Luckily for Sophie, this giant is a Big Friendly Giant (BFG), unlike the other giants who live in giant country who love to eat humans. Sophie and the BFG become quick friends and devise a plan to capture the human eating giants, saving countless humans from being meals. The story is humorous, fun, and just a little bit suspenseful and made for a really enjoyable read aloud, especially when paired with a trip to see the movie in the theater."}</p>
      <p>{"We really enjoyed the vegetarian themes throughout. At first Sophie is scared that The BFG plans to eat her. He scoffs at this idea, saying that he would never eat a human, even though this is what all the other giants do. He is so committed to his vegan lifestyle that he resigns himself to eat the only food available to him in giant country–the horrendous snozzcumber. He is repulsed by its taste, and yet he eats it day in and day out because he doesn’t want to take life in order to live. In the course of this conversation, Sophie starts to feel superior to the human-eating giants until the BFG reminds her that she eats pigs and how does that make the pigs feel?"}</p>
      <p>{"Sophie is confused as to why the BFG took her if he doesn’t want to eat her. He explains that he captured her because she saw him. He explains that his existence must remain a secret because humans love to put nonhumans in cages just to be stared at, and what a boring life that would be, a great anti-captivity statement that is echoed throughout."}</p>
      <p>{"After all of these great animal-friendly messages peppered throughout, I was disappointed that when the BFG and Sophie meet the queen of England near the end if the book, she feeds them a breakfast of sausages, bacon, and eggs."}</p>
      <p>{"I would definitely recommend this book to vegetarian and vegan families. Many if the themes are great conversation starters. It’s best as a read-aloud because the strange way the giants talk is difficult to read for newer readers. My daughter loves the flatulence humor but this may not be for everyone. Also there are outdated gender roles that are uncomfortable for me, but not too severe."}</p>
      <p>{"Ages 6-12."}</p>
    </div>
  );
}
