import './Filter.css';

export const Filter = () => {
    return (
        <section className="filters-body">
            <div className="filter-title">
                <p className="title">Filters</p>
                <p className="clear">Clear</p>
            </div>
            <div className="price-group">
                <p>Price</p>
                <div className="slider-component">
                    <span className="slider-value-min" id="silder-min-value">0</span>
                    <input type="range" min="0" max="100" id="slider" className="slider" defaultValue={0} />
                    <span className="slider-value-max" id="silder-max-value">100</span>
                </div>
            </div>
            <div className="category-group">
                <p className="title">Category</p>
                <ul className="category-group-list">
                    <li>
                        <input type="checkbox" id='category1-checkbox' />
                        <label htmlFor='checkbox'>Category1</label>
                    </li>
                    <li>
                        <input type="checkbox" id='category2-checkbox' />
                        <label htmlFor='checkbox'>Category1</label>
                    </li>
                    <li>
                        <input type="checkbox" id='category3-checkbox' />
                        <label htmlFor='checkbox'>Category1</label>
                    </li>
                    <li>
                        <input type="checkbox" id='category4-checkbox' />
                        <label htmlFor='checkbox'>Category1</label>
                    </li>
                    <li>
                        <input type="checkbox" id='category5-checkbox' />
                        <label htmlFor='checkbox'>Category1</label>
                    </li>
                </ul>
            </div>
            <div className="rating-group">
                <p className="title">Rating</p>
                <div className="rating-group-list">
                    <div className="rating">
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                    </div>
                    <div className="rating">
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                    </div>
                    <div className="rating">
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                    </div>
                    <div className="rating">
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                    </div>
                    <div className="rating">
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined">star</span>
                        <span className="material-icons-outlined rating-element">star</span>
                    </div>
                </div>
            </div>
            <div className="sort-group">
                <p className="title">Sort by</p>
                <div className="sort-group-list">
                    <div>
                        <input type="radio" id='low-high-radio' />
                        <label htmlFor='low-high-radio'>Price - Low to High</label>
                    </div>
                    <div>
                        <input type="radio" id='high-low-radio' />
                        <label htmlFor='high-low-radio'>Price - High to Low</label>
                    </div>
                </div>
            </div>
        </section >
    );
}
