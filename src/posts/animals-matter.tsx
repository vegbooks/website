import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9212",
  "slug": "animals-matter",
  "url": "/reviews/animals-matter/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/23/animals-matter/",
  "title": "Animals Matter: A Biologist Explains Why We Should Treat Animals with Compassion and Respect",
  "publishedAt": "2013-11-23",
  "publishedLabel": "November 23rd, 2013",
  "excerpt": "This is a book that has been written for those in high school and beyond. It provides great insight into the many ways that animals are impacted by humans. Not only does it provide facts and information, but it also…",
  "image": {
    "src": "/media/2013/11/9781590305225.jpg",
    "alt": "9781590305225",
    "width": 210,
    "height": 315
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Jane Goodall",
      "slug": "jane-goodall",
      "url": "/topics/jane-goodall/"
    },
    {
      "name": "Marc Bekoff",
      "slug": "marc-bekoff",
      "url": "/topics/marc-bekoff/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    },
    {
      "name": "Young Adult",
      "slug": "young-adult",
      "url": "/topics/young-adult/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "This is a book that has been written for those in high school and beyond. It provides great insight into the many ways that animals are impacted by humans. Not only does it provide facts and information, but it also…",
    "image": "https://vegbooks.org/media/2013/11/9781590305225.jpg"
  },
  "previous": {
    "title": "If You Decide to Go to the Moon",
    "url": "/reviews/if-you-decide-to-go-to-the-moon/"
  },
  "next": {
    "title": "Rock-a-Bye Room",
    "url": "/reviews/rock-a-bye-room/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/9781590305225.jpg"}><img src={"/media/2013/11/9781590305225.jpg"} alt={"9781590305225"} width={210} height={315} /></a>
      </figure>
      <p>{"This is a book that has been written for those in high school and beyond. It provides great insight into the many ways that animals are impacted by humans. Not only does it provide facts and information, but it also offers thought-provoking questions. Marc Bekoff takes the reader through animal well-being and protection, to making decisions about animal use, animal sentience, the difference between animal rights and animal welfare, alternatives to eating animals, dissection, and so much more."}</p>
      <p><em>{"Animals Matter"}</em>{"is a great book not only for every high school student to read, but for adults as well. It’s provides a wealth of information that has been condensed into a nice readable length book and is kept in simple terms. This would also make for a good book for parents to read along with their middle school students. It provides a great opportunity to learn and open a discussion about how animals are used in our society and what we can do about it."}</p>
      <p>{"The foreword is done by Dr. Jane Goodall, one of my idols, who also nicely adds to the book. She opens with a quote that is so important to all veg parents, which is: “Whether an individual respects, ignores, or harms different kinds of animals depends, to a large extent, on the kind of environment in which the child grew up.”"}</p>
      <p>{"Vegetarian and vegan parents will appreciate the honest information and opportunity for dialogue set forth in this book."}</p>
    </div>
  );
}
