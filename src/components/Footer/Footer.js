import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
      <footer className='footer-container'>
          <div className='footer-style'>
          <div className='footer-top'><h3>Questions? Call 000-800-040-1843</h3></div>
          <div className='footer'>
              <section className='footer-data'>
                    <Link to='#'>FAQ</Link>
                    <Link to='#'>Investor Relation</Link>
                    <Link to='#'>Privecy</Link>
                    <Link to='#'>Speed Test</Link>
              </section>
              <section className='footer-data'>
                    <Link to='#'>Help Center</Link>
                    <Link to='#'>Jobs</Link>
                    <Link to='#'>Cookie Preferences</Link>
                    <Link to='#'>Ligal Notice</Link>
              </section>
              <section className='footer-data'>
                    <Link to='#'>Amount</Link>
                    <Link to='#'>Way to watch</Link>
                    <Link to='#'>Corporete Information</Link>
                    <Link to='#'>only on netflix</Link>
              </section>
              <section className='footer-data'>
                    <Link to='#'>Media Center</Link>
                    <Link to='#'>Term of use</Link>
                    <Link to='#'>Contact Us</Link>
                     
              </section>

          </div>
          <div className='flex'>
          <div className='footer-bottom'><h3>Netflix India </h3></div>
          <div className='footer-bottom'><h3> Rahul Pradhan</h3></div>
          </div>
          
          
          
          </div>
      </footer>
    )
}

export default Footer
