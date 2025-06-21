import { useEffect, useState } from 'react';
import './stylepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Help = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // ความยาวของ animation (ms)
      once: true,     // ให้ animation เล่นแค่ครั้งเดียว
    });
  }, []);


  return (
    <>
      <div className='Help-text-header'><h1>คำถามที่พบบ่อย</h1></div>
      <div className='Help-drop-down'>
        <h2>สำหรับผู้ขายชีท</h2>
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen1(!isOpen1)}>📌ลงขายกับ Life Daily ดีอย่างไร?</h2>
          {isOpen1 &&
            <li>
              เรามีผู้ติดตามและฐานลูกค้าจำนวนมากให้อยู่แล้ว พร้อมโปรโมทให้ตลอด เป็นตัวกลางที่พร้อมบริการ สะดวกสบายกว่าเปิดขายเอง ผู้ขายไม่ต้องยุ่งนั่งตอบลูกค้าเอง ไม่ต้องส่งชีทเอง เอาเวลาไปอ่านสอบของตัวเองได้เต็มที่ รอรับเงินทุกสิ้นเดือนอย่างเดียว!
              อีกทั้งเรามีกฎกติกาในการขาย รายงานสถานะยอดขายที่ชัดเจน สามารถตรวจสอบได้ทุกเมื่อ
            </li>
          }
        </ul><hr />
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen2(!isOpen2)}>📌อยากลงขายชีทต้องทำอย่างไร?</h2>
          {isOpen2 &&
            <li>
              เข้าเว็บ https://lifedaily/ - กดเข้าสู่ระบบผ่าน - facebook - ไปที่หน้า “ขายชีท” - กรอกข้อมูลเพื่อลงทะเบียน - อัพโหลดชีทเองได้เลย ! จากนั้นรอให้ทีมงานตรวจสอบมาตรฐานของชีทและกดอนุมัติ หากชีทที่ส่งมายังไม่ได้มาตรฐานหรือควรปรับแก้ไข ทางเราจะแจ้งกลับไป เพื่อให้ชีทในระบบมีคุณภาพ เพื่อประโยชน์ของทั้งผู้ซื้อและผู้ขายให้มากที่สุด
            </li>
          }
        </ul><hr />
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen3(!isOpen3)}>📌การตั้งราคาชีทควรเป็นอย่างไร?</h2>
          {isOpen3 &&
            <li>
              ต้องบอกก่อนว่าจริงๆมาตรฐานที่เคยทำและตั้งไว้คือ หน้าละ 1 บาท แต่กลับมีบางส่วนได้พยายามทำจำนวนหน้ามาเยอะๆ เพิ่มเติมสิ่งที่ไม่จำเป็นเข้าไปในชีทเพื่อต้องการเพิ่มรายได้ในส่วนนี้ และผู้ที่ตั้งใจทำชีทมากๆ สรุปกระชับ แต่จำนวนน้อย กลับได้รายได้น้อยกว่าที่ควร ทีมงานจึงปรับให้ผู้เขียนตั้งราคาชีทตามคุณค่าที่คู่ควร
              เช่น ชีทที่มีจำนวนหน้าเหมาะสมกับเนื้อหา อ่านได้เข้าใจ หรือมีเนื้อหาแน่นแบบเน้นๆ ถอดความจากเสียงอาจารย์ หาข้อมูลมาประกอบ ต้องตั้งใจฟังและเข้าเรียนมากเป็นพิเศษ ควรที่จะเพิ่มราคาให้เหมาะสม หรือเท่าที่ผู้ซื้อจะสามารถยอมจ่ายได้
              หากทีมงานเห็นว่า ราคาที่ตั้งมาน้อยกว่าที่ควร เราจะยังไม่อนุมัติและเสนอให้ผู้ขายตั้งราคาใหม่
            </li>
          }
        </ul><hr />
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen4(!isOpen4)}>📌สัดส่วนรายได้เป็นอย่างไร?</h2>
          {isOpen4 &&
            <li>
              เนื่องจากทาง Life daily ต้องบริการลูกค้าทั้งผู้ซื้อและผู้ขายให้ดีที่สุด ทางเราจึงต้องมีค่าใช้จ่ายในการพัฒนาระบบอยู่เสมอ รวมถึงการโปรโมทชีทซึ่งช่วยให้ทางผู้ขายมีรายได้และประหยัดเวลา ดังนั้นทางผู้ขายจะมีรายได้ 80% ของยอดขายทั้งหมด “เป็นประจำอย่างต่อเนื่องทุกๆเดือน” และชีทจะอยู่ในระบบตลอดจนกว่าทางผู้ขายจะแจ้งลบ
            </li>
          }
        </ul><hr />
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen5(!isOpen5)}>📌การตัดรอบรายได้เป็นอย่างไร?</h2>
          {isOpen5 &&
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolorem perferendis accusantium. Tenetur voluptate debitis quam? Animi culpa voluptate iure totam, rerum praesentium perferendis id consequuntur qui eligendi neque voluptatibus ratione dolorem. Quod quis totam illum ex incidunt, quibusdam itaque.
            </li>
          }
        </ul><hr />
        <ul className='Help-drop-down-ul' data-aos="zoom-out-right">
          <h2 onClick={() => setIsOpen6(!isOpen6)}>📌ชีทสรุปที่เราจะอนุมัติให้ผ่านควรเป็นอย่างไร?</h2>
          {isOpen6 &&
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet distinctio adipisci necessitatibus repellendus ab, quibusdam temporibus, voluptatum laboriosam tempora cumque earum nemo et, id exercitationem recusandae. Libero, ea eligendi ratione repellat rem amet, veritatis inventore delectus ipsum incidunt dignissimos voluptates?
            </li>
          }
        </ul><hr />
      </div>
    </>
  )
}

export default Help
