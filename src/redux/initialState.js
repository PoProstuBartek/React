const initialState = {
  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Today',
      icon: 'list-ul',
    },
    {
      id: '5',
      listId: '2',
      title: 'Tomorow',
      icon: 'list-ul',
    },
    {
      id: '6',
      listId: '2',
      title: 'This month',
      icon: 'list-ul',
    },
  ],

  cards: [
    { id: '1', columnId: '1', title: 'Call of cthulhu', isFavorite: false },
    { id: '2', columnId: '1', title: 'The Necronomicon', isFavorite: false },
    { id: '3', columnId: '2', title: 'Harry Potter', isFavorite: false },
    { id: '4', columnId: '2', title: 'Star Wars', isFavorite: false },
    { id: '5', columnId: '3', title: 'The Witcher', isFavorite: true },
    { id: '6', columnId: '3', title: 'Skyrim', isFavorite: true },
    { id: '7', columnId: '4', title: 'Cheese', isFavorite: false },
    { id: '8', columnId: '4', title: 'Milk', isFavorite: false },
    { id: '9', columnId: '5', title: 'Eggs', isFavorite: false },
    { id: '10', columnId: '5', title: 'Bananas', isFavorite: true },
    { id: '11', columnId: '6', title: 'New shoes', isFavorite: false },
    { id: '12', columnId: '6', title: 'Headphones', isFavorite: false }
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Shoping list...',
      description: 'What do I need to buy'
   }
 ],

  searchString: '',

};

export default initialState;