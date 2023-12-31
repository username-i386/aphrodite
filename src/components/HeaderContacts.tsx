import { SocialWAandTG } from "./SocialWAandTG"
import { VKButton } from "./VKButton"


export const HeaderContacts = () => {
   return (
      <div className="header__container">
         <div className="header__contacts contacts container">
            <div className="contacts__item">
               <p className="contacts__addres before-icon">г. Владивосток, ул. Ладыгина, д. 10</p>
               <div className="dvider"></div>
               <p className="contacts__time before-icon">Пн-Вс 8:00-20:00</p>
            </div>
            <div className="contacts__item">
               <div className="contacts__phone_numbers">
                  <a href="tel:+74231111111" className="contacts__phone before-icon">+7 (423) 111-11-11</a>
                  <a href="tel:+79241111111" className="contacts__phone before-icon">+7 (924) 111-11-11</a>
               </div>
               <div className="dvider"></div>
               <SocialWAandTG />
               <div className="dvider"></div>
               <VKButton />
            </div>
         </div>
      </div>
   )
}