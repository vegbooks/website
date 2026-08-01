import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8210",
  "slug": "wholesome-baby-food-guide",
  "url": "/reviews/wholesome-baby-food-guide/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/09/14/wholesome-baby-food-guide/",
  "title": "Wholesome Baby Food Guide",
  "publishedAt": "2012-09-14",
  "publishedLabel": "September 14th, 2012",
  "excerpt": "In America today, families typically live apart (often thousands of miles!) from their parents, aunts, uncles, and grandparents; gone are the days when generations lived together under the same roof, and grandparents…",
  "image": {
    "src": "/media/2012/09/9780446584104.jpg",
    "alt": "Wholesome Baby Food Guide",
    "width": 208,
    "height": 322
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
      "name": "Maggie Meade",
      "slug": "maggie-meade",
      "url": "/topics/maggie-meade/"
    },
    {
      "name": "Parenting",
      "slug": "parenting",
      "url": "/topics/parenting/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Vegetarian Baby Food",
      "slug": "vegetarian-baby-food",
      "url": "/topics/vegetarian-baby-food/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "In America today, families typically live apart (often thousands of miles!) from their parents, aunts, uncles, and grandparents; gone are the days when generations lived together under the same roof, and grandparents…",
    "image": "https://vegbooks.org/media/2012/09/9780446584104.jpg"
  },
  "previous": {
    "title": "Board Book Giveaway: I Say, You Say",
    "url": "/reviews/board-book-giveaway-i-say-you-say/"
  },
  "next": {
    "title": "Pigmares: Porcine Poems of the Silver Screen",
    "url": "/reviews/pigmares-porcine-poems-of-the-silver-screen/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/09/9780446584104.jpg"}><img src={"/media/2012/09/9780446584104.jpg"} alt={"Wholesome Baby Food Guide"} width={208} height={322} /></a>
      </figure>
      <p>{"In America today, families typically live apart (often thousands of miles!) from their parents, aunts, uncles, and grandparents; gone are the days when generations lived together under the same roof, and grandparents helped raise grandkids. This fairly new phenomenon means that unfortunately, important information about child rearing is often lost, and not passed down like it used to be. So instead of learning how to raise our kids from our own parents, aunts and uncles, we’re forced to scour books and the internet for advice and information. Fortunately, we can find books on nearly every topic of parenting, including what to feed our kids. One such book is the "}<em>{"Wholesome Baby Food Guide"}</em>{" by Maggie Meade."}</p>
      <p>{"Meade offers tips and recipes for new parents looking for answers about what to feed their kids, when to start, and many other common questions. She offers some good information including how to make your own homemade baby food, recommending eating organic foods when possible, and a variety of healthy plant-based recipes. However, I would definitely take much of the nutritional advice that she offers with a grain of salt. While she does mention some non-animal products such as tofu, lentils, beans, fruits and veggies, she really points to meat and dairy as the best sources of calcium and protein. She talks about complete proteins and essential amino acids, which we now know that we can get by just eating a varied plant based diet; these nutrient-dense foods will work together in the same way that a symphony works together, and they will provide us with much more in terms of the nutrients and vitamins our bodies need to thrive. The science overwhelmingly links our consumption of animal products with an increased risk of obesity, diabetes, high cholesterol, and heart disease. In fact, doctors are finding evidence of heart disease in children as young as 7 years old! So instead of encouraging new parents to keep on feeding kids the same old foods that are creating these health crises, she should point them in the direction of consuming more fruits, vegetables, whole grains, legumes, nuts and seeds."}</p>
      <p>{"While there were some useful tips and a lot of good plant-based recipes in this book, I would not recommend it, especially for vegetarians or vegans. Instead, choose "}<a href={"http://www.drfuhrman.com/shop/ChildBookReviews.aspx"} target="_blank" rel="noopener noreferrer"><em>{"Disease-Proof your Child"}</em>{":"}</a><em><a href={"http://www.drfuhrman.com/shop/ChildBookReviews.aspx"} target="_blank" rel="noopener noreferrer">{"Feeding Kids Right"}</a></em>{"by Dr. Joel Fuhrman."}</p>
      <p>{"Ages: Adult."}</p>
      <p><em>{"A copy of this book was received from the "}<a href={"http://www.hachettebookgroup.com/publishing_grand-central-publishing.aspx"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{"."}</em></p>
    </div>
  );
}
