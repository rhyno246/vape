import React from 'react'
import styled from '../styles/layout/footer.module.scss';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className={styled.footer}>
        <img src="./Lightpng.png" alt="logo"  className={styled.lineLine}/>
        <div className={styled.logoFooter}>
          <Link href="/">
            <img src="./logo_ft.svg" alt="logo"  className='img-res'/>
          </Link>
        </div>
        <div className={styled.copyRight}>
          Copyright © 2024 SMTeam. All rights reserved. <span>Privacy Policy</span> Contact Us
        </div>
    </footer>
  )
}
