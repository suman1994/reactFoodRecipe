import React from 'react';

const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"><span className="material-icons brand-icon">fastfood</span>Food Recipes</h1>
            <div className="input-group w-50 mx-auto">
                <input type="text" 
                        className="form-control" 
                        placeholder="Search your recipe..." 
                        value={search}
                        onChange={onInputChange} />
                <button className="btn btn-dark" onClick={onSearchClick}><span className="material-icons">search</span></button>
            </div>
        </div>
    );
};

export default Header;