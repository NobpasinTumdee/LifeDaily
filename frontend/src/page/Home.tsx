// rafce
import { useEffect } from 'react';
import './stylepage.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SheetsList } from '../MockAPI/Mock';
import type { Sheet } from '../MockAPI/Mock';

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // ความยาวของ animation (ms)
      once: true,     // ให้ animation เล่นแค่ครั้งเดียว
    });
  }, []);
  return (
    <>
      <div className='Home-Ad'>
        <div className='Home-Ad-text' data-aos="zoom-in-down">
          <h1>คุณโง่ คุณซื้อ คุณฉลาด คุณขาย</h1>
          <h2>คุณรับ 80% เรารับแค่ 20%</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sint laudantium soluta pariatur necessitatibus fugiat quo fugit corporis deleniti magni libero rem culpa dicta reprehenderit suscipit quis, at inventore illum?</p>
          <div className='group-home-button'>
            <p  className='Home-button'>Buy sheets</p>
            <p data-aos="zoom-in" data-aos-duration="2000" className='Home-button-sell'>Sell sheets</p>
          </div>
        </div>

        <div className='picture-home-ad' data-aos="fade-left" data-aos-duration="2500" >
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Hu_Tao_%28Genshin_Impact%29.png" alt="" data-aos="zoom-out-up" data-aos-duration="1300" />
          <img className='picture-ad' src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/genshin-impact/b/bf/Ganyu_Genius_Invokation_Card_2.png" width={250} alt="" />
        </div>
      </div>
      <div className='Home-content'>
        <h1>ค้นหาชีทที่คุณต้องการเลย</h1>
      </div>
      <div className="sheet-container">
        {SheetsList.map((Sheet: Sheet) => (
          <div key={Sheet.id} className="sheet-card" data-aos="zoom-in-up">
            <div className="sheet-info">
              <h1>{Sheet.CourseCode}</h1>
              <p>{Sheet.name}</p>
              <p>By {Sheet.owner}</p>
              <p>Term {Sheet.term}/{Sheet.year}</p>
              <p>฿ {Sheet.price.toLocaleString()} BATH</p>
            </div>
            <div className="sheet-extra">
              <div>Sold {Sheet.sold}</div>
              <div className='sheet-button'>🔍 More details</div>
              <div className='sheet-button'>🛒 Add to Cart</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
