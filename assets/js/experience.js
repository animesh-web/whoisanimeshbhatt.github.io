AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IOT Training",
    cardImage: "assets/images/experience-page/stanford.png",
    place: "Stanford University",
    time: "(Jan, 2021)",
    desp: "<li>Learnt about sensors and mini-computer processors that act on the data collected by the sensors via machine learning and funtioning of IOT.</li> <li>Created a Work research paper about IOT with Blockchain .</li> <li>Created a research work on Iot with Blockchain technology</li>",
  },
  {
    title: "Geoprocessing using Python",
    cardImage: "assets/images/experience-page/isro.jpg",
    place: "ISRO",
    time: "(Mar - Oct, 2021)",
    desp: "<li>Worked with Machine learning and Geoprocessing using Python .</li><li>learned how to best processing vast amount of data collected from satellite imagery in a time and space efficient manner and derive useful information and knowledge from the geospatial data.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards



// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
 
  {
    title: "WaffleHacks",
    subtitle: "contestant",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is a 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "contestant",
    image: "assets/images/experience-page/elevate.png",
  },

  {
    title: "Hack-A-Solution",
    subtitle: "contestant",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "contestant",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  
  

  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
