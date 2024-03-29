<div align="center">

<h2> 나는 내일 </h2>
<img width="283" alt="스크린샷 2023-11-26 오전 8 09 50" src="https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/eefce8a9-c947-4d2c-9087-b03bee48d8ca">

<div>내일을 기록하는 일기 웹앱 : 내면성장을 위해 쓰는 ‘일기’는 과거의 기록이다. 바꿀 수 없는 오늘의 기록 대신, 내일을 상상하며 살아갈 에너지를 느끼자</div>

</div>

<h2> ✨ '나는 내일' 주요 기능 </h2>

<h3> 1️⃣ 내일 일기 작성 </h3>
<img width="200" alt="스크린샷 2023-11-26 오전 8 07 27" src="https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/ed4d9a48-6d16-4001-8314-00f3dfd5ba02">

<img width="200" alt="스크린샷 2023-11-26 오전 8 13 27" src="https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/7e311c7c-e534-4f58-8297-e5f9a183822a">

<img width="200" alt="스크린샷 2023-11-26 오전 8 15 25" src="https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/4e9ef9d9-20f7-456b-9801-8eecf4fe0ec0">



<div >내일의 감정을 선택하고, 글쓰기 페이지를 통해 내일 일기를 익명으로 작성한다. <br/></div>


<h3> 2️⃣ 누군가의 내일 보러가기 </h3>

<img width="200" alt="스크린샷 2023-11-26 오전 8 12 07" src="https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/398e0ce9-74b4-4a70-a8b8-789031034221">

<div >다른 사람이 쓴 내일 일기를 확인하고 좋아요를 남길 수 있다.  <br/></div>


<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/eonseok-jeon">
              <img src="https://avatars.githubusercontent.com/u/121864459?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>eonseok-jeon</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/doyn511">
              <img src="https://avatars.githubusercontent.com/u/108219121?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>doyn511</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/namdaeun">
              <img src="https://avatars.githubusercontent.com/u/96781926?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>namdaeun</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            전언석 <br/>
      </td>
       <td>
            이도윤 <br/>
      </td>
       <td>
            남다은 <br/>
      </td>
    </tr>
  	<tr>
       <td>
         1. 게시판 페이지 UI 구현 <br />
         2. API (게시글 목록 GET, 좋아요 수 PUT)
         <br/>
      </td>
       <td>
         1. 메인 페이지 UI 구현 <br />
         2. API (일기 작성 수 GET)
         <br/>
      </td>
       <td>
         1. 스플래시 뷰, 글쓰기 뷰 UI 구현 <br />
         2. API (작성 글 POST)
         <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |                                                                            |
| Formatting           | ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
</div>


<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<a href="https://tricky-shape-925.notion.site/2-dc113667e7a34139a4734704a40fdc25">노션 링크</a>

<br/>

<h2> 📁 폴더 구조 </h2>

```
├── 📁 src
│  └── 📁 api
│  └── 📁 assets
│  └── 📁 components
|  |    └── 📁 Main
|  |    |    └── Main.jsx
|  |    └── 📁 Post
|  |    |    └── Post.jsx
|  |    └── 📁 Splash
|  |    |    └── Splash.jsx  
|  |    └── 📁 Board
|  |         └── Board.jsx  
|  └── 📁 core
|  └── 📁 hooks
|  └── 📁 pages
|  |    └── 📁 Main
|  |    |    └── Main.jsx
|  |    └── 📁 Post
|  |    |    └── Post.jsx
|  |    └── 📁 Splash
|  |    |    └── Splash.jsx  
|  |    └── 📁 Board
|  |    |    └── Board.jsx  
|  |    └── 📁 Error
|  |         └── Error.jsx  
|  └── 📁 styles
|  │    └── 📁 common
|  │    ├── globalStyle.js
|  │    ├── resetStyle.js
|  │    └── theme.js
|  └── 📁 utils
│	 ├── App.jsx
│	 ├── main.jsx
│	 └── Router.jsx
├── .prettierrc
└── package.json
```

<h2>웨비 Before and After</h2>
<h3>Before</h3>

![KakaoTalk_Photo_2023-11-25-22-37-08](https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/30c74879-ca8e-4a3d-8550-d51eecc253d5)
 
<h3>After</h3>

![KakaoTalk_Photo_2023-11-26-08-20-15](https://github.com/DO-SOPT-SOPKATHON-TEAM-2th/Client/assets/96781926/30287dcd-5aa7-4869-a3ed-fc6b1486ac78)


