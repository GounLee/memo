$(document).ready(function () {
  //내비게이션 버튼 클릭
  $("#main_navigation a").click(function () {
    let target = $(this).attr("data-name");
    alert(target);
    $(":not([data-name=" + target + "]").removeClass("active");
    $("[data-name=" + target + "]").addClass("active");
  });
  //   캐릭터 이동 버튼
  let currentPosition = 1;
  $("#character>a:nth-child(1)").click(function () {
    currentPosition -= 1;
    if (currentPosition < 1) {
      currentPosition = 3;
    }
    $("article").removeClass("show");
    $("article:nth-of-type(" + currentPosition + ")").addClass("show");
  });
  $("#character>a:nth-child(2)").click(function () {
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition = 1;
    }
    $("article").removeClass("show");
    $("article:nth-of-type(" + currentPosition + ")").addClass("show");
  });
});

// window.onload = function () {
//   var request = new XMLHttpRequest();
//   request.onreadystatechange = function () {
//     if (request.readyState == 4 && request.status == 200) {
//       var json = eval("(" + request.responseText + ")");
//       //var json = JSON.parse(request.responseText); 구버전
//       var output = "";
//       for (var i = 0; i < json.data.length; i++) {
//         var continent_name = json.data[i].continent_nm;
//         var country_name = json.data[i].country_nm;
//         var flag_url = json.data[i].flag_download_url;
//         var map_url = json.data[i].map_download_url;
//         output += "<div>";
//         output += "<h2>" + continent_name + "</h2>";
//         output += "<h3>" + country_name + "</h3>";
//         output +=
//           '<img src="' + flag_url + '"alt="해당국가이미지 없음" width="200"/>';
//         output += "&nbsp;&nbsp;";
//         output +=
//           '<img src="' +
//           map_url +
//           '"alt="해당국가이미지 없음" width="200" border="1"/>';
//         output += "</div>";
//       }
//       document.body.innerHTML += output;
//     }
//   };
//   request.open(
//     "get",
//     "https://apis.data.go.kr/1262000/TravelAlarmService2/getTravelAlarmList2?serviceKey=5th3LyLqtNJ0UwCUuFcDZp37HLhHaWtkwwLaIgTPCiPgFalEQGEZQTOd%2B35iQqkEicpnOpHC%2BkDC7L1evrUvPw%3D%3D&returnType=JSON&numOfRows=10&pageNo=1",
//     true
//   );
//   request.send();
// };
