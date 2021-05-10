# cp.react.app.
connect-people v2.0
Framework : React Native
[connect-people v2.0 tech-spec](https://www.notion.so/connect-people-v2-0-tech-spec-f817ea6242fa42d88cbd29085bce1a29)

## 아래 순서대로 설치
npm install
confing < index.js (HOST API, KEY, TOKEN) 정보 파일 넣기 

## 실행방법
npm start
react-native run-ios

## 파일구성
- config : index.js HOST API, KEY, TOKEN 정보가 있음.
- src
   - API : API 공동 모듈화
   - assets : images, icons 리소스
   - component : [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)으로 구성된 컴포넌트 파일
   - navigators : 화면 구성 STACK ROUTER 모음 파일
   - page : 페이지 구성
   - redux : 상태관리
   - styles : 전체 적용 되는 style sheet
