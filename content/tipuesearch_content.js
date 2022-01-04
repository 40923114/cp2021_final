var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cp2021_final \n Github Pages:  https://mde.tw/cp2021_final \n Discussion:  https://github.com/mdecourse/cp2021_final/discussions \n 課程網站:  https://mde.tw/cp2021 \n 作業網站:  https://mde.tw/cp2021_hw \n 1a 抽點 10 位學員 查驗其作業倉儲與網站 ( 1a 學員倉儲與網站 ). \n 1b 抽點 10 位學員 查驗其作業倉儲與網站 ( 1b 學員倉儲與網站 ). \n', 'tags': '', 'url': 'About.html'}, {'title': 'Programming', 'text': '以下為各組長所提供的學員名單格式，其中以各組組序標題開頭，然後逐一列出各組員學號: \n 1ag1\n41023146\n41023143\n41023147\n41023113\n41023116\n41023111\n41023145\n1ag2\n41023104\n41023103\n41023105\n41023106\n41023107\n41023109\n1ag3\n41023125\n41023119\n41023120\n41023124\n41023118\n41023122\n41023130\n1ag4\n40923129\n41023135\n41023150\n41023151\n41023152\n40923115\n41023132\n1ag5\n41023114\n41023126\n41023101\n41023110\n41023108\n40823214\n1ag6\n41023121\n41023140\n41023133\n41023112\n41023153\n41023134\n41023138\n40832244\n1ag7\n41023142\n41023137\n41023129\n41023131\n41023127\n41023141\n1ag8\n40823227\n41023154\n41023128\n41023136\n41023144\n41023149 \n 接著希望能夠透過 Python 程式讀出各組組序標題與組員名單，之後將要利用此一資料從 downloads 目錄取出各組員的動態網頁內容，並將資料按照組序放入 config/content.htm 檔案中。 \n 以下為初步完成的程式編寫: \n \'\'\'設法讀出各班各組學員學號資料\n\'\'\'\nrepo_path = "Y:/tmp/cp2021_final"\nclass_name = "1a"\ngroup_file = repo_path + "/downloads/" + class_name + "_grouping.txt"\n\nwith open(group_file, encoding="utf-8") as f:\n    data = f.read().splitlines()\ndata = list(filter(None, data))\n#print(data)\ngrp_count = 0\ngrp_title = []\ngrp_mem = []\ngrp_big = []\nfor i in data:\n    if class_name in i:\n        mem_count = 0\n        grp_count += 1\n        grp = i\n        # 納入各組組序標題\n        grp_title.append(i)\n        # 若 grp_mem 有值, 表示已經讀完各組學員名單\n        # 就可以將該組全員名單納入 grp_big 數列中\n        # 然後 grp_mem 重新設為空數列, 準備納入下一組員名單\n        if len(grp_mem)  1:\n            grp_big.append(grp_mem)\n            grp_mem = []\n        #print("組別:", grp_count, grp)\n    else:\n        # 讀完各組組序標題後, 將逐一將組員名單納入 grp_mem 數列中\n        grp_mem.append(i)\n        mem_count += 1\n        student_id = i\n        #print("學員:", mem_count, student_id)\n# 離開組序標題後, 必須納入最後一組學員名單\ngrp_big.append(grp_mem)\n# 查驗是否正確讀入各班組員名單\n#print(grp_title, grp_big)\nfor i in range(len(grp_title)):\n    # 分別讀出各組組序與排序後的組員學號\n    print(grp_title[i], sorted(grp_big[i])) \n \n', 'tags': '', 'url': 'Programming.html'}, {'title': 'Final', 'text': '假如希望利用 Brython 讀取  http://mde.tw/cp2021_final/downloads/1a_grouping.txt , 初步讀取各班的程式編寫為:  https://gist.githubusercontent.com/mdecourse/2f56974a40da7a218dbaef376a5b4ca4/raw/41df2412bfd277c5b8e1fe52b0fe47d4fc0fbacb/cp2021_final.py \n BSnake 是從  https://hawstein.com/2013/04/15/snake-ai/  ( pdf )修改為能夠在 Brython 網際程式環境中執行的版本. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag Snake BSnake Final \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Final Project', 'text': 'cp2021 Final Project \n 計算機程式期末學習驗證與評分網站 \n https://mde.tw/cp2021_final \n 倉儲:  https://github.com/mdecourse/cp2021_final \n 本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 並藉此進行學員的課程學期成績評分. \n cp2021 Final Project \n 計算機程式期末學習驗證與評分網站 \n http://mde.tw/cp2021_final \n 本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 請根據下列規劃流程, 將個人在本學期所寫過的程式, 以網際按鈕形式呈現在個人所分配的 H3 頁面中, 並藉此進行學員的課程學期成績評分. \n 1a 修課人數 為 64 人, 64 = 7*9 + 1, 分為 9 組. H1 標題為 1a, H2 為 1ag1 ~ 1ag9, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求. \n 1b 修課人數 為 55 人, 55 = 7*8 - 1, 分為 8 組. H1 標題為 1b, H2 為 1bg1 ~ 1bg8, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求. \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'Notice', 'text': '各組必須先自願或推舉出一位組長與一位副組長負責成為  https://github.com/mdecourse/cp2021_final  倉儲的管理雙人組, 組長將設為期末倉儲的管理協同者, 擁有合併或拒絕 Pull Requests 的權限, 各組推選出兩位管理學員後, 請將學號登錄至  https://github.com/mdecourse/cp2021_final/discussions/1 \n 各學員利用 Pull Requests 將個人的期末評分內容放入本網站的流程: \n \n 登入自己的 Github 帳號. \n fork  https://github.com/mdecourse/cp2021_final  倉儲到自己的帳號下 \n 將自己帳號下的 cp2021_final 倉儲以 git clone --recurse-submodules url 到近端進行改版. \n 改版後, 在自己帳號下對 cp2021_final 倉儲提交並推送新版本後, 必須在自季的 cp2021_final 倉儲處建立 Pull Request 後, 請組長與副組長查驗合併後內容無誤後, 且合併至主倉儲與  https://mde.tw/cp2021_final  網頁中. \n 若各組員進行 fork 後,  https://github.com/mdecourse/cp2021_final  倉儲已經被其他組員多次改版, 則該組員必須採用反向 Pull Requests, 將自己帳號下的 cp2021_final 倉儲的版本儘量接近之後處理 Pull Requests 時的 cp2021_final 倉儲版本, 以降低各組組員最後進行 Pull Requests 合併時處理衝突的難度. \n 各組組長與副組長接到組員已經完成特定階段新增的 Pull Requests 後, 必須設法將其版本內容合併至期末評分網站中. \n \n', 'tags': '', 'url': 'Notice.html'}, {'title': '1a', 'text': '', 'tags': '', 'url': '1a.html'}, {'title': '1ademo', 'text': '', 'tags': '', 'url': '1ademo.html'}, {'title': 'scrum-3', 'text': 'BSnake \n BSnake 是從  https://hawstein.com/2013/04/15/snake-ai/  ( pdf )修改為能夠在 Brython 網際程式環境中執行的版本. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag Snake BSnake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'scrum-3.html'}, {'title': 'Scrum-1', 'text': 'BSnake 是從  https://hawstein.com/2013/04/15/snake-ai/  ( pdf )修改為能夠在 Brython 網際程式環境中執行的版本. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag Snake BSnake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'Scrum-1.html'}, {'title': '1ag1', 'text': '', 'tags': '', 'url': '1ag1.html'}, {'title': '41023146', 'text': '1.作業一的紅色方塊 \n hw1_1 hw1_2 \n 2.第十三週考試及延伸 \n w13 畫表格 隨機生成方格 隨機生成方格plus \n 3.python教科書習題 \n 1加到100 2.6_1 2.6_2 2.6_3 2.6_3plus \n 4.作業三貪食蛇 \n snake snake_t1 snake_t2 snake_berry ai_snake Bsnake \n 5.其他及小遊戲 \n 簡易計算機 猜數字遊戲 \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \xa0 \n =================================================================\xa0 \n \n 1.關於hw1的紅色方塊,是我第一次接觸python,一開始什麼都看不懂,到後來才發現是用browser.timer \n 個模組配合if迴圈使函式隔一段時間執行一次產生移動的效果,還有將方塊著做成有啟動和暫停按鈕,我一開始因為不熟悉課程網站沒找到Cango裡的fourbar按鈕,所以我在網上查了很多python的資料,雖然那些資料沒讓我做出按鈕,但也讓我學到很多(最後還是找到fourbar按鈕才學會的)。 \n \n 2.在w13的測驗中我學會了random的用法並完成延伸,我發現如果延伸中的數字改成方塊是不是可以做成貪食蛇中那個隨機生成的莓果,然後我就再延伸了兩個按鈕出來。 \n \n 3.在第十二周的時候用cmd啟動python來熟悉python的基本運算,並在之後完成了pthon教科書2_6的習題並做成按鈕。 \n \n 4.作業三一開始我不知道是要從頭做一隻貪食蛇還是改編老師的貪食蛇,所以我就從頭開始做,一開始是從作業一的方塊開始改,第一個完成的是sanke_t1這隻只有頭且只能吃一次方塊的蛇,然後我用w13延伸做出了貪食蛇的莓果snake_berry,最後將這兩個融合成snake_t2,然後我看到學長交的作業是改編老師的貪食蛇,所以我又做了ai_sanke,最後我看到同學在貪食蛇上加按鈕,然後我就結合老師snake和Bsnake的按鈕做了一個Bsnake。 \n \n 5.簡易計算機和猜數字遊戲是我和 41023121 同學一起完成的,在製作的過程中第一次用到input這個東西,發現它可以用來輸入東西去與程式裡的東西氣比較和判斷。 \n \n =================================================================\xa0 \n 期末心得 \n 在本學期計算機程式的課程我學習到了很多,像是 github倉儲管理、python程式、網站動態編輯還有很多東西,我覺得我學習到最重要的技能有兩個: \n 1.一個是github倉儲管理,讓我們不用擔心資料不見,並且如果有新組員不需要再去教他,他可以看著我們倉儲之前的版本跟上我們進度。 \n 2.第二個是可以查到自己需要的資料的能力,因為我發現程式的東西不可能全部都學會並背起來,一定是有需要在去查,所以查資料的能力很重要。 \n  ****************************** keyword start  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '41023146.html'}, {'title': '1ag2', 'text': '', 'tags': '', 'url': '1ag2.html'}, {'title': '1ag3', 'text': '', 'tags': '', 'url': '1ag3.html'}, {'title': '1ag4', 'text': '', 'tags': '', 'url': '1ag4.html'}, {'title': '1ag5', 'text': '', 'tags': '', 'url': '1ag5.html'}, {'title': '40823214', 'text': '雙人貪吃蛇 \n 綠色 :wsad 上下左右 \n 青色 : ikjl 上下左右 \n 注意!! \n 撞到邊界或是撞到對手會判定失敗 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '40823214.html'}, {'title': '1ag6', 'text': '', 'tags': '', 'url': '1ag6.html'}, {'title': '1ag7', 'text': '', 'tags': '', 'url': '1ag7.html'}, {'title': '1ag8', 'text': '', 'tags': '', 'url': '1ag8.html'}, {'title': '40823227', 'text': 'final project \n 1. https://gist.github.com/40823227/0f52a5f63eab8fb8558c0e5d22244f0d#file-w13 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 列出 10 個座標 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '40823227.html'}, {'title': '1b', 'text': '', 'tags': '', 'url': '1b.html'}, {'title': '1bg1', 'text': '', 'tags': '', 'url': '1bg1.html'}, {'title': '41023247', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag red snake1 snake2 w13 w13ch final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023247.html'}, {'title': '41023201', 'text': 'w12.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag w13_1 w13_2 final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023201.html'}, {'title': '1bg2', 'text': '', 'tags': '', 'url': '1bg2.html'}, {'title': '41023206', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': '41023206.html'}, {'title': '1bg3', 'text': '', 'tags': '', 'url': '1bg3.html'}, {'title': '41023248', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點暫停 1加到10 數字隨機 國字數字隨機 貪食蛇 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023248.html'}, {'title': '41023243', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點暫停 1~10 隨機 隨機國字 貪食蛇 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023243.html'}, {'title': 'W13_CH', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'W13_CH.html'}, {'title': '41023210', 'text': 'w12.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag W13_1 W13_2 final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023210.html'}, {'title': '41023208', 'text': 'w12.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag w13_1 w13_2 final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023208.html'}, {'title': '1bg4', 'text': '', 'tags': '', 'url': '1bg4.html'}, {'title': '41023224', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點按鈕 1加到10 亂數中 亂數英 貪食蛇 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023224.html'}, {'title': '41023222', 'text': '\n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 10 red red2 snake random random2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023222.html'}, {'title': '41023221', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點含暫停 snake-ai random random2 1加到10 畫框 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023221.html'}, {'title': '41023219', 'text': '\n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 10 randomC randomE red1 red2 snake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023219.html'}, {'title': '41023212', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n red redwait one~ten English Chinese snake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  red 開始  \n \n \n', 'tags': '', 'url': '41023212.html'}, {'title': '1bg5', 'text': '', 'tags': '', 'url': '1bg5.html'}, {'title': '1bg6', 'text': '', 'tags': '', 'url': '1bg6.html'}, {'title': '41023232', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n cube cube-b add 1 to 100 ROC flag final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023232.html'}, {'title': '41023230', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n cube cube-b add 1 to 100 ROC flag final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023230.html'}, {'title': '41023227', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n cube cube-b add 1 to 100 W13 2.6-1 ROC flag final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023227.html'}, {'title': '41023226', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n cube cube-b add 1 to 100 W13 2.6-1 ROC flag final1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023226.html'}, {'title': '1bg7', 'text': '', 'tags': '', 'url': '1bg7.html'}, {'title': '40971227', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '40971227.html'}, {'title': '1bg8', 'text': '>', 'tags': '', 'url': '1bg8.html'}, {'title': '41023234', 'text': 'w12demo.txt \n 中華民國國旗規格 。 \n PROC國旗規範 ——可以根據本 規範 定義、增加 進程標誌  按鈕。 \n 美國國旗規範 ——可以根據此 規範 定義、增加 美國國旗  按鈕。 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 加 1 到 100 p261 中華民國耳朵 hw1 假蛇 \n fimal1 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文檔名稱：  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑   輸出   清除輸出區 清除繪圖區 加載重 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '41023234.html'}]};