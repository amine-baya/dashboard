import React, { useState, useRef, useEffect, useCallback } from 'react';

import './sl.scss';
import Dropdown from './Dropdown';
import './customSelect.css'

const CustomSelect = ({ label, data, value, name, onChange, error, defaultOptionLabel, searchPlaceholder }) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(value !== '' ? data.indexOf(value) : null );
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef();

  // Hide dropdown if clicked outside of dropdown
  const handleClickOutside = useCallback((e) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
      setSearch('');
      setOptions(data);
    }
  }, [showDropdown, setShowDropdown, dropdownEl, data]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const changeSelectedHandler = (item, name, index) => {
    setSelectedValue(item);
    setSelectedIndex(index);
    setShowDropdown(false);
    onChange(item, name);
    
  }

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = data.filter(opt => {
      if (label=== "School"){
        return opt.school.toLowerCase().includes(e.target.value.trim().toLowerCase());
      }else{
        return opt.degree.toLowerCase().includes(e.target.value.trim().toLowerCase());

      }
    });
    setOptions(filteredOptions);
  }


  return(
    <div className="form__group ">
      <label>{label}</label>
      <div className="dropdown" ref={dropdownEl}>
        <input type="hidden" name={name} value={value} onChange={(e) => onChange(value, name)} />
        <div className="dropdown__selected" onClick={() => setShowDropdown(!showDropdown)}>
          { selectedValue ? selectedValue : defaultOptionLabel ? defaultOptionLabel : 'Please select one option' }
        </div>
        {showDropdown && 
          <Dropdown 
            searchPlaceholder={searchPlaceholder}
            search={search}
            searchChangeHandler={searchChangeHandler}
            options={options}
            selectedValue={selectedValue}
            selectedIndex={selectedIndex}
            changeSelectedHandler={changeSelectedHandler}
            name={name}
            data={data}
            label= {label}
          />
        }
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default CustomSelect;