import React from 'react';

function SearchBar() {
  return (
    <div className="banner-content" style={{ maxWidth: '50%', margin: 'auto', alignItems:'left', color:'blue'}}>
      <form className="form" action="#">
        <div className="form-inner">
          <div className="input-group">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="search" className="form-control" placeholder="Search School, Online educational centers, etc." />
            <span className="drop-detail">
              <select className="form-select" aria-label="Category">
                <option value="">Category</option>
                <option value="angular">Angular</option>
                <option value="nodejs">Node Js</option>
                <option value="react">React</option>
                <option value="python">Python</option>
              </select>
            </span>
            <button className="btn btn-primary sub-btn" type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;