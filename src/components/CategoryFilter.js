import React from "react";

function CategoryFilter({categories, category, setCategory}) {
  function handleChange(e) {
    setCategory(e.target.id)
  }

  const categoryList = categories.map(choice => {
    const className = choice === category ? "selected" : null
    return (
      <button key={choice} onClick={handleChange} id={choice} className={className}>{choice}</button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
