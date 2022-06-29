import "./Schedule.scss";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function Schedule() {
  return (
    <Element name="schedule">
      <div className="schedule-container">
        <header className="schedule-header">
          <h1 id="schedule">Schedule</h1>
        </header>
        <section className="schedule-list">
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
          <article className="shows-list-article">
            <h3>Saturday, July 7, 2019</h3>
            <h2>HoneyDip Riddim in La Jolla, California</h2>
          </article>
        </section>
      </div>
    </Element>
  );
}

export default Schedule;
