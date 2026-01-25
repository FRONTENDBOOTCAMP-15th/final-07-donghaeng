import styles from './apply.module.css';

export default function Apply() {
  return (
    <>
      <div className={styles['apply-body']}>
        <h1 className={styles['apply-title']}>모임 신청</h1>
        <div className={styles['question-div']}>
          <h3>질문 1</h3>
          <textarea name="질문 1" id=""></textarea>
        </div>
        <div className={styles['question-div']}>
          <h3>질문 2</h3>
          <textarea name="질문 2" id=""></textarea>
        </div>
        <div className={styles['btn-div']}>
          <button className={styles['btn-apply']}>신청하기</button>
          <button className={styles['btn-cancel']}>취소하기</button>
        </div>
      </div>
    </>
  );
}
