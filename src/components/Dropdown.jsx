import React, { useRef, useEffect } from 'react';

const Dropdown = ({ searchPlaceholder, search, searchChangeHandler, options, selectedValue, changeSelectedHandler, name, selectedIndex, data,label }) => {
  const searchInputEl = useRef();
  const itemsEl = useRef();

  useEffect(() => {
    searchInputEl.current.focus();
    if(selectedValue) {
      itemsEl.current.scrollTop = itemsEl?.current.querySelector(`.item-${selectedIndex}`)?.offsetTop - 42;
    }
    // eslint-disable-next-line
  }, []);

  return(
    <div className="dropdown__menu">
      <input 
        type="text" 
        placeholder={searchPlaceholder ? searchPlaceholder : 'Search...'}
        className="dropdown__menu_search"
        value={search}
        onChange={searchChangeHandler}
        ref={searchInputEl}
      />
      <div className="dropdown__menu_items" ref={itemsEl}>
        {label === "School" ? options.map((item, index) => (
          <div
            className={selectedValue === item ? `dropdown__menu_item item-${data.indexOf(item)} selected` : `dropdown__menu_item item-${data.indexOf(item)}`}
            key={index}
            onClick={() => changeSelectedHandler(item.school,name, data.indexOf(item))}
          >
            {item.school}
          </div>
        )) : 
        options.map((item, index) => (
          <div
            className={selectedValue === item ? `dropdown__menu_item item-${data.indexOf(item)} selected` : `dropdown__menu_item item-${data.indexOf(item)}`}
            key={index}
            onClick={() => changeSelectedHandler(item.degree,name, data.indexOf(item))}
          >
            {item.degree}
          </div>
        )) 
        
        
        
        }
      </div>
    </div>
  );
}

export default Dropdown;