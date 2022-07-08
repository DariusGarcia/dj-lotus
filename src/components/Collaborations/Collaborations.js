import React from 'react';
import './Collaborations.scss';

export default function Collaborations() {
  return (
    <div className='collaborations-container'>
      <header className='collaborations-header'>
        <h1>Music Group Collaborations</h1>
      </header>
      <section className='collaborations-section'>
        <article className='article-groups'>
          <a href='https://www.globalbpm.com/'>
            <h3>Global BPM</h3>
          </a>
          <p>San Diego, CA</p>
        </article>
        <article className='article-groups'>
          <a href='https://www.grittyinpink.co/'>
            <h3>Gritty in Pink</h3>
          </a>
          <p>North Hollywood, CA</p>
        </article>
      </section>
    </div>
  );
}
