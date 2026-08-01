import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5807",
  "slug": "come-and-eat",
  "url": "/reviews/come-and-eat/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/11/come-and-eat/",
  "title": "Come and Eat!",
  "publishedAt": "2011-08-11",
  "publishedLabel": "August 11th, 2011",
  "excerpt": "Come and Eat! is a delicious banquet of food photos and cultural eating customs around the world. It brings to mind Time Photos of “What the World Eats” (Peter Menzel’s book Hungry Planet) except Come and Eat! serves…",
  "image": {
    "src": "/media/2011/08/come-eat-72.jpg",
    "alt": "Come and Eat!",
    "width": 210,
    "height": 210
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
      "name": "Cultural Traditions",
      "slug": "cultural-traditions",
      "url": "/topics/cultural-traditions/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Food Choices",
      "slug": "food-choices",
      "url": "/topics/food-choices/"
    },
    {
      "name": "George Ancona",
      "slug": "george-ancona",
      "url": "/topics/george-ancona/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Multicultural",
      "slug": "multicultural",
      "url": "/topics/multicultural/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Come and Eat! is a delicious banquet of food photos and cultural eating customs around the world. It brings to mind Time Photos of “What the World Eats” (Peter Menzel’s book Hungry Planet) except Come and Eat! serves…",
    "image": "https://vegbooks.org/media/2011/08/come-eat-72.jpg"
  },
  "previous": {
    "title": "Eat Your Peas",
    "url": "/reviews/eat-your-peas/"
  },
  "next": {
    "title": "Bugs by the Numbers",
    "url": "/reviews/bugs-by-the-numbers/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/come-eat-72.jpg"}><img src={"/media/2011/08/come-eat-72.jpg"} alt={"Come and Eat!"} width={210} height={210} /></a>
      </figure>
      <p><em>{"Come and Eat!"}</em>{" is a delicious banquet of food photos and cultural eating customs around the world. It brings to mind "}<a href={"http://www.time.com/time/photogallery/0,29307,1626519,00.html"} target="_blank" rel="noopener noreferrer">{"Time Photos of “What the World Eats”"}</a>{" (Peter Menzel’s book Hungry Planet) except Come and Eat! serves to children with less of an agenda towards changing what’s on the reader’s plate to a healthier choice. The author George Ancona dishes out when, how, why, where, and what people eat as well as who eats a particular way and the cultural, traditional, and festive food occasions. (Veg parents note that the author is very pro-meat with references to “delicious meat dumplings,” pig roasting, fish, etc.)"}</p>
      <p>{"Although the story is by no means vegetarian or vegan, the focus was not as much about the food groups as it was about the culture and way food is eaten. (It would have been nice to have mention of vegan or vegetarian families though, especially as certain cultural groups and religious observances adhere to a vegetarian diet.) There are images of eggs and sausage, fish and cheese, and various other meats among the vegetables, rice, noodles, and breads (not many fruit pictures)! I found this educational in the sense that people eat differently around the world and make different food choices than we make (our family has discussed how even our extended family members eat different things than we do). However, after reading this to my daughter, she found the pictures of eggs attractive but said “ewww!” to the mention of meat. It may especially be confusing to veg kids to hear meat dishes described as delicious and have beautiful glossy photos of non-veg dishes. AR folks may find offense at a mention of a pig roast (at least there was no picture!), a description that “a donkey comes in handy to carry the food” (next to a picture of said donkey, loaded and tied up and staring at a family eating a picnic), and the author’s note at the back about a wooden tub filled with meat and the “savory smell of the meat made [him] hungry” so he purchased half a kilo of meat. Modest parents also be forewarned that one of the first images is of a mother breastfeeding her baby."}</p>
      <p>{"The book covers a buffet of information and the international images are very appetizing. Many of the colorful photos of children and families eating are cut to circular, or square shapes reminiscent of plates and my daughter excitedly pointed out that the cover image was a photo framed by the image of a plate and serving utensils. Although not a great recommendation for veg families, it does offer an opportunity for discussion and exposure to many world cultures."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
