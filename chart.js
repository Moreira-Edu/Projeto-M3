google.charts.load("current", {
  packages: ["corechart"],
  language: "pt",
});
let resposta1;

function desenharPizza() {
  let dadosJson = $.ajax({
    url: "mortesPorRegiao.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);

  // var myView = data.toJSON()

  // console.log(myView);

  let visualization = new google.visualization.PieChart(
    document.getElementById("grafico-pizza")
  );
  google.visualization.events.addListener(visualization, "click", separar);
  let options = {
    legend: "labeled",
    is3D: true,
    width: 900,
    height: 600,
  };
  function separar(event) {
    let n = event.targetID.split("").splice(6, 2).join("");
    options = Object.assign({
      slices: { [n]: { offset: 0.2 } },
      legend: "labeled",
      is3D: true,
      width: 900,
      height: 600,
    });
    visualization.draw(tabela, options);
  }
  visualization.draw(tabela, options);
}

function desenharBarra() {
  let dadosJson = $.ajax({
    url: "mortesPorCasa.json",
    dataType: "json",
    async: false,
  }).responseText;

  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BarChart(
    document.getElementById("grafico-barra")
  );

  tabela.setCell(0, 4, "Mortes: 835");
  tabela.setCell(1, 4, "Mortes: 121");
  tabela.setCell(2, 4, "Mortes: 68");
  tabela.setCell(3, 4, "Mortes: 68");
  tabela.setCell(4, 4, "Mortes: 67");
  tabela.setCell(5, 4, "Mortes: 62");

  tabela.setCell(
    0,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/545px-House_Lannister.svg.png",
      "Casa Lannister"
    )
  );
  tabela.setCell(
    1,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/7/7e/House_Stark.svg/545px-House_Stark.svg.png",
      "Casa Stark"
    )
  );
  tabela.setCell(
    2,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/545px-House_Targaryen.svg.png",
      "Casa Targaryan"
    )
  );
  tabela.setCell(
    3,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/0/0c/House_Bolton.svg/545px-House_Bolton.svg.png",
      "Casa Bolton"
    )
  );
  tabela.setCell(
    4,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/4/40/House_Baratheon_%28Dragonstone%29.svg/545px-House_Baratheon_%28Dragonstone%29.svg.png",
      "Casa Baratheon de Dragonstone"
    )
  );
  tabela.setCell(
    5,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/d/da/House_Frey.svg/545px-House_Frey.svg.png",
      "Casa Frey"
    )
  );

  function bandeira(url, casa) {
    return `<div class="tooltipBarra">
          <p> ${casa} </p>
          <img src="${url}">
          </div>`;
  }

  let options = {
    annotations: { alwaysOutside: true },
    tooltip: { isHtml: true },
    width: 900,
    height: 800,
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    vAxis: { minValue: 0, maxValue: 1000 },
    hAxis: { gridlines: { color: "transparent" } },
    bar: { groupWidth: "65%" },
    legend: { position: "none" },
  };

  visualization.draw(tabela, options);
}

function desenharLinha() {
  let dadosJson = $.ajax({
    url: "mortesPorTemporada.json",
    dataType: "json",
    async: false,
  }).responseText;

  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.LineChart(
    document.getElementById("grafico-linha")
  );
  let options = {
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    vAxis: { minValue: 0, maxValue: 1000, gridlines: { color: "transparent" } },
    hAxis: { minValue: 1, maxValue: 8, gridlines: { color: "transparent" } },
    width: 900,
    height: 700,
    curveType: "function",
    legend: { position: "top", textStyle: { fontSize: 16, bold: true } },
    tooltip: { trigger: "select" },
  };
  visualization.draw(tabela, options);
}

function desenharColuna() {
  let dadosJson = $.ajax({
    url: "casasAssassinas.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.ColumnChart(
    document.getElementById("grafico-coluna")
  );
  let options = {
    tooltip: { isHtml: true },
    width: 900,
    height: 700,
    animation: {
      startup: true,
      duration: 3500,
      easing: "out",
    },
    vAxis: { minValue: 0, maxValue: 1000, gridlines: { color: "transparent" } },
    hAxis: { gridlines: { color: "transparent" } },
    legend: {
      position: "top",
      textStyle: { color: "black", fontSize: 16, bold: true },
    },
  };

  tabela.setCell(
    0,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/545px-House_Targaryen.svg.png",
      "Casa Targaryan",
      1148
    )
  );
  tabela.setCell(
    1,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/545px-House_Lannister.svg.png",
      "Casa Lannister",
      296
    )
  );

  tabela.setCell(
    2,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/7/7e/House_Stark.svg/545px-House_Stark.svg.png",
      "Casa Stark",
      184
    )
  );
  tabela.setCell(3, 3, bandeira("../img/unknown.png", "White Walkers", 79));
  tabela.setCell(
    4,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/0/0c/House_Bolton.svg/545px-House_Bolton.svg.png",
      "Casa Bolton",
      76
    )
  );
  tabela.setCell(
    5,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/f/f3/Night%27s_Watch.svg/545px-Night%27s_Watch.svg.png",
      "Nigh Walkers",
      69
    )
  );
  tabela.setCell(
    7,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/545px-House_Greyjoy.svg.png",
      "Casa dos Greyjoy",
      44
    )
  );
  tabela.setCell(
    8,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/d/d4/GhisHarpie.png",
      "Sons of The Harpy",
      38
    )
  );
  tabela.setCell(
    9,
    3,
    bandeira(
      "https://awoiaf.westeros.org/images/thumb/c/c3/House_Baratheon_%28King%27s_Landing%29.svg/250px-House_Baratheon_%28King%27s_Landing%29.svg.png",
      "Casa Baratheon de King's Landing",
      34
    )
  );

  function bandeira(url, casa, ass) {
    return `<div class="tooltipBarra">
          <p> ${casa} </p>
          <img src="${url}">
          <p>Assassinatos: ${ass} </p>
          </div>`;
  }

  visualization.draw(tabela, options);
}

function desenharDonut() {
  let dadosJson = $.ajax({
    url: "casaTraira.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.PieChart(
    document.getElementById("grafico-donut")
  );
  google.visualization.events.addListener(visualization, "click", separar);

  function separar(event) {
    let n = event.targetID.split("").splice(6, 2).join("");
    options = Object.assign({
      slices: {
        0: { color: "#898989" },
        1: { color: "#898989" },
        2: { color: "#898989" },
        3: { color: "#898989" },
        4: { color: "#898989" },
        [n]: { offset: 0.2, color: "red" },
      },
      legend: "labeled",
      width: 900,
      height: 700,
      pieHole: 0.4,
    });
    visualization.draw(tabela, options);
  }
  let options = {
    height: 700,
    width: 900,
    pieHole: 0.4,
    legend: "labeled",
    slices: {
      0: { color: "#898989" },
      1: { color: "#898989" },
      2: { color: "#7F7F7F" },
      3: { color: "#898989" },
      4: { color: "#898989" },
    },
  };
  visualization.draw(tabela, options);
}

function desenharColuna2() {
  let dadosJson = $.ajax({
    url: "maioresAssassinos.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.ColumnChart(
    document.getElementById("grafico-coluna2")
  );

  let options = {
    tooltip: { isHtml: true },
    annotations: { alwaysOutside: true },
    height: 600,
    width: 900,
    vAxis: { minValue: 0, maxValue: 1000, gridlines: { color: "transparent" } },
  };
  tabela.setCell(
    0,
    3,
    personagem("../img/Personagens/Daenerys.jpg", "Daenerys Targaryen")
  );
  tabela.setCell(
    1,
    3,
    personagem("../img/Personagens/Cersei.webp", "Cersei Lannister")
  );
  tabela.setCell(2, 3, personagem("../img/Personagens/Arya.jpg", "Arya Stark"));
  tabela.setCell(3, 3, personagem("../img/Personagens/wight.jpg", "Wight"));
  tabela.setCell(4, 3, personagem("../img/Personagens/Tormund.jpg", "Tormund"));
  tabela.setCell(
    5,
    3,
    personagem("../img/Personagens/Ramsay.webp", "Ramsay Bolton")
  );
  tabela.setCell(
    6,
    3,
    personagem("../img/Personagens/Brienne.jpg", "Brienne of Tarth")
  );
  tabela.setCell(7, 3, personagem("../img/Personagens/Pyat.webp", "Pyat Pree"));
  tabela.setCell(
    8,
    3,
    personagem("../img/Personagens/Yara.webp", "Yara Greyjoy")
  );
  tabela.setCell(
    9,
    3,
    personagem("../img/Personagens/Stannis.jpeg", "Stannis Baratheon")
  );

  function personagem(url, personagem) {
    return `<div class="tooltipcoluna">
          <p> ${personagem} </p>
          <img src="${url}">
          </div>`;
  }

  visualization.draw(tabela, options);
}
function desenharBolha() {
  let dadosJson = $.ajax({
    url: "popularidade.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BubbleChart(
    document.getElementById("grafico-bolha")
  );
  let options = {
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    colorAxis: { colors: ["red", "yellow", "green"] },
    height: 400,
    
    bubble: { textStyle: { color: "transparent" } },
    vAxis: {
      minValue: 0,
      maxValue: 1100000,
      gridlines: { color: "transparent" },
    },
    hAxis: { minValue: 0, maxValue: 100, gridlines: { color: "transparent" } },
  };
  visualization.draw(tabela, options);
}

function desenharArea(){
  let dadosJson = $.ajax({
    url: "CasasPorRegiao.json",
    dataType: "json",
    async: false,
  }).responseText;

  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.AreaChart(
    document.getElementById("grafico-area")
  );

  visualization.draw(tabela, {height: 400})
}

function desenhar(){
  let dadosJson = $.ajax({
    url: "personagensParticipativos.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BarChart(
    document.getElementById("grafico-teste")
  );

  let options ={
    bar: { groupWidth: "65%" },
    height: 500
  }
  visualization.draw(tabela,options );
}

function desenhargrafico() {
  let resposta =
    "https://docs.google.com/spreadsheets/d/1ijGXsR8sl4Hbrgv48HKNshRAhoUsQZ6GL8NxXWdgaE4/edit?usp=sharing";
  let query = new google.visualization.Query(resposta);

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
    let json = data.toJSON();
    console.log(json);
    var chart = new google.visualization.AreaChart(
      document.getElementById("grafico")
    );

    let options = {
      height: 400,
    };
    chart.draw(data, options);
  });
}

google.charts.setOnLoadCallback(desenharPizza);
google.charts.setOnLoadCallback(desenharBarra);
google.charts.setOnLoadCallback(desenharLinha);
google.charts.setOnLoadCallback(desenharColuna);
google.charts.setOnLoadCallback(desenharDonut);
// google.charts.setOnLoadCallback(desenhargrafico);
google.charts.setOnLoadCallback(desenharColuna2);
google.charts.setOnLoadCallback(desenharBolha);
google.charts.setOnLoadCallback(desenharArea);
google.charts.setOnLoadCallback(desenhar);
