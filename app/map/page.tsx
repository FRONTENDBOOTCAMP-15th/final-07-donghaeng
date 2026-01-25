import dobai from './images/doobai.png';
import tag from '@/public/icon/tag.svg';
import info from '@/public/icon/info.svg';
import people from '@/public/icon/people.svg';
import calender from '@/public/icon/calendar.svg';
import map from './images/map.png';
import styles from './map.module.css';

export default function Map() {
  return (
    <>
      <div className={styles['map-body']}>
        <img src={map.src} alt="지도" className={styles.map} />
        <div className={styles['metting-div']}>
          <div className={styles['metting-information']}>
            <img src={dobai.src} alt="모임 사진" className={styles['metting-information-img']} />
            <div className={styles['detail-information']}>
              <h3>세상에서 제일 비싼 두쫀쿠 만들기</h3>
              <p>
                <img src={tag.src} alt="태그" />
                마포구. 보드게임
              </p>
              <p>
                <img src={info.src} alt="나이 성별" />
                20 ~ 30대, 남녀무관
              </p>
              <p>
                <img src={people.src} alt="인원" />
                인원 4명 ~ 5명
              </p>
              <p>
                <img src={calender.src} alt="캘린더" />
                26.1.27(화) 오후 3:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
