import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from '../styles/layout/header.module.scss';
const menu =  [
    {
        name : 'Home',
        url : '/home'
    },
    {
        name : 'Wax',
        url : '/wax'
    },
    {
        name : 'Vapes',
        url : '/vapes'
    },
    {
        name : 'Snowballs',
        url : '/snowballs'
    },
    {
        name : 'Pen Style',
        url : '/pen-style'
    },
    {
        name : 'E-liquid',
        url : '/E-liquid'
    }
]

export default function Header() {
    const [isShowMenu , setIsShowMenu] = useState(false);
    const [activeHeader , setActiveHeader] = useState(false);
    const [isShowSearch , setIsShowSearch] = useState(false);
    const [isShowProfile , setIsShowProfile] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY > 200){
            setActiveHeader(true)
          }else{
            setActiveHeader(false)
            setIsShowMenu(false)
            setIsShowProfile(false)
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    
  return (
    <header className={`header ${activeHeader ? 'active' : ''}`}>
        <div className="main-header">
            <div className='container'>
                <div className={styled.menuPc}>
                    <div className={styled.logo}>
                        <Link href="/">
                            <img src="/logo.svg" alt="logo" className='img-res'/>
                        </Link>
                    </div>
                    <ul className={styled.mainMenu}>
                        {
                            menu.map((item , index) => (
                                <li key={index}>
                                    <Link href={item.url}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styled.groupUser}>
                        <div className="search-box">
                            <span className='btn btn-icon'><img src="./search.svg" alt="" onClick={() => setIsShowSearch(!isShowSearch)} /></span>
                            {
                                isShowSearch && <form className='formControl'>
                                <div className="customInputSearch">
                                    <input type="text" placeholder='Find products...'/>
                                    <button type='submit'><img src="./search.svg" alt="search" /></button>
                                </div>
                            </form>
                            }
                            
                        </div>
                        <span className='btn btn-icon'><img src="./cart.svg" alt="" /></span>
                        <div className='userBox'>
                            <span className='btn btn-icon' onClick={() => setIsShowProfile(!isShowProfile)}><img src="./user.svg" alt="" /></span>
                            {
                                isShowProfile && <ul className='boxControll'>
                                    <li><Link href='/'>Profile</Link></li>
                                    <li><Link href='/'>Admin</Link></li>
                                    <li><Link href='/'>Logout</Link></li>
                                </ul>
                            }
                            
                        </div>
                    </div>
                </div>
                <div className={styled.menuMobile}>
                    <div className={styled.wrapperMobile}>
                        <div className={styled.goupMenuMobile}>
                            <div className={`${styled.btnMobile} ${ isShowMenu ? styled.active : '' }`} onClick={() => setIsShowMenu(!isShowMenu)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styled.logo}>
                                <Link href="/">
                                    <img src="/logo.svg" alt="logo" className='img-res'/>
                                </Link>
                            </div>
                        </div>
                        <div className={styled.groupUser}>
                            <span className='btn btn-icon'  onClick={() => setIsShowMenu(!isShowMenu)}><img src="./search.svg" alt=""/></span>
                            <span className='btn btn-icon'><img src="./cart.svg" alt="" /></span>
                            <div className='userBox'>
                                <span className='btn btn-icon' onClick={() => setIsShowProfile(!isShowProfile)}><img src="./user.svg" alt="" /></span>
                                {
                                    isShowProfile && <ul className='boxControll'>
                                        <li><Link href='/'>Profile</Link></li>
                                        <li><Link href='/'>Admin</Link></li>
                                        <li><Link href='/'>Logout</Link></li>
                                    </ul>
                                }
                                
                            </div>
                            
                        </div>
                    </div>
                    <ul className={`${styled.listMenu} ${ isShowMenu ? styled.active : '' }`}>
                         <div className="search-box">
                            <form className='formControl'>
                                <div className="customInputSearch">
                                    <input type="text" placeholder='Find products...'/>
                                    <button type='submit'><img src="./search.svg" alt="search" /></button>
                                </div>
                            </form>
                        </div>
                        {
                            menu.map((item , index) => (
                                <li key={index}>
                                    <Link href={item.url}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
