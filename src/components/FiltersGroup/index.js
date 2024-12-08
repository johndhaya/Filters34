import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingFilterList = () => {
    const {ratingList} = props

    return ratingList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onCLickRatingItem = () => changeRating(rating.ratingId)
      const ratingClass =
        activeRatingId === rating.ratingId ? 'and-up active-rat' : 'and-up'

      return (
        <li
          className="rat-item"
          key={rating.ratingId}
          onClick={onCLickRatingItem}
        >
          <img
            className="rat-img"
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
          />
          <p className={ratingClass}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rat-head">Rating</h1>
      <h1 className="rat-list">{renderRatingFilterList()}</h1>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onCLickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClass = isActive ? 'cat-name active-cat-name' : 'cat-name'
      return (
        <li
          className={categoryClass}
          key={category.categoryId}
          onClick={onCLickCategoryItem}
        >
          <p className={categoryClass}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="cat-head">Category</h1>
      <ul className="cat-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-cont">
        <input
          className="search-input"
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
