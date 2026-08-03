import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "How is it we’ve posted 750 reviews on Vegbooks, and yet we haven’t reviewed Nick Park’s 2000 animated film “Chicken Run” yet? PETA includes it in an article on ",
      {
        "type": "link",
        "href": "http://www.peta.org/blog/top-10-movies-make-go-meatless/",
        "external": true,
        "children": [
          "10 movies that will make you go meatless"
        ]
      },
      " and the ",
      {
        "type": "link",
        "href": "http://www.petakids.com/spotlight/ultimate-list-animal-friendly-movies/",
        "external": true,
        "children": [
          "ultimate list of animal-friendly movies"
        ]
      },
      ". ",
      {
        "type": "emphasis",
        "children": [
          "And"
        ]
      },
      " the Humane Society of the United States liked it so much that they teamed up with the film’s makers to celebrate ",
      {
        "type": "link",
        "href": "http://www.foodday.org/splash_page?splash=1",
        "external": true,
        "children": [
          "Food Day"
        ]
      },
      " with a ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/news/press_releases/2012/10/aardman-hsus-release-a-pigs-tail-102412.html",
        "external": true,
        "children": [
          "short film"
        ]
      },
      " that critiques gestation crates for pigs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In other words, if you haven’t seen “Chicken Run” yet, you really ought to."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Based on the plot of World War II classic “The Great Escape,” this family-friendly film chronicles the escape efforts of egg-laying chickens in England. The pace is quick but not hectic, and while the movie does reveal some ugly truths about agriculture–",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/news/press_releases/2015/01/minnesota-hen-investigation010514.html",
        "external": true,
        "children": [
          "spent hens"
        ]
      },
      " are killed–overall, it elicits sympathy for the characters without telling the whole story about the egg or meat industries. (For example, the hens are free-roaming, not confined to battery cages, and there’s no mention of what happens to male chicks.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Plus, the movie is just plain funny, with lots of great one-liners."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While ",
      {
        "type": "link",
        "href": "http://www.slate.com/blogs/browbeat/2013/11/01/free_birds_movie_anti_thanksgiving_against_eating_turkeys_no_thanks.html",
        "external": true,
        "children": [
          "some critics"
        ]
      },
      " have argued that the film “neatly sidesteps the issue of chicken-eating,” I’m not convinced. For starters, the hens feel a deep sympathy for their friend who has not laid eggs in a while and ends up on the farmers’ table. Second, the escape efforts escalate when the farmers decide to begin a chicken pie operation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Instead, I think the film makes clear that what’s important is not saving a single life, but saving them all. In the opening scene, Ginger escapes multiple times but each time gets sent to solitary confinement after her attempts to free her friends fail. And when another character in the film–Rocky, a circus rooster who shakes things up on the farm–says that it’s not hard to escape, Ginger explains that it’s not difficult for one chicken to get out, but that they must ",
      {
        "type": "emphasis",
        "children": [
          "all"
        ]
      },
      "get out."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I strongly recommend this film for families to watch together. There are many themes that warrant discussion, including the ethics of meat eating, conditions on the farm, and the power of collective action."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/chicken-run",
        "external": true,
        "children": [
          "Commonsense Media"
        ]
      },
      " recommends “Chicken Run” for ages 7 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
