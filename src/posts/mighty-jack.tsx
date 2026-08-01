import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10390",
  "slug": "mighty-jack",
  "url": "/reviews/mighty-jack/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/09/14/mighty-jack/",
  "title": "Mighty Jack",
  "publishedAt": "2016-09-14",
  "publishedLabel": "September 14th, 2016",
  "excerpt": "As big fans of the Zita the Spacegirlseries, as well as Little Robot, our entire family was excited to receive Ben Hatke’s new graphic novel, Mighty Jack. I’d read that it was loosely based on Jack & The Beanstalk,…",
  "image": {
    "src": "/media/2016/08/mighty.jpg",
    "alt": "Mighty",
    "width": 538,
    "height": 756
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
      "name": "Adventure",
      "slug": "adventure",
      "url": "/topics/adventure/"
    },
    {
      "name": "Autism",
      "slug": "autism",
      "url": "/topics/autism/"
    },
    {
      "name": "Ben Hatke",
      "slug": "ben-hatke",
      "url": "/topics/ben-hatke/"
    },
    {
      "name": "Dragons",
      "slug": "dragons",
      "url": "/topics/dragons/"
    },
    {
      "name": "Graphic Novels",
      "slug": "graphic-novels",
      "url": "/topics/graphic-novels/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "As big fans of the Zita the Spacegirlseries, as well as Little Robot, our entire family was excited to receive Ben Hatke’s new graphic novel, Mighty Jack. I’d read that it was loosely based on Jack & The Beanstalk,…",
    "image": "https://vegbooks.org/media/2016/08/mighty.jpg"
  },
  "previous": {
    "title": "The BFG",
    "url": "/reviews/the-bfg/"
  },
  "next": {
    "title": "The Secret Life of Pets (2016)",
    "url": "/reviews/the-secret-life-of-pets-2016/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"As big fans of the "}<em>{"Zita the Spacegirl"}</em>{"series, as well as "}<em><a href={"/reviews/little-robot/"}>{"Little Robot"}</a></em>{", our entire family was excited to receive Ben Hatke’s new graphic novel, "}<em>{"Mighty Jack"}</em>{". I’d read that it was loosely based on Jack & The Beanstalk, but from the first page it was clear the story had a life of its own. With complex and well-developed characters, gorgeous and inventive illustrations, and a storyline that is at once relatable and fantastic, I highly recommend "}<em>{"Mighty Jack"}</em>{" for ages 7-13."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/08/mighty.jpg"} alt={"Mighty"} width={538} height={756} />
      </figure>
      <p>{"Jack’s story opens with a start as a rushed morning of granola bars and an impatient Mom reveals countertop bills with “payment past due” and a younger sister, Maddie, who doesn’t speak and needs to be looked after all summer. The summer doesn’t get a chance to begin before a creepy flea market vendor convinces Jack (with encouragement from a suddenly vocal Maddie) to trade a strange box of even stranger seeds for the keys to Jack’s mom’s car. The action never slows down from there."}</p>
      <p>{"Adventures in a magical garden include a talkative dragon, adorable, mischievous, and scary plants, and a variety of joys and consequences that (literally) spring from decisions the heroes make about the seeds and garden. The action is punctuated by scenes of developing friendships and relatable moments between siblings."}</p>
      <p>{"The illustrations are both joyful, fun, and and age-appropriately scary. The characters are expressive and the plants take on personalities of their own with simple, expressive, and colorful drawings. The mystery and wonder that fill this accessible graphic novel will ensure that your entire family eagerly awaits Book Two of "}<em>{"Mighty Jack"}</em>{". And in the meantime, the book holds up to repeated readings during which you’ll find new details you missed before."}</p>
      <p>{"I especially liked the trueness of the characters. Maddie, Jack’s younger sister, isn’t painted as a stereotype of a child with Autism; she has a well-rounded personality, like all the characters in the book. The main characters all show flaws, and they make both responsible and poorly thought-out decisions during the story. They also show genuine caring and vulnerabilities that will ring true to children and adults alike."}</p>
      <p>{"There are some frightening moments in the story that may upset more sensitive children; one scene in particular includes an accident that could have had fatal consequences for Maddie. In addition, the plants coming to life may encourage some dinner table discussion, especially for vegetarian families. Still, the fantastic storyline and fanciful drawings make "}<em>{"Mighty Jack"}</em>{" a welcome addition to our family library, and we can’t wait for the next book!"}</p>
      <p><em><a href={"http://www.firstsecondbooks.com/"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a copy of this book for review."}</em></p>
    </div>
  );
}
