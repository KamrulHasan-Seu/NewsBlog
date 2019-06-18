const initState = {
  posts: [
    {
      id: '1',
      title: "Lorem ipsum 1",
      body: "Sit amet 1"
    }, {
      id: '2',
      title: "Lorem ipsum 2",
      body: "Sit amet 2"
    }, {
      id: '3',
      title: "Lorem ipsum 3",
      body: "Sit amet 3"
    }
  ]
}
const rootReducer = (state = initState, action) => { 
  return state;
}
export default rootReducer