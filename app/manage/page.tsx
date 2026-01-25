import profile from '@/public/icon/profile.svg';
import heart from '@/public/icon/heart.svg';
import styles from './manage.module.css';

export default function Manage() {
  return (
    <>
      <div className={styles['manage-body']}>
        <h1 className={styles['manage-title']}>신청자 목록</h1>
        <div className={styles['applicant-div']}>
          <div className={styles['applicant-information']}>
            <img src={profile.src} alt="프로필이미지" />
            <span>나폴리맛피자</span>
            <figure>
              <img src={heart.src} alt="심박수이미지" />
              <figcaption>
                90 <br />
                bpm
              </figcaption>
            </figure>
            <button className={styles['btn-approve']}>승인</button>
            <button className={styles['btn-no']}>거절</button>
          </div>
          <div className={styles['question-div']}>
            <dt>질문1</dt>
            <dd>질문에 대한 답변을 가져오는 위치</dd>
          </div>
          <div className={styles['question-div']}>
            <dt>질문2</dt>
            <dd>질문에 대한 답변을 가져오는 위치</dd>
          </div>
        </div>
      </div>
    </>
  );
}
