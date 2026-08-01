import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8876",
  "slug": "lobsters-on-the-loose",
  "url": "/reviews/lobsters-on-the-loose/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/05/19/lobsters-on-the-loose/",
  "title": "Lobsters on the Loose",
  "publishedAt": "2013-05-19",
  "publishedLabel": "May 19th, 2013",
  "excerpt": "Last weekend we visited Boston with our four year old daughter. Not living in a coastal town, seafood is not really a part of our life, and beyond fish, I don’t think my daughter was aware that people eat seafood. In…",
  "image": {
    "src": "/media/2013/05/9780764338267.jpg",
    "alt": "9780764338267",
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Eric T. Krackow",
      "slug": "eric-t-krackow",
      "url": "/topics/eric-t-krackow/"
    },
    {
      "name": "Jennifer Ginn",
      "slug": "jennifer-ginn",
      "url": "/topics/jennifer-ginn/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Lobsters",
      "slug": "lobsters",
      "url": "/topics/lobsters/"
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
    "description": "Last weekend we visited Boston with our four year old daughter. Not living in a coastal town, seafood is not really a part of our life, and beyond fish, I don’t think my daughter was aware that people eat seafood. In…",
    "image": "https://vegbooks.org/media/2013/05/9780764338267.jpg"
  },
  "previous": {
    "title": "Sylvia’s Spinach",
    "url": "/reviews/sylvias-spinach/"
  },
  "next": {
    "title": "The Cats of Tanglewood Forest",
    "url": "/reviews/the-cats-of-tanglewood-forest/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/05/9780764338267.jpg"}><img src={"/media/2013/05/9780764338267.jpg"} alt={"9780764338267"} width={210} height={163} /></a>
      </figure>
      <p>{"Last weekend we visited Boston with our four year old daughter. Not living in a coastal town, seafood is not really a part of our life, and beyond fish, I don’t think my daughter was aware that people eat seafood. In Boston, seafood is everywhere. We did a day trip to the coastal town of Rockport, MA. Walking along the pier, we were surrounded by lobster cages and there were buoys attached to lobster cages floating in the water all around us. My daughter asked a lot of questions: How do the lobsters get into these cages? Why can’t they get out? What does a lobster look like? What do they eat? I promised her a book on lobsters when we got home. Luckily, while walking around Boston, we stumbled across this gem."}</p>
      <p>{"The brothers in "}<em>{"Lobsters on the Loose"}</em>{" ("}<a href={"http://www.amazon.com/gp/product/0764338269/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0764338269&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") love to visit the lobsters in the grocery store, and do so each time they go. However, one day they discover the lobsters are crying. The brothers help the lobsters escape, and the lobster march through the grocery store and hitch a ride out to sea. The brothers, when visiting the beach one day, are treated to a grand ceremony in which every animal in the ocean thanks them for rescuing the lobsters and returning them to the sea."}</p>
      <p>{"The book is cute. The story is engaging with bright and colorful pictures. I would have appreciated a mention of why the lobsters are in the grocery store as it seems they were simply there to be enjoyed like an aquarium and no mention is made of them being eaten. However, it is a nice enough message to say that sea animals don’t like to be in tanks, regardless of why. Parents can use it to further the discussion regarding lobsters being sold for food"}</p>
      <p>{"Ages 4+."}</p>
    </div>
  );
}
