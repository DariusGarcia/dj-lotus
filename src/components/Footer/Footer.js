import './Footer.scss';
import { MdMailOutline, MdCall } from 'react-icons/md';

import { GrSoundcloud } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <section className='footer-section'>
          <h1 id='dj-lotus-title'> ©2022 dj lotus banks.</h1>

          <article className='social-media-links'>
            <IconContext.Provider
              className='fb'
              value={{ color: '#FF7700', size: '1.5rem' }}>
              <a
                href='https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA'
                target='_blank'
                rel='noreferrer'>
                <GrSoundcloud /> <span id='span-media-icons'>Soundcloud</span>
              </a>
            </IconContext.Provider>
          </article>
          <article className='social-media-links'>
            <IconContext.Provider
              className='fb'
              value={{ color: '#4267B2', size: '1.5rem' }}>
              <a
                href='https://www.facebook.com/profile.php?id=100044150903725'
                target='_blank'
                rel='noreferrer'>
                <BsFacebook /> <span id='span-media-icons'>Facebook</span>
              </a>
            </IconContext.Provider>
          </article>
          <p style={{ color: 'white' }}>Terms & Conditions, Privacy</p>
        </section>
        <section className='footer-section'>
          <article className='article-contact-us'>
            <h2 id='footer-contact-me'>Contact us</h2>
            <p id='email-phone-icons'>
              <span id='span-socials-icon'>
                <MdMailOutline />
              </span>{' '}
              Email: bookings@iamlotusbanks.com
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Footer;
