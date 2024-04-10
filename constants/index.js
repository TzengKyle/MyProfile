export const projectInfos = [
  {
    type: 'UI程式專案',
    title: '模擬企業專案開發的團體遊戲專案',
    h1: ['簡介', '學習成果', '專案介紹'],
    h2: ['利用StarUML進行有效團隊溝通'],
    content: '我們需要分析客戶(其他組別)的需求，完成指定系統的各項功能。利用C++與QT creator開發UI程式，並以StarUML繪製behavioral diagram，functional diagram，structural diagram來呈現給客戶與教授。而我在專案中主要負責遊戲主體的撰寫、Ui物件移動時的邏輯、以及遊戲機制的設計。',
    passage: "",
    result: ['扎實的C++與程式語言能力', '熟悉小型團體合作專案的流程', '熟悉利用模型圖的團隊專案溝通'],
    iconUrls: ["/cPlus.png", "/qt.png", "/starUML.png"],
    imgUrl: ['/project1-img-1.png'],
    imgIndexs: [[2, 3, 4]],
    pageUrl: '/posts/1'

  },
  {
    type: '網頁開發',
    title: '整合文章編輯的部落格網站',
    content: '利用Nextjs, MongoDB所撰寫的全端網頁。利用FramerMotion、Shadcn、Tailwindcss等工具加速介面開發。',
    result: ['Nextjs(Reactjs)之開發應用', '網站與資料庫的後端整合'],
    imgUrl: ['/project2-img-1.png'],
    pageUrl: ['/projects/1']
  },
  {
    type: '網頁開發',
    title: '診間呼叫器之網頁程式',
    content: '利用Flask進行開發的小型網頁。透過Socket.io的同步性，達到一個控制器可以控制多台裝置呼叫號碼的能力。已實際應用於診所中。',
    result: ['Flask之開發應用', '整合Git完成網頁部屬'],
    imgUrl: ['/project3-img-1.png'],
    pageUrl: ['/projects/1']
  },
  {
    type: '機器學習/深度學習',
    title: '透過VGG19和RESNET完成影像辨識模型',
    content: '利用OpenCV對資料集進行處理後，利用Tensorflow實作對RESNET和VGG19的訓練與影像辨識。並整合QT Designer所製作的簡易介面協助操作。',
    result: ['Tensorflow的應用', '接觸實際企業的數據', '與不同科系背景的成員合作完成完整的資料分析專案'],
    imgUrl: ['/project4-img-1.png'],
    pageUrl: ['/projects/1']
  },
  {
    type: '資料分析',
    title: '緯創軟體與其對標企業Society策略',
    content: '透過研究對標企業的ESG報表，並與緯創軟體的ESG報表進行比較，找出可以增加員工留任率的可行策略。其中涉及將緯創軟體的數據進行「資料清洗」、「資料分析」、「報表呈現」以及「解決方案的發想與驗證」',
    result: ['Python資料處理套件與Excel樞紐分析表的應用', 'Opencv的應用', '影像處理與辨識之概念'],
    imgUrl: ['/project5-img-1.png'],
    pageUrl: ['/projects/1']
  },
  {
    type: '資料分析',
    title: '透過LSTM進行股市預測',
    content: '利用twstock的python套件與爬蟲取得過去的股市數據，並利用pytorch套件進行Input數據的處理，並以LSTM進行預測',
    result: ['Pytorch的應用', '深度學習的應用', '爬蟲技巧'],
    imgUrl: ['/project6-img-1.png'],
    pageUrl: ['/projects/1']
  },
];

