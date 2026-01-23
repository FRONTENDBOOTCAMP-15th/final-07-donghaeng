export default function Signup() {
  return (
    <>
      <div className="signup-wrap">
        {/* <!-- 첫번째 페이지 --> */}
        <form>
          <section className="signup-step active">
            <button type="button" className="back-btn" aria-label="이전페이지" onClick={() => history.back()}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.439367 8.09227C-0.146456 8.59433 -0.146456 9.40968 0.439367 9.91175L9.43761 17.6235C10.0234 18.1255 10.9748 18.1255 11.5606 17.6235C12.1465 17.1214 12.1465 16.306 11.5606 15.804L3.62156 9L11.5559 2.19603C12.1418 1.69396 12.1418 0.878612 11.5559 0.376548C10.9701 -0.125516 10.0187 -0.125516 9.43292 0.376548L0.43468 8.08825L0.439367 8.09227Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="logo-img"></div>
            <fieldset className="email-fieldset">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일을 입력해 주세요" />
              <button type="button" className="email-check-btn">
                중복확인
              </button>
              <span className="field-message field-email">이미 존재하는 아이디 입니다</span>
            </fieldset>

            <fieldset className="password-fieldset">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" placeholder="비밀번호를 입력해 주세요" />
              <span className="field-message field-password">비밀번호는 8자로 대소문자, 특수문자로 되어야합니다.</span>
            </fieldset>

            <fieldset className="password-fieldset">
              <label htmlFor="password-check">비밀번호</label>
              <input type="password" id="password-check" placeholder="" />
              <span className="field-message field-password">비밀번호를 한번 더 입력해 주세요.</span>
            </fieldset>

            <button type="button" className="btn">
              다음으로
            </button>
          </section>

          {/* <!-- ==================================================================================== --> */}
          {/* <!-- 두번째 페이지 --> */}
          {/* <!-- #TODO유효성 검사 통과하면 두번째 페이지로 이동하도록 해야함 --> */}

          <section className="signup-step">
            <button type="button" className="back-btn" aria-label="이전페이지">
              {/* <!-- #TODO 이전 버튼 눌렀을때 이전화면(로그인창)이 아니라 이전 스텝이 보이도록 해야함 --> */}
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.439367 8.09227C-0.146456 8.59433 -0.146456 9.40968 0.439367 9.91175L9.43761 17.6235C10.0234 18.1255 10.9748 18.1255 11.5606 17.6235C12.1465 17.1214 12.1465 16.306 11.5606 15.804L3.62156 9L11.5559 2.19603C12.1418 1.69396 12.1418 0.878612 11.5559 0.376548C10.9701 -0.125516 10.0187 -0.125516 9.43292 0.376548L0.43468 8.08825L0.439367 8.09227Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="logo-img"></div>

            <fieldset className="nickname-fieldset">
              <label htmlFor="nickname">닉네임</label>
              <input type="text" id="nickname" placeholder="닉네임을 입력해 주세요" />
              <button type="button" className="nickname-check-btn">
                중복확인
              </button>
              <span className="field-message field-nickname">닉네임은 최소 2글자 ~ 최대 6글자 사이로 입력해주세요.</span>
              <span className="field-message field-nickname check-nickname">이미 존재하는 닉네임 입니다</span>
            </fieldset>

            <fieldset className="region-fieldset">
              <label htmlFor="region">지역</label>
              <select required name="region" id="region">
                <option value="" disabled selected>
                  지역을 선택해 주세요
                </option>
                <option value="seoul">서울특별시</option>
                <option value="busan">부산광역시</option>
                <option value="daegu">대구광역시</option>
                <option value="incheon">인천광역시</option>
                <option value="gwangju">광주광역시</option>
                <option value="daejeon">대전광역시</option>
                <option value="ulsan">울산광역시</option>
                <option value="sejong">세종특별자치시</option>
                <option value="gyeonggi">경기도</option>
                <option value="gangwon">강원특별자치도</option>
                <option value="chungbuk">충청북도</option>
                <option value="chungnam">충청남도</option>
                <option value="jeonbuk">전라북도</option>
                <option value="jeonnam">전라남도</option>
                <option value="gyeongbuk">경상북도</option>
                <option value="gyeongnam">경상남도</option>
                <option value="jeju">제주특별자치도</option>
              </select>
            </fieldset>

            <fieldset className="gender-fieldset">
              <label htmlFor="gender">성별</label>
              <select required id="gender" name="gender">
                <option value="" disabled selected>
                  성별을 선택해주세요
                </option>
                <option value="m">남</option>
                <option value="f">여</option>
              </select>
            </fieldset>

            <button type="submit" className="btn">
              회원가입
            </button>
          </section>
        </form>
      </div>
    </>
  );
}
