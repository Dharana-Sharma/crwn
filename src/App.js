const App = () => {

  const categories = [
    {
      id:1
      title:hats
    },
    {
      id:2
      title:jackets
    },
    {
      id:3
      title:women
    },
    {
      id:1
      title:mens
    },
    {
      id:1
      title:bags
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map(({title}) => (
        <div className='category-container'>
          {/* <img /> */}
          <div className='category-body-container'>
            <h2>Hats</h2>
            <p>Shop Now</p>
          </div>
        </div>
     ))};
    </div>
  );
};

export default App;
