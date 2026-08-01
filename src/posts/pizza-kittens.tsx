import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7891",
  "slug": "pizza-kittens",
  "url": "/reviews/pizza-kittens/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/07/11/pizza-kittens/",
  "title": "Pizza Kittens",
  "publishedAt": "2012-07-11",
  "publishedLabel": "July 11th, 2012",
  "excerpt": "Holy Guacamole, Pizza Kittens is a hilarious book! Please picture your devoted reviewer sitting cross-legged on the floor of her local library snorting louder with laughter with each turn of the page, surprising the…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Pizza Kittens",
    "width": 210,
    "height": 139
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Charlotte Voake",
      "slug": "charlotte-voake",
      "url": "/topics/charlotte-voake/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Families",
      "slug": "families",
      "url": "/topics/families/"
    },
    {
      "name": "Food Choices",
      "slug": "food-choices",
      "url": "/topics/food-choices/"
    },
    {
      "name": "Healthy Choices",
      "slug": "healthy-choices",
      "url": "/topics/healthy-choices/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Holy Guacamole, Pizza Kittens is a hilarious book! Please picture your devoted reviewer sitting cross-legged on the floor of her local library snorting louder with laughter with each turn of the page, surprising the…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Scaredy Squirrel",
    "url": "/reviews/scaredy-squirrel/"
  },
  "next": {
    "title": "A Meal of the Stars: Poems Up and Down",
    "url": "/reviews/a-meal-of-the-stars/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Pizza Kittens"} width={210} height={139} /></a>
      </figure>
      <p>{"Holy Guacamole, "}<em>{"Pizza Kittens"}</em>{" is a hilarious book! Please picture your devoted reviewer sitting cross-legged on the floor of her local library snorting louder with laughter with each turn of the page, surprising the young patrons around her. It happened."}</p>
      <p>{"What drew me in was the title. Pizza? Kittens? Two of our favorite things! Silly illustrations of a kitty family? Fantastic. I was concerned though. Was this just going to be an overly meaty or fishy ode to cats’ favorite foods?"}</p>
      <p>{"In this case, the story does begin by Mom serving fish sticks for dinner much to the kittens’ dismay. This is the only obvious depiction or mention of animal products in the story. Joe Kitten complains that he wanted baked beans. All the kittens chime in that they strongly prefer…pizza! Ah well, kittens, too bad. Tonight, to borrow a popular pre-school saying, you get what you get and you don’t get upset, and by the way, Mom is serving salad too (“‘Oh no, not salad,’ they cried.”). In protest, the kittens, who are eating their dinner without their parents at the table, proceed to make a big mess of their meal and head off to watch TV. Their parents are upset and vow that the family will have a more civilized meal tomorrow, which will include everyone eating together, eating all of their food politely and being helpful. (Does this hopeful plan for the next evening’s meal sound familiar to anyone else?)"}</p>
      <p>{"The next night, the kittens do indeed try their best to be helpful while Dad cooks dinner. Once all are seated, Mom comments to the group about how nice it is to be together, while Dad sings the virtues of the peas he prepared. All is going according to plan (overuse of ketchup excepted and accepted) when Bert Kitten upends his chair and a disaster ensues. Peas fly everywhere — Dad’s still cleaning the mess at bedtime. “We’ll try again tomorrow,” Mom tells an apologetic Bert. You can probably guess what Dad makes for dinner the next night: everyone’s favorite. Served with a side of salad."}</p>
      <p>{"This is a perfect story for exploring the silly side of children’s eating habits and the tug between what they want to eat and what adults want them to eat. Author/illustrator Charlotte Voake’s clever and humorous take on the negotiations of family dinnertime dynamics are relatable. Her cat family is warm and tender toward one another, even when things are less than perfect, exemplifying what so many of us strive to be."}</p>
      <p>{"The illustrations in this book are lively and fun. Ms. Voake’s style skews toward cartoonish, but her graphics simply and effortlessly convey the emotions and activities of the family (assisted by some cute and funny captions within the illustrations)."}</p>
      <p>{"Read this book with preschoolers and early elementary kids simply for the fun of it, or use it as a springboard for a conversation about expectations at dinnertime in your home. "}<em>{"This book is available secondhand ("}<a href={"http://www.amazon.com/gp/product/0744575958/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0744575958"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") or possibly at your local library."}</em></p>
    </div>
  );
}
