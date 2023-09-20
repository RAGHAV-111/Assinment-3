import React from 'react';
import classes from './Home.module.css';
import TourInfo from './TourInfo';

const Home = () => {


  const tourInfo = [
    { date: 'JUL 16', place: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
    { date: 'JUL 19', place: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
    { date: 'JUL 22', place: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
    { date: 'JUL 29', place: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },

  ];



  const tourInfoList = tourInfo.map((tour) => (<TourInfo tour={tour} key={Math.random().toString()} />))

  return (
    <section className={classes.section}>
      <div className='container' style={{ width: "800px" }}>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://c0.wallpaperflare.com/preview/95/233/127/adults-artists-band-concert.jpg" class="d-block w-100" alt="..." width="30px" height="400px" />
            </div>
            <div class="carousel-item">
              <img src="https://images.snapwi.re/1a61/559cb1da0c737afe7e7b23c6.w800.jpg" class="d-block w-100" alt="..." width="30px" height="400px" />
            </div>
            <div class="carousel-item">
              <img src="https://s.wsj.net/public/resources/images/B3-BY031_TRUCKE_IM_20181002114854.jpg" class="d-block w-100" alt="..." width="30px" height="400px" />
            </div>
            <div class="carousel-item">
              <img src="https://global-uploads.webflow.com/62d691a88df4876c34575a08/641c8b395f4605639562f6e9_how-to-start-a-band-and-get-booked-header.jpeg" class="d-block w-100" alt="..." width="30px" height="400px" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      </div>
      <br></br>
      <h2>TOURS DETAILS</h2>
      <div className={classes.tourInfo}>
        {tourInfoList}
      </div>
    </section>
  );
};

export default Home;
