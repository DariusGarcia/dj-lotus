import honeyDip from '../../images/flyer/HoneyDip.jpeg';
import july7 from '../../images/flyer/july7.jpeg';
import july8 from '../../images/flyer/july8.jpeg';
import honeyDip2 from '../../images/flyer/HoneyDip2.jpeg';
import merrow from '../../images/flyer/TheMerrow.jpeg';
import july23 from '../../images/flyer/july23.jpeg';
import eden from '../../images/flyer/eden-show.png';
import './Schedule.scss';
import * as Scroll from 'react-scroll';

let Element = Scroll.Element;

function Schedule() {
  return (
    <Element name='schedule'>
      <div className='schedule-container'>
        <header className='schedule-header'>
          <h1 id='schedule'>Schedule</h1>
          <button type='button' className='btn-book-shows'>
            Click to Book
          </button>
        </header>

        <section className='schedule-list'>
          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Thursday, July 7, 2022</h3>
              <p>10:00P.M. - 2:00A.M.</p>
              <a
                href='https://richssandiego.com/bouncehouse-2/'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              <img src={july7} alt='july7' className='flyers' />
              <p className='schedule-event-location'>
                Hosted by the Bounce House in San Diego
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Friday, July 8, 2022</h3>
              <p>9:00P.M - CLOSE</p>
              <button type='button' className='btn-buy-tickets'>
                Buy Tickets
              </button>
            </div>
            <div className='schedule-events'>
              <img src={july8} alt='july8' className='flyers' />
              <p className='schedule-event-location'>
                Presented by Number One Fifth Avenue in San Diego
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Sunday, July 10, 2022</h3>
              <p>11:00A.M. - 2:00P.M.</p>
              <a
                href='https://www.eventbrite.com/o/martinis-san-diego-44929378413'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip2} alt="honeyDip2" className="flyers" /> */}
              <p className='schedule-event-location'>
                Hosted by Martinis in San Diego
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Wednesday, July 13, 2022</h3>
              <p>8:00P.M. - 10:00P.M.</p>
              <button type='button' className='btn-buy-tickets'>
                Buy Tickets
              </button>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip} alt="honeyDip" className="flyers" /> */}
              <p className='schedule-event-location'>
                Hosted by Gossip Grill in San Diego
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Friday, July 15, 2022</h3>
              <p>4:00P.M. - 8:00P.M.</p>
              <a
                href='https://www.eventbrite.com/o/martinis-san-diego-44929378413'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip} alt="honeyDip" className="flyers" /> */}
              <p className='schedule-event-location'>
                Hosted by Martinis in San Diego
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Friday, July 15, 2022</h3>
              <p>9:00P.M. - 2:00A.M.</p>
              <a
                href='https://www.eventbrite.com/e/queergxrl-pride-party-andaz-san-diego-tickets-313069418057'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip} alt="honeyDip" className="flyers" /> */}
              <p className='schedule-event-location'>
                Hosted by QueerGxrl Pride Party at the Andaz Hotel
              </p>
            </div>
          </article>

          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Saturday, July 16, 2022</h3>
              <p>4:00P.M. - 6:00P.M.</p>
              <button type='button' className='btn-buy-tickets'>
                Buy Tickets
              </button>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip} alt="honeyDip" className="flyers" /> */}
              <p className='schedule-event-location'>Hosted in Balboa Park</p>
            </div>
          </article>
          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Saturday, July 16, 2022</h3>
              <p>6:00P.M. - 10:00P.M.</p>
              <a
                href='https://www.edenentertainmentgroup.com/'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              <img src={eden} alt='eden' className='flyers' />
              <p className='schedule-event-location'>
                Hosted by Eden Entertainment Humphreys
              </p>
            </div>
          </article>
          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Saturday, July 16, 2022</h3>
              <p>12:00A.M. - 4:00A.M.</p>
              <button type='button' className='btn-buy-tickets'>
                Buy Tickets
              </button>
            </div>
            <div className='schedule-events'>
              {/* <img src={honeyDip} alt="honeyDip" className="flyers" /> */}
              <p className='schedule-event-location'>
                Hosted by the Merrow in San Diego
              </p>
            </div>
          </article>
          <article className='shows-list-article'>
            <div className='schedule-event-dates'>
              <h3>Saturday, July 23, 2022</h3>
              <p>5:00P.M. - 9:00P.M.</p>
              <a
                href='https://www.ticketweb.com/event/hillcrest-variety-pack-the-merrow-tickets/11962665'
                target='_blank'
                rel='noreferrer'>
                <button type='button' className='btn-buy-tickets'>
                  Buy Tickets
                </button>
              </a>
            </div>
            <div className='schedule-events'>
              <img src={july23} alt='honeyDip' className='flyers' />
              <p className='schedule-event-location'>
                Hosted by the Merrow in San Diego
              </p>
            </div>
          </article>
        </section>
      </div>
    </Element>
  );
}

export default Schedule;
