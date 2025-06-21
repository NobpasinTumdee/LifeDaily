import { SheetsList } from '../MockAPI/Mock';
import type { Sheet } from '../MockAPI/Mock';


const BuySheet = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '1rem 0 0' }}>Buy Sheets</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, non.</p>
      </div>
      <div className="sheet-container">
        {SheetsList.map((Sheet: Sheet) => (
          <div key={Sheet.id} className="sheet-card" data-aos="flip-right">
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

export default BuySheet
