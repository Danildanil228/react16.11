import logo from './logo.svg';
import './App.css';
import headerimg from './img/Frame.png';
import mainsecone from './img/IMAGE.png';
import mainsectwo from './img/xxx.png';
import fiveimg from './img/fram.png';
import React, { useState } from 'react';
import inst from './img/inst.png';
import face from './img/face.png';
import tik from './img/tik.png';
import iin from './img/iin.png';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    setInputValue('');
  };
  return (
    <body>
      <header>
        <div class="header-img">
          <div class="header-nav">
            <div class="header-nav">
              <div><a href="">Membership</a></div>
              <div><a href="">Impact</a></div>
            </div>
            <div class="header-nav-two">
              <div><a href="">Sign in</a></div>
              <div><a href="">Reserve</a></div>
            </div>
          </div>
          <div class="header-text">
            <div class="header-text-up">Food isn’t trash</div>
            <div class="header-text-dw">Mill keeps it from stinking up your kitchen — and the planet.</div>
            <div class="header-div-btn"><a href="" class="header-btn"><img src={headerimg}></img>Watch video</a></div>
          </div>
        </div>
      </header>
      <main>
        <section class="main-sec-one">
          <div>
            <div>
              <div class="main-text">
                <div>Outsmart waste</div><div>from your home</div>
              </div>
              <div class="text-cor-main">
                <div>The Mill Membership is a simple way to keep</div>
                <div>food out of landfills, send it back to farms, and </div>
                <div>make your kitchen smell awesome.</div>
              </div>
              <div class="num-string">
                <div class="num">1</div>
                <div class="text-cor">Food-shrinking, de-stinking Mill kitchen bin</div>
              </div>
              <div class="num-string">
                <div class="num">2</div>
                <div class="text-cor">Seamless mail-back pathway to farms</div>
              </div>
              <div class="num-string">
                <div class="num">3</div>
                <div class="text-cor">Personalized impact tracking</div>
              </div>
              <div class="main-but"><a class="main-a" href="">How it works</a></div>
            </div>
          </div>
          <div>
            <img src={mainsecone}></img>
          </div>
        </section>
        <section class="main-sec-two">
        <div class="main-img-sec">
          <img src={mainsectwo}></img>
        </div>
        <div>
          <div class="main-h">
            <div>No more</div><div>nasty trash</div>
          </div>
          <div class="main-text-h">
            <div>Instead of throwing kitchen scraps away, throw them</div>
            <div>in the bin that comes with your Mill Membership. It</div>
            <div>dries, shrinks, and de-stinks everything overnight. No</div>
            <div>weird smells. No drippy bags. No wasted food.</div>
          </div>
          <div>
            <a class="main-a-two" href=""> Meet the bin</a>
          </div>
        </div>
        </section>
        <section class="main-sec-three">
          <div class="main-sec-th">
              <div class="three-bg">
              <div class="th-text">
                <div>Wasted food</div>
                <div>is worse than</div>
                <div>you think</div>
              </div>
              <div class="th-text-two">
                <div>Greenhouse gas from global food waste does more </div>
                <div>damage to the planet than the entire</div>
                <div>We have to stop dumping what we can’t eat into the </div>
                <div>trash. Don’t worry, we’ve got a plan.</div>
                <div class="th-a"><a class="main-a" href="">See the impact</a></div>
              </div>
            </div>
          </div>
          
        </section>
        <section class="sec-four">
          <div class="center">
            <div class="ln">Become a Mill member</div>
            <div class="sn">Reserve a bin. De-stink your kitchen. Stop wasting food.</div>
            <div class="sn">Shipping spring 2023.</div>
            <div class="btn-four" ><a class="main-a" href="">Reserve now</a></div>
          </div>
        </section>
        <section class="sec-five">
          <div class="five-text">
            Stay in the loop
          </div>
          <div>
            <div>
              <div><input value={inputValue} onChange={handleInputChange} class="in"></input><button onClick={handleButtonClick}><img src={fiveimg} alt="" /></button></div>
              <div>By signing up for updates from Mill, you agree to our   Privacy Policy</div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="footer">
          <div class="sec-foot">
          <div>
            <div class="foot-ln" >Company</div>
            <div class="foot-sn" ><a href="">Team</a></div>
            <div class="foot-sn"><a href="">Careers</a></div>
            <div class="foot-sn"><a href="">Pressroom</a></div>
          </div>
          <div>
            <div class="foot-ln" >Help</div>
            <div class="foot-sn"><a href="">FAQ</a></div>
            <div class="foot-sn"><a href="">Help center</a></div>
            <div class="foot-sn"><a href="">Contact us</a></div>
          </div>
          <div>
            <div class="foot-ln" >For Partners</div>
            <div class="foot-sn"><a href="">Organizations</a></div>
            <div class="foot-sn"><a href="">Municipalities</a></div>
            <div class="foot-sn"><a href="">Communities</a></div>
          </div>
        </div>
        <div class="sec-foot-img">
          <div><a href="https://t.me/xxkinff"><img src={inst} alt=""/></a></div>
          <div><a href="https://t.me/xxkinff"><img src={iin} alt="" /></a></div>
          <div><a href="https://t.me/xxkinff"><img src={tik} alt="" /></a></div>
          <div><a href="https://t.me/xxkinff"><img src={face} alt="" /></a></div>
        </div>
        </div>
        <div class="foot">
          <div class="foot-t">
            <div>Terms of service</div>
            <div>Trademarks</div>
            <div>Privacy policy</div>
          </div>
          <div class="fot">
          Copyright © 2023 Mill Industries Inc. Mill, Mill Membership, Food Grounds, and related marks are trademarks of Mill.
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
