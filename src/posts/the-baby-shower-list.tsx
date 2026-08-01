import type { PostMetadata } from '../content/types';

export const article = {
  "id": "353",
  "slug": "the-baby-shower-list",
  "url": "/reviews/the-baby-shower-list/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/14/the-baby-shower-list/",
  "title": "The Baby Shower List",
  "publishedAt": "2010-01-14",
  "publishedLabel": "January 14th, 2010",
  "excerpt": "By JESSICA ALMY My sister-in-law and one of my dearest friends are both expecting. So me being me, I’m planning to give them books and diapers! (What else do you really need for a baby anyways?) While I’m shopping, I…",
  "image": {
    "src": "/media/2009/12/heflfc1.jpg",
    "alt": "The Baby Shower List",
    "width": 207,
    "height": 311
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
      "name": "Best Family Cookbooks",
      "slug": "best-family-cookbooks",
      "url": "/topics/best-family-cookbooks/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Raising Vegetarian Kids",
      "slug": "raising-vegetarian-kids",
      "url": "/topics/raising-vegetarian-kids/"
    },
    {
      "name": "Vegan Parenting",
      "slug": "vegan-parenting",
      "url": "/topics/vegan-parenting/"
    },
    {
      "name": "Vegan Parents",
      "slug": "vegan-parents",
      "url": "/topics/vegan-parents/"
    },
    {
      "name": "Vegan Pregnancy",
      "slug": "vegan-pregnancy",
      "url": "/topics/vegan-pregnancy/"
    },
    {
      "name": "Vegetarian Baby Food",
      "slug": "vegetarian-baby-food",
      "url": "/topics/vegetarian-baby-food/"
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
    "description": "By JESSICA ALMY My sister-in-law and one of my dearest friends are both expecting. So me being me, I’m planning to give them books and diapers! (What else do you really need for a baby anyways?) While I’m shopping, I…",
    "image": "https://vegbooks.org/media/2009/12/heflfc1.jpg"
  },
  "previous": {
    "title": "Kids Can Cook",
    "url": "/reviews/kids-can-cook-guest-post-by-jacqueline-bodnar/"
  },
  "next": {
    "title": "First Dog Fala",
    "url": "/reviews/first-dog-fala-guest-post-by-jennifer-gannett/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/12/heflfc1.jpg"}><img src={"/media/2009/12/heflfc1.jpg"} alt={"The Baby Shower List"} width={207} height={311} /></a>
      </figure>
      <p><strong>{"By "}<a href={"/about/"}>{"JESSICA ALMY"}</a></strong></p>
      <p>{"My sister-in-law and one of my dearest friends are both expecting. So me being me, I’m planning to give them books and diapers! (What else do you really need for a baby anyways?)"}</p>
      <p>{"While I’m shopping, I decided to compile a list of my favorite (veg) parenting books."}</p>
      <ol>
        <li><strong><a href={"http://www.superbabyfood.com/"} target="_blank" rel="noopener noreferrer"><em>{"Super Baby Food"}</em></a></strong>{"by Ruth Yaron: How-tos of preparing homemade, organic baby food with a strong emphasis on plant-based and vegetarian foods."}</li>
        <li><strong><a href={"http://www.goodreads.com/book/show/1008645.Raising_Vegetarian_Children_A_Guide_to_Good_Health_and_Family_Harmony"} target="_blank" rel="noopener noreferrer"><em>{"Raising Vegetarian Children: A Guide to Good Health and Family Harmony"}</em></a></strong>{"by Joanne Stepaniak and Vesanto Melina: Nutritional and social advice, plus fantastic vegan recipes. We love the muscle muffins!"}</li>
        <li><a href={"http://www.vegfamily.com/book-reviews/vegetarianbaby.htm"} target="_blank" rel="noopener noreferrer"><em><strong>{"New Vegetarian Baby"}</strong></em></a>{" by Sharon K. Yntema and Christine Beard: Age-by-age feeding guidelines and nutritional information."}</li>
        <li><a href={"http://www.healthyeatingseries.com/excerpt2.html"} target="_blank" rel="noopener noreferrer"><em><strong>{"Healthy Eating for Life for Children"}</strong></em></a>{" by Physicians Committee for Responsible Medicine: Draws on nutritional research, such as the China Study, to make the case that children should be eating exclusively vegan foods. Includes a section on healthy eating during pregnancy."}</li>
        <li><a href={"http://veganlunchbox.blogspot.com/"} target="_blank" rel="noopener noreferrer"><em><strong>{"Vegan Lunch Box: 130 Amazing, Animal-Free Lunches Kids and Grown-ups Will Love!"}</strong></em></a>{" by Jennifer McCann: From the simple to the fancy, this cookbook provides great menu ideas and recipes that the whole family will enjoy."}</li>
        <li><a href={"http://www.veganfamilyfavorites.com/"} target="_blank" rel="noopener noreferrer"><em><strong>{"Vegan Family Favorites"}</strong></em></a>{" by Erin Pavlina: Lots of kid-friendly recipes. Our favorite is the lemon-garlic asparagus!"}</li>
      </ol>
      <p>{"Any other suggestions?"}</p>
    </div>
  );
}
