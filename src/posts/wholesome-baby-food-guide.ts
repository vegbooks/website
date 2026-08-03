import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/09/9780446584104.jpg",
    "alt": "Wholesome Baby Food Guide",
    "href": "/media/2012/09/9780446584104.jpg",
    "width": 208,
    "height": 322,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In America today, families typically live apart (often thousands of miles!) from their parents, aunts, uncles, and grandparents; gone are the days when generations lived together under the same roof, and grandparents helped raise grandkids. This fairly new phenomenon means that unfortunately, important information about child rearing is often lost, and not passed down like it used to be. So instead of learning how to raise our kids from our own parents, aunts and uncles, we’re forced to scour books and the internet for advice and information. Fortunately, we can find books on nearly every topic of parenting, including what to feed our kids. One such book is the ",
      {
        "type": "emphasis",
        "children": [
          "Wholesome Baby Food Guide"
        ]
      },
      " by Maggie Meade."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Meade offers tips and recipes for new parents looking for answers about what to feed their kids, when to start, and many other common questions. She offers some good information including how to make your own homemade baby food, recommending eating organic foods when possible, and a variety of healthy plant-based recipes. However, I would definitely take much of the nutritional advice that she offers with a grain of salt. While she does mention some non-animal products such as tofu, lentils, beans, fruits and veggies, she really points to meat and dairy as the best sources of calcium and protein. She talks about complete proteins and essential amino acids, which we now know that we can get by just eating a varied plant based diet; these nutrient-dense foods will work together in the same way that a symphony works together, and they will provide us with much more in terms of the nutrients and vitamins our bodies need to thrive. The science overwhelmingly links our consumption of animal products with an increased risk of obesity, diabetes, high cholesterol, and heart disease. In fact, doctors are finding evidence of heart disease in children as young as 7 years old! So instead of encouraging new parents to keep on feeding kids the same old foods that are creating these health crises, she should point them in the direction of consuming more fruits, vegetables, whole grains, legumes, nuts and seeds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there were some useful tips and a lot of good plant-based recipes in this book, I would not recommend it, especially for vegetarians or vegans. Instead, choose ",
      {
        "type": "link",
        "href": "http://www.drfuhrman.com/shop/ChildBookReviews.aspx",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Disease-Proof your Child"
            ]
          },
          ":"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.drfuhrman.com/shop/ChildBookReviews.aspx",
            "external": true,
            "children": [
              "Feeding Kids Right"
            ]
          }
        ]
      },
      "by Dr. Joel Fuhrman."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages: Adult."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A copy of this book was received from the ",
          {
            "type": "link",
            "href": "http://www.hachettebookgroup.com/publishing_grand-central-publishing.aspx",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
