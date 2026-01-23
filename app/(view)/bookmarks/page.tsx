import styles from './Bookmarks.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Bookmarks() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>북마크</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.bookmarkIcon}>
              <img src="/icon/bookmark-on.svg" alt="북마크" width={24} height={24} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.imageWrapper}>
                <div className={styles.characterImage}>{/* 캐릭터 이미지 placeholder */}</div>
              </div>
              <div className={styles.infoWrapper}>
                <h2 className={styles.cardTitle}>세상에서 제일 비싼 두쫀쿠 만들기</h2>
                <ul className={styles.infoList}>
                  <li className={styles.infoItem}>
                    <span className={styles.bullet}>●</span>
                    <span>마포구. 보드게임</span>
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.bullet}>●</span>
                    <span>20~30대, 남녀무관</span>
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.bullet}>●</span>
                    <span>인원 4~5명</span>
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.bullet}>●</span>
                    <span>2026.1.27(화) 오후 3:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.arrowIcon}>
              <img src="/icon/arrow.svg" alt="상세보기" width={20} height={20} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
