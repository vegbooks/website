import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Minny’s Dream",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I absolutely love the genre of animal rights kiddy fiction, and was delighted to receive a copy of the now out-of-print ",
      {
        "type": "emphasis",
        "children": [
          "Minny’s Dream"
        ]
      },
      " by Clare Druce. The 129-page chapter book chronicles a young girl’s exciting move from the city to the country, where she unexpectedly finds herself neighboring a battery hen operation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Young Paula Brown is as curious as they come and manages to get inside the large windowless sheds, where she finds unhealthy birds, crammed four to a cage in row upon row within the awfully smelly, filthy enclosures. In a surreal moment, she is singled out by a hen named Minny who begins to tell her of her dreams: taking dust baths, roosting in trees, enjoying the dusk and dawn, laying her eggs in a safe, quiet spot, and other instinctual-ancestral routines. Paula easily befriends Minny and makes a promise to help her. She does library research to learn more about Minny’s Red Jungle Fowl lineage and plans to rescue Minny and her two surviving cagemates, Goldie and Crosspatch. Unfortunately, the fourth hen, Flapper, passed away due to Cage Layer Fatigue. But Paula is fighting a ticking clock: the hens in sheds 9 and 10 (Minny’s) are already considered spent since they’ve been in production for about a year’s time and the trucks are coming shortly to take them to slaughter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Part adventure story, part coming-of-age, this novel is a quick and exciting read that will inspire young audiences to take charge of a bad situation and make a difference in the lives of animals in need. The ending is a somewhat happy one. The three hens are indeed rescued and live with the Browns, as does the farmer’s chained dog. Egg production, it seems, isn’t economically viable any longer and the farmer takes up mushroom cultivation, but of course that means that the remaining ¼ million hens on his property were sent to slaughter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author makes no mention of vegetarianism, veganism, or the idea of giving up eggs, but ",
      {
        "type": "link",
        "href": "http://www.petamall.com/PLPShop.asp?RecordID=306&pf=true",
        "external": true,
        "children": [
          "Clare Druce"
        ]
      },
      " is a committed animal advocate. Druce co-founded the pressure group, Chickens’ Lib, in the 1970s, which now incorporates the Farm Animal Welfare Network (FAWN)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8 to 14."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
