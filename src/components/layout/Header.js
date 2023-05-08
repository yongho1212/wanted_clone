import Component from "../../core/Component.js";

export default class Header extends Component {
  template() {
    return `
        <nav id="headerNavContainer">
                <!-- 헤더좌측 로고 / 드로어-->
                <div id="headerLogo">
                    <div id="logoDrawer">
                        <img src="../../src/assets/hamburger.png" width="20px" style="margin-top: 5px;">
                        <!-- drawer Contents -->
                        <div class="drawerContainer">
                            <ul>
                                <li>직군전체</li>
                                <a href="./develop.html"><li>개발</li></a>
                                <li>경영 비즈니스</li>
                                <li>직군전체</li>
                                <li>직군전체</li>
                                <li>직군전체</li>
                                <li>직군전체</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-left: 10px;">
                        <a href="./index.html"><img src='../../src/assets/wantedtextlogo.svg' width="90px"></a>


                    </div>


                </div>
                <!-- 헤더 중앙 네브-->
                <div id="headerNav">
                    <ul id="headerNavList">
                        <li><a href="./job.html">채용</a></li>
                        <li>이벤트</li>
                        <li>직군별 연봉</li>
                        <li>이력서</li>
                        <li>커뮤니티</li>
                        <li>프리랜서</li>
                        <li>AI 합격예측</li>
                    </ul>
                </div>
                <!-- 헤더 우측 로그인 기업서비스-->
                <div id="headerAuth">
                    <button id="headerAuthLogin">
                        🔍 회원가입/로그인
                    </button>
                    <hr style="height: 15px; color:grey;">
                    <div style="font-weight: 500; 
                        font-size: 13px; 
                        margin-inline: 7px;
                        color: grey;
                        border: 1px solid grey;
                        padding: 5px 7px;
                        border-radius: 20px;
                        margin-left: 20px;
                    ">
                        기업 서비스
                    </div>
                </div>
            </nav>
        `;
  }
}
