import honeyDip from "../../images/flyer/HoneyDip.jpeg";
import honeyDip2 from "../../images/flyer/HoneyDip2.jpeg";
import merrow from "../../images/flyer/TheMerrow.jpeg";
import "./Schedule.scss";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function Schedule() {
  return (
    <Element name="schedule">
      <div className="schedule-container">
        <header className="schedule-header">
          <h1 id="schedule">Schedule</h1>
          <button type="button" className="btn-book-shows">
            Click to Book
          </button>
        </header>

        <section className="schedule-list">
          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={merrow} alt="merrow" className="flyers" />
              <h2>The Merrow in San Diego, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip} alt="honeyDip" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip2} alt="honeyDip2" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip} alt="honeyDip" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip} alt="honeyDip" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip} alt="honeyDip" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>

          <article className="shows-list-article">
            <div className="schedule-event-dates">
              <h3>Saturday, February 26, 2022</h3>
              <button type="button" className="btn-buy-tickets">
                Buy Tickets
              </button>
            </div>
            <div className="schedule-events">
              <img src={honeyDip} alt="honeyDip" className="flyers" />
              <h2>HoneyDip Riddim in La Jolla, California</h2>
            </div>
          </article>
        </section>
      </div>
    </Element>
  );
}

export default Schedule;
