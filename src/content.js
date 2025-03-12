(function () {
   console.log("DLsite Auto Not Purchased Filter が実行されました");
 
   function clickNotPurchasedFilter() {
     // PC版とモバイル版の `a` タグを取得
     const filterLinks = document.querySelectorAll("#hide_bought li.selected a, a#hide_bought.is-on");
 
     if (filterLinks.length > 0) {
       console.log(`見つかったボタン数: ${filterLinks.length}`);
       filterLinks.forEach((link) => {
         console.log("フィルタをクリックします:", link);
         link.click();
       });
       return true;
     } else {
       console.log("ボタンが見つかりません");
       return false;
     }
   }
 
   if(!clickNotPurchasedFilter()){
      console.log("3秒後に再度実行します");
      setTimeout(clickNotPurchasedFilter, 3000);
   }
 })();
 