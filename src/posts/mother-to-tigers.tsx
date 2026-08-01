import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5473",
  "slug": "mother-to-tigers",
  "url": "/reviews/mother-to-tigers/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/03/mother-to-tigers/",
  "title": "Mother to Tigers",
  "publishedAt": "2011-07-03",
  "publishedLabel": "July 3rd, 2011",
  "excerpt": "I tend to oppose zoos and zoo literature for children. As much as zoos try to replicate the natural habitats of exotic animals, an image from a childhood visit to a zoo is indelibly marked in my mind: the eyes of a…",
  "image": {
    "src": "/media/2011/06/mothersto-tigers-cover.jpg",
    "alt": "Mother to Tigers",
    "width": 210,
    "height": 163
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
      "name": "Animal Welfare",
      "slug": "animal-welfare",
      "url": "/topics/animal-welfare/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Books",
      "slug": "books",
      "url": "/topics/books/"
    },
    {
      "name": "Captive Wildlife",
      "slug": "captive-wildlife",
      "url": "/topics/captive-wildlife/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "George Ella Lyon",
      "slug": "george-ella-lyon",
      "url": "/topics/george-ella-lyon/"
    },
    {
      "name": "Helen Martini",
      "slug": "helen-martini",
      "url": "/topics/helen-martini/"
    },
    {
      "name": "Tigers",
      "slug": "tigers",
      "url": "/topics/tigers/"
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
    "description": "I tend to oppose zoos and zoo literature for children. As much as zoos try to replicate the natural habitats of exotic animals, an image from a childhood visit to a zoo is indelibly marked in my mind: the eyes of a…",
    "image": "https://vegbooks.org/media/2011/06/mothersto-tigers-cover.jpg"
  },
  "previous": {
    "title": "All the Seasons of the Year",
    "url": "/reviews/all-the-seasons-of-the-year/"
  },
  "next": {
    "title": "Manfish: A Story of Jacques Cousteau",
    "url": "/reviews/manfish-a-story-of-jacques-cousteau/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/mothersto-tigers-cover.jpg"}><img src={"/media/2011/06/mothersto-tigers-cover.jpg"} alt={"Mother to Tigers"} width={210} height={163} /></a>
      </figure>
      <p>{"I tend to oppose "}<a href={"http://www.bornfree.org.uk/campaigns/zoo-check/captive-wildlife-issues/"} target="_blank" rel="noopener noreferrer">{"zoos"}</a>{" and "}<a href={"/reviews/gorilla/"} target="_blank" rel="noopener noreferrer">{"zoo literature for children"}</a>{". As much as zoos try to replicate the natural habitats of exotic animals, an image from a childhood visit to a zoo is indelibly marked in my mind: the eyes of a nonhuman primate behind thick plexiglass looking blankly forward, seeming not to see me or anything else at all."}</p>
      <p>{"So I was quite surprised that this striking biography of Helen Martini, the Bronx Zoo’s first woman zookeeper and the founder of its animal nursery, struck a chord with me."}</p>
      <p>{"Helen’s story reminds me that some great changes can begin modestly. When her husband-zookeeper brought home a pitiful tiger cub destined for a certain death, she learned how to care for tigers first then other wildlife babies in her kitchen, soon opening a nursery at the zoo and changing the way that zoos cared for the animals born in their care. “Before Helen arrived, no tiger born at the Zoo had ever survived. She raised twenty-seven, along with yapoks and marmosets, gorillas and chimpanzees, deer and ring-tailed lemurs.” The reader also learns that her approach spread to other zoos, who opened up nurseries of their own."}</p>
      <p>{"Of course, this isn’t zoo propoganda like most children’s books set in zoos. Perceptive readers will wonder why it was that animals born in zoos were so certain to perish, and why their own parents were incapable of providing the care they needed to survive. Although the author, George Ella Lyon, does not answer these questions, her text is likely to generate some thoughtful dialogue. (Add another reason to love this book: visit her "}<a href={"http://www.georgeellalyon.com/activism.html"} target="_blank" rel="noopener noreferrer">{"website"}</a>{", and you’ll discover that she’s also an environmental activist!)"}</p>
      <p>{"In a note at the end of the book, Lyon tells us that Helen Martini was born in 1912 and left the zoo in 1960. It’s unlikely that she’s still alive today. Still, if she were, I wonder what zoo practices she’d want to change, and how she’d go about doing so."}</p>
      <p>{"Ages 5-8."}</p>
    </div>
  );
}
