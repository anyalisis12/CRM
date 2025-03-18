import React from 'react'
import './Cards.css';
import water from "./assets/water.jpg";
import highercrop from "./assets/highercrop.jpg";
import cost from "./assets/cost.jpeg";
import Smartirrigation from "./assets/Smartirrigation.jpg";
import soil from "./assets/soil.jpg";
import fruits from "./assets/fruits.jpg";
import { Carousel } from "react-bootstrap";

const Cards = () => {
  return (
    <>
    <div>
      <div class="container" >
      <div class="card" >
        <img src={water} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Efficient Water Use</h5>
          <p class="card-text">Drip irrigation ensures water reaches the roots directly, minimizing wastage and improving efficiency..</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="card" >
        <img src={highercrop} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Higher Crop Yield</h5>
          <p class="card-text">With controlled water distribution, plants receive optimal moisture, leading to better growth and increased yields.</p>
          <a href="#" class="btn btn-primary">Explore Benefits</a>
        </div>
      </div>
      <div class="card" >
        <img src={cost} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Cost-Effective Farming</h5>
          <p class="card-text">Reduce water consumption, lower labor costs, and enhance productivity with an advanced drip irrigation system</p>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
      </div>
      <div class="card" >
        <img src={fruits} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Ideal for Various Crops</h5>
          <p class="card-text">Drip irrigation works best for fruits, vegetables, and cash crops, ensuring a steady supply of nutrients.</p>
          <a href="#" class="btn btn-primary">See Suitable Crops</a>
        </div>
      </div>
      <div class="card" >
        <img src={Smartirrigation} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Smart Drip Technology for Modern Farming</h5>
          <p class="card-text">Upgrade to automated drip irrigation systems for real-time monitoring and water management.</p>
          <a href="#" class="btn btn-primary">Discover Innovation</a>
        </div>
      </div>
      <div class="card" >
        <img src={soil} class="card-img-top" alt="drip" />
        <div class="card-body">
          <h5 class="card-title">Reduce Soil Erosion & Improve Soil Health</h5>
          <p class="card-text">Minimize runoff and nutrient loss by providing a slow, steady supply of water directly to the soil.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
      </div>
    </div>

    <div className="container1 my-5">

    <h1 className="text-primary">Crop knowledge sharing</h1>
    <p>
        Crop knowledge sharing helps farmers maximize yields with expert guidance.
        Our agronomists provide personalized support, best practices, and precision irrigation
        techniques. With over 50 years of experience, we offer up-to-date insights for improved
        crop quality. Learn sustainable methods to enhance productivity and
        efficiency. Stay informed with the latest agricultural innovations for long-term success.
    </p>
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/bynder/EEFACD4C-18CA-4955-811EEAC63FA0F00B-cotton-field-of-india.jpg"
                alt="Cotton" />
            <Carousel.Caption>
                <h3>Cotton</h3>
                <p>Maintaining moisture levels in the cotton field proves to be challenging.
                    It could foster pest attacks and diseases. Hence, drip irrigation that maintains moisture levels is the best solution here. Besides, cotton farming in India, which is dependent on flood irrigation, could face challenges with flowering, ball development, and ball opening.
                    These factors require balanced nutrition, a 95% germination rate, etc. and this is why cotton
                    cultivation requires precision irrigation.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=750,/contentassets/1d4628e2d99246328326aef304406817/banana-fruit-.jpg?v=49311b"
                alt="Banana" />
            <Carousel.Caption>
                <h3>Banana</h3>
                <p>Banana requires a lot of water to grow, and hence dry spells are a major risk impacting banana productivity.
                    The other challenge is that of banana cultivation being dominated by conventional growing techniques that
                    include applying fertilizers in the forms of pellets. Although cost-effective, it is ineffective. This is
                    because nutrients may leach or evaporate after their application. Bananas are best grown in more acidic
                    soil with a pH from 6 to 7.5. Low pH levels of soil increase the risk of the disease Panama.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/globalassets/demo/potato/potatoes_challenge.jpg?v=48d5e8"
                alt="Potatoes" />
            <Carousel.Caption>
                <h3>Potatoes</h3>
                <p>To grow potatoes, you need to stay in control of a lot of diverse factors such as weather,
                    deteriorating soil quality, water scarcity, etc. And,
                    if these factors weren’t enough, ever-increasing operational, fertilizer and labour costs,
                    add to challenges of potato growers in India.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
<div className="container2 my-5 px-6">
        <div className="row align-items-center">
           
            <div className="col-md-6">
                <h2 className="text-primary">Why Precision Irrigation in Banana Cultivation?</h2>
                <ul className="list-unstyled">
                    <li>
                        <strong>• Reduce Climate Related Risks</strong>
                        <p>
                        Precision irrigation provides a stable and controlled water supply, reducing the impact of 
                        unpredictable weather conditions such as droughts, excessive rainfall, and temperature fluctuations on banana crops.
                        </p>
                    </li>
                    <li>
                        <strong>• Saves Resources and Reduces Costs</strong>
                        <p>
                        Precision irrigation optimizes water, fertilizers, and energy use by supplying only what is needed, 
                        preventing wastage. This reduces operational costs while enhancing soil health and crop productivity. 
                        Lower resource consumption also minimizes environmental impact and improves sustainability.
                        </p>
                    </li>
                    <li>
                        <strong>• Optimizes Water and Nutrient Use</strong>
                        <p>
                        
                        Precision irrigation ensures that water and nutrients are delivered directly to the plant roots
                         in the right quantity, enhancing absorption and minimizing runoff. This targeted approach reduces 
                         wastage, prevents soil erosion, and maintains soil fertility.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 text-center">
                <img
                    src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/bynder/CAF80337-7828-41DE-9B8FC185140BE4C6-hand-with-dripping---drop-by-drop.jpg"
                    alt="Precision Irrigation"
                    className="img-fluid rounded" />
            </div>
        </div>
    </div>


<div className="container my-5" style={{ marginTop: "-20px" }} >
      <div className="row">
        <div className="col-sm-4">
          <div className="card custom-card" style={{ height: "100px", width:"400px"}}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "25px" }} >15+</h5>
              <h5 className="card-title" style={{ fontSize: "25px" }} >Experiences</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4" >
          <div className="card custom-card" style={{ height: "100px", width:"400px"}}>
            <div className="card-body">
              <h5 className="card-title"  style={{ fontSize: "25px" }}>20K+</h5>
              <h5 className="card-title"  style={{ fontSize: "25px" }}>Happy Farmers</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card custom-card" style={{ height: "100px", width:"400px"}}>
            <div className="card-body">
              <h5 className="card-title"  style={{ fontSize: "25px" }}>50M+</h5>
              <h5 className="card-title"  style={{ fontSize: "25px" }}>Products</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards
