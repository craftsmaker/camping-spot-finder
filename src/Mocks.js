const MARKERS = [
    {
      title: 'hello',
      coordinates: {
        latitude: 3.148561,
        longitude: 101.652778
      },
      type: "camp" 
    },
    {
      title: 'hello2',
      coordinates: {
        latitude: 5.149771,
        longitude: 101.655449
      },
      type:"tent"
    },
    {
      title: 'hello2',
      coordinates: {
        latitude: 6.8533401,
        longitude: 101.655449
      },
      type:"tent"
    },
    {
      title: 'hello2',
      coordinates: {
        latitude: 7.8733401,
        longitude: 101.655449
      },
      type:"camp"
    }
]

const PLACES = [
  {
    id: "1",
    title: "Camping Paradise",
    description: "Popular spot for local trekkers",
    stars: "4.9",
    distance: "2.0 miles",
    tag: "Free",
    image: {uri: "https://d1pk12b7bb81je.cloudfront.net/generated/adaptive-fit-in/800x1000/smart/images/photos/1572478819_great-plains-sp-ld-4991.jpeg"},
    type: "RV Camping",
  },
  {
    id: "2",
    title: "Lakeside Florida",
    description: "This is for all sunset lovers",
    stars: "5.0",
    distance: "5.0 miles",
    tag: "Free",
    image: {uri: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    type: "RV Camping",
  },
  {
    id: "3",
    title: "Lakeside Florida",
    description: "This is for all sunset lovers",
    stars: "5.0",
    distance: "5.0 miles",
    tag: "$$",
    image: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwSsDTVuuKxXnLYVHIaAt3aIBSQaS0ElSnWJ2c0D2f06xHdWD5&usqp=CAU"},
    type: "Tenting",
  },
  {
    id: "4",
    title: "Lakeside Florida",
    description: "This is for all sunset lovers",
    stars: "5.0",
    distance: "5.0 miles",
    tag: "$",
    image: {uri: "data:image/jpeg;base64,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"},
    type: "Tenting",
  },
]

export {
    MARKERS,
    PLACES,
}