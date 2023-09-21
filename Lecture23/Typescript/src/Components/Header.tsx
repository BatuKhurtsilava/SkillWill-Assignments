import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { useAppSelector, useAppDispatch } from '../store/todo/todo.hooks'
import {  toggleMode } from "../store/darkMode/darkMode.slice";


const Header: React.FC = () => {
  const {languages, language, setLanguage } = useLanguageContext();
  const dispatch = useAppDispatch()
  const {mode} = useAppSelector((state) => state.darkMode)
  const toggleLightMode = () => {
   dispatch(toggleMode()) 
  }

  return (
    <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
      <header>
      <select value = {language} onChange = {(e) => setLanguage(e.target.value)}>
      <option value = {languages[0]}>GE</option>
      <option value = {languages[1]}>EN</option>
      </select>
      <button onClick={() => toggleLightMode()}>{mode === 'light' ? 'DarkMode' : 'LightMode'}</button>
        
      </header>
    </div>
  )
}

export default Header;