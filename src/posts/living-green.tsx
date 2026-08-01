import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5742",
  "slug": "living-green",
  "url": "/reviews/living-green/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/01/living-green/",
  "title": "Living Green: A Turtle’s Quest for a Cleaner Planet",
  "publishedAt": "2011-08-01",
  "publishedLabel": "August 1st, 2011",
  "excerpt": "Thurman is an environmentally conscious turtle, spurred to action when his sister’s wedding is trashed by litter. He has no idea how to make a difference but heads down the river to get the humans “to put a stop” to…",
  "image": {
    "src": "/media/2011/08/lg-cover.jpg",
    "alt": "Living Green: A Turtle’s Quest for a Cleaner Planet",
    "width": 210,
    "height": 261
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
      "name": "Artie Knapp",
      "slug": "artie-knapp",
      "url": "/topics/artie-knapp/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    },
    {
      "name": "Turtles",
      "slug": "turtles",
      "url": "/topics/turtles/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Thurman is an environmentally conscious turtle, spurred to action when his sister’s wedding is trashed by litter. He has no idea how to make a difference but heads down the river to get the humans “to put a stop” to…",
    "image": "https://vegbooks.org/media/2011/08/lg-cover.jpg"
  },
  "previous": {
    "title": "Vegetarian Cooking for Beginners",
    "url": "/reviews/vegetarian-cooking-for-beginners/"
  },
  "next": {
    "title": "Gowanus Dogs",
    "url": "/reviews/gowanus-dogs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/lg-cover.jpg"}><img src={"/media/2011/08/lg-cover.jpg"} alt={"Living Green: A Turtle’s Quest for a Cleaner Planet"} width={210} height={261} /></a>
      </figure>
      <p>{"Thurman is an environmentally conscious turtle, spurred to action when his sister’s wedding is trashed by litter. He has no idea how to make a difference but heads down the river to get the humans “to put a stop” to the pollution. He arrives at the same time as an elementary science class and in a panic, accidentally gets his head stuck in a plastic bottle. The teacher and students are discussing carbon footprints and came to plant trees to combat carbon dioxide pollution released from factories and automobiles. As they discuss the "}<a href={"http://en.wikipedia.org/wiki/Waste_hierarchy"} target="_blank" rel="noopener noreferrer">{"waste hierarchy"}</a>{" (rethink, reduce, reuse, recycle), a boy picks up the bottle with Thurman attached to it and a news reporter covering the class outing takes a picture of the boy and turtle-in-a-bottle. Thurman realizes there’s hope for the world after hearing the class discussion on environment and the boy releases Thurman (with the teacher’s encouragement)."}</p>
      <p>{"Although "}<a href={"http://www.ninjaturtles.com/origin/origin.htm"}>{"Mutant Ninja Turtles"}</a>{" might have fought a better battle against the evils of pollution, Thurman does pretty well for a non-violent, environmental activist novice. My four year old did point out that Thurman could have picked up litter before he left his poor sister (whose dress was covered in banana peels) and during his three day journey to find the culprits. I was a little disappointed that Thurman didn’t realize that picking up in our own neighborhood is being just as active as confronting people who are littering. I found Thurman rather passive in terms of the environment but he does achieve his goal of finding who is responsible for the litter (humans) and becoming more educated. It seems as if he turns over the duties of cleaning up the environment to the humans (children and science teacher) but I hope the message is that everyone — adults (in any occupation) and children (even outside of class) — can make greener choices."}</p>
      <p><em>{"Living Green"}</em>{" is full of information, has a clear storyline with specks of humor, and the turtle illustrations appealed to my daughter, a "}<a href={"http://www.imdb.com/title/tt0203254/"} target="_blank" rel="noopener noreferrer">{"Franklin the Turtle"}</a>{" fan. I think young children could benefit from a glossary for terms such as “"}<a href={"http://www.carbonfootprint.com/carbonfootprint.html"} target="_blank" rel="noopener noreferrer">{"carbon footprint"}</a>{"” or a brief list of all the things they can do at home to help keep the planet clean like in "}<em><a href={"/reviews/grovers-10-terrific-ways/"}>{"Grover’s 10 Terrific Ways to Help our Wonderful World"}</a></em>{". I did learn that the waste hierarchy is more than just “reduce, reuse, recycle”– it can also include “rethink”, “respect”, “recover”, and “restore.”"}</p>
      <p>{"From a veg perspective, I found it scary that the kid who found Thurman yanked on him to get him unstuck from the bottle. And from a parent perspective, I feel obligated to remind folks to wash their hands after touching a turtle (all the kids in the book pet Thurman) because "}<a href={"http://www.cdc.gov/Features/salmonellafrogturtle/"}>{"turtles and other reptiles can harbor the Salmonella bacteria"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
