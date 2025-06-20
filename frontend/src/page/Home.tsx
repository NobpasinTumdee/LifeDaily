// rafce
import './stylepage.css'

const Home = () => {
  return (
    <>
      <div className='Home-Ad'>
        <div className='Home-Ad-text'>
          <h1>คุณโง่ คุณซื้อ คุณฉลาด คุณขาย</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sint laudantium soluta pariatur necessitatibus fugiat quo fugit corporis deleniti magni libero rem culpa dicta reprehenderit suscipit quis, at inventore illum?</p>
          <div>
            <button>Buy sheets</button>
            <button>Sell sheets</button>
          </div>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Hu_Tao_%28Genshin_Impact%29.png" alt="" />
        </div>
      </div>
      <div>
        <h1>ค้นหาชีทที่คุณต้องการเลย</h1>
      </div>
      <div>
        <h1>สถาบันที่มีเหล่าเพื่อนยามยากที่ร่วมแชร์สรุปในแพลตฟอร์ม</h1>
      </div>
    </>
  )
}

export default Home
