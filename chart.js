google.charts.load("current", {
  packages: ["corechart"],
  language: "pt",
});
let resposta1 =
  "https://docs.google.com/spreadsheets/d/12FPA8jvF1JTbstz4nlDWsbyd6R1lJNuIW2EoFCcAZCk/edit?usp=sharing";

function drawBar() {
  let number = Number(document.querySelector(".number").value);

  var query = new google.visualization.Query(resposta1);

  query.setQuery(`SELECT A, B where B >=${number}`);

  query.send((response) => {
    if (response.isError()) {
      alert(
        "Error in query: " +
          response.getMessage() +
          " " +
          response.getDetailedMessage()
      );
      return;
    }

    var data = response.getDataTable();

    
    let visualization = new google.visualization.BarChart(
      //ID da div para renderização
      document.getElementById("visualization")
    );
    let options = {
      legend: "right",
      width: 900,
      height: 600,
      animation: {
        startup: true,
        duration: 1000,
        easing: "out",
      },
      hAxis: {
        minValue: 0,
        maxValue: 2000,
        gridlines: { color: "transparent" },
      },
    };
    visualization.draw(data, options);
  });
}

google.charts.setOnLoadCallback(drawBar);
