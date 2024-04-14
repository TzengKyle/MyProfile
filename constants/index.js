export const projectInfos = [
  {
    projectIndex: 1,
    title: '模擬企業專案開發的團體遊戲專案',
    type: 'UI程式專案',
    intro: '我們需要分析客戶(其他組別)的需求，完成指定系統的各項功能。利用C++與QT creator開發UI程式，並以StarUML繪製behavioral diagram，functional diagram，structural diagram來呈現給客戶與教授。而我在專案中主要負責遊戲主體的撰寫、Ui物件移動時的邏輯、以及遊戲機制的設計。',
    h1s: ['簡介', '學習成果', '專案介紹'],
    h2s: ['利用StarUML進行有效團隊溝通', '完整的雙人遊戲'],
    passages: [
      "通過繪製這些圖，我們可以清晰地描述遊戲中的各種行為和交互。我不僅學會了如何使用StarUML工具來繪製各種類型的圖表，更重要的是，我通過實際項目的開發，獲得了豐富的團隊協作和開發經驗。在項目中，我需要與團隊成員密切合作，分工合作，協調溝通，共同解決問題，這讓我更深入地了解了團隊開發的重要性和流程。同時，我也學會了如何有效地規劃和管理項目，掌握了項目開發的各個階段和關鍵環節。",
      "在我的雙人爆爆王遊戲中，我深度運用了物件導向設計的理念，以確保程式碼的結構清晰且易於擴展。每個遊戲元素，包括玩家、道具、地圖等，都被抽象為物件，使得它們可以相互交互，並簡化了程式碼的維護與管理。",
      "除了程式設計，我也致力於設計出視覺美感的介面，讓玩家在遊戲中享受到視覺上的樂趣。我注重遊戲界面的色彩搭配、圖標設計和排版結構，使得玩家能夠輕鬆地理解遊戲規則和操作，並享受到優雅的遊戲體驗。為了提升遊戲的可玩性，我還添加了存檔機制，讓玩家可以隨時保存遊戲進度，並在需要時重新開始。這個功能不僅提高了遊戲的便利性，也讓玩家可以更加放心地享受遊戲，而不必擔心遺失進度。"
    ],
    results: ['扎實的C++與程式語言能力', '熟悉小型團體合作專案的流程', '熟悉利用模型圖的團隊專案溝通', '練習美感設計'],
    iconUrls: ["/cPlus.png", "/qt.png", "/starUML.png"],
    coverImgUrl: '/project1-img-1.png',
    imgIndexs: [[2, 3, 4], [5, 6]],
    pageUrl: '/posts/1',
    codeUrl: "https://github.com/TzengKyle/Crazy-Arcade",
    demoUrl: '',
  }, {
    projectIndex: 2,
    title: '診間呼叫器之網頁程式',
    type: '網頁開發',
    intro: '利用Flask進行開發的小型網頁。透過Socket.io的同步性，達到一個控制器可以控制多台裝置呼叫號碼的能力。已實際應用於父親的診所中。',
    h1s: ['簡介', '學習成果', '專案介紹'],
    h2s: ['多裝置同步叫號功能'],
    passages: [
      "控制器可以用於傳送通知到所有位於網頁https://medicalcaller.onrender.com/displayer位置的裝置，利用socket.io達到即時通知的效果。此專案主要用於練習Flask的概念，撰寫上較為簡潔。",
      "在Demo的時候可能需要等待比較久，並且此demo的專案只用於展示，密碼可直接輸入561023。不過由於通常網頁會阻擋音訊的播放，因此需要開啟你的網頁之音訊播放權限。"
    ],
    results: ['扎實的Python與程式語言能力', 'Flask之開發應用'],
    iconUrls: ["/python.png", "/html.png", "/js.png", "/css.png", "/flask.jpg"],
    coverImgUrl: '/project2-img-1.png',
    imgIndexs: [[2, 3]],
    pageUrl: '/posts/2',
    codeUrl: 'https://github.com/TzengKyle/MedicalCaller/tree/main',
    demoUrl: 'https://medicalcaller.onrender.com/'
  }, {
    projectIndex: 3,
    title: '透過VGG19和RESNET完成影像辨識模型',
    type: '機器學習',
    intro: '利用OpenCV對資料集進行處理後，利用Tensorflow實作對RESNET和VGG19的訓練與影像辨識。並整合QT Designer所製作的簡易介面協助操作。',
    h1s: ['簡介', '學習成果', '專案介紹'],
    h2s: [
      'OpenCV的影像處理',
      'Tensorflow的應用',
      'Opencv的應用',
      '影像處理與辨識之概念'
    ],
    passages: [
      "利用OpenCV處理影像，例如灰階化，或者找出圖片的x方向邊界與y方向邊界。除此之外，也會學習如何調整圖片大小，為後續調整訓練影像辨識模型的資料集輸入。",
      "TensorFlow則是我們訓練模型的函示庫，透過學習它的各式程式語法，幫助我可以輕鬆地構建和訓練RESNET和VGG19等知名的影像辨識模型。除此之外，也更加理解將那些深度學習理論應用於程式碼的架構",
      "我還利用QT Designer製作的簡易介面更進一步提升了使用者的操作體驗，使得整個影像辨識系統更加易於操作和使用。透過這個專案，我實現了一個方便易用的使用者介面，並將訓練出來的影像辨識模型整合進入此程式專案。"
    ],
    results: [
      '扎實的Python與程式語言能力',
      'Tensorflow的應用',
      'Opencv的應用',
      '影像處理與辨識之概念'
    ],
    iconUrls: ["/python.png", "/tensorflow.png", "/matlab.png", "/qt.png"],
    coverImgUrl: '/project3-img-1.png',
    imgIndexs: [[]],
    pageUrl: '/posts/3',
    codeUrl: 'https://github.com/TzengKyle/HW-ImageDL',
    demoUrl: ''
  }, {
    projectIndex: 4,
    title: '透過LSTM進行股市預測',
    type: '機器學習',
    intro: '利用twstock的python套件取得過去的股市數據，並利用pytorch套件進行Input數據的處理，並以LSTM進行預測',
    h1s: ['簡介', '學習成果', '專案介紹'],
    h2s: [
      '學習Pytorch和LSTM概念',
    ],
    passages: [
      "此專案主要用於熟悉更為主流的深度學習函式庫，Pytorch。構建一個基於LSTM的深度學習模型，用於股市價格的預測。LSTM模型能夠捕捉時間序列中的長期依賴關係，使得預測更加準確。這樣的結合，既利用了twstock提供的豐富數據，又充分發揮了pytorch強大的深度學習能力，為股市預測提供了一個有效的解決方案。",
    ],
    results: [
      '扎實的Python與程式語言能力',
      'Pytorch的應用',
    ],
    iconUrls: ["/python.png", "/pytorch.png", "/matlab.png"],
    coverImgUrl: '/project4-img-1.png',
    imgIndexs: [[]],
    pageUrl: '/posts/4',
    codeUrl: 'https://github.com/TzengKyle/DAC-StudyGroup',
    demoUrl: ''
  }
]