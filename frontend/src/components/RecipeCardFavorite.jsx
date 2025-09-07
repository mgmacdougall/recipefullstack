import React from 'react'
function RecipeCardFavorite({handler,favouriteId}) {
  return (
    <button data-id={favouriteId} onClick={handler}>ToggleFavorite</button>
  )
}

export default RecipeCardFavorite