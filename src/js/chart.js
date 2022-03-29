google.charts.load("current", {
  packages: ["corechart"],
  language: "pt",
});
$(document).ready(mediaQ);
window.addEventListener("resize", mediaQ);

var altura;
var largura;

function desenharPizza() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/0400e511ffeff481c9678d69d8cc01e2/raw/b5e7696bec3c0384b58a1bfc03145c82a93268ef/mortesPorRegiao.json",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);

  let visualization = new google.visualization.PieChart(
    document.getElementById("grafico-pizza")
  );
  google.visualization.events.addListener(visualization, "click", separar);
  let options = {
    backgroundColor: "black",
    legend: { position: "labeled", textStyle: { color: "white" } },
    is3D: true,
    height: [altura],
    width: [largura],
  };
  function separar(event) {
    let n = event.targetID.split("").splice(6, 2).join("");
    options = Object.assign({
      slices: { [n]: { offset: 0.2 } },
      legend: { position: "labeled", textStyle: { color: "white" } },
      is3D: true,
      height: [altura],
      backgroundColor: "black",
      width: [largura],
    });
    visualization.draw(tabela, options);
  }
  visualization.draw(tabela, options);
}

function desenharBarra() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/3a924bc78b473cf1c095a011a1831408/raw/0b9a7f20c62bcfdf32feb2e1f45a34e73a7473f2/mortesPorCasa",
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
    backgroundColor: "black",
    colors: ["red"],
    annotations: { alwaysOutside: true },
    tooltip: { isHtml: true },
    height: [altura],
    width: [largura],
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    vAxis: { minValue: 0, maxValue: 1000, textStyle: { color: "white" } },
    hAxis: {
      gridlines: { color: "transparent" },
      baselineColor: "grey",
      textStyle: { color: "white" },
    },
    bar: { groupWidth: "65%" },
    legend: { position: "none" },
  };

  visualization.draw(tabela, options);
}

function desenharLinha() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/7db9f348263561277581f4e3b61a9c0a/raw/89843a1121d31a8aac6411841f00e74afa51580e/mortesPorTemporada",
    dataType: "json",
    async: false,
  }).responseText;

  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.LineChart(
    document.getElementById("grafico-linha")
  );
  let options = {
    backgroundColor: "black",
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    vAxis: {
      minValue: 0,
      maxValue: 1000,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    hAxis: {
      minValue: 1,
      maxValue: 8,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    height: [altura],
    width: [largura],
    curveType: "function",
    legend: { position: "top", textStyle: { fontSize: 16, bold: true } },
    tooltip: { trigger: "select" },
  };
  visualization.draw(tabela, options);
}

function desenharColuna() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/072e7364e4b8e40eb130da0ad4209d93/raw/0db1c0a73ffa39269ce16f85d47f1c5bbb82a05d/casasAssassinas",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.ColumnChart(
    document.getElementById("grafico-coluna")
  );
  let options = {
    backgroundColor: "black",
    tooltip: { isHtml: true },
    height: [altura],
    width: [largura],
    animation: {
      startup: true,
      duration: 3500,
      easing: "out",
    },
    vAxis: {
      minValue: 0,
      maxValue: 1000,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    hAxis: {
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    legend: {
      position: "none",
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
  tabela.setCell(
    3,
    3,
    bandeira("https://i.postimg.cc/hv2bR8FN/unknown.png", "White Walkers", 79)
  );
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
    6,
    3,
    bandeira(
      "https://i.postimg.cc/c4jw7Ld7/Ygritte.jpg",
      "Ygritte como representante",
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
    url: "https://gist.githubusercontent.com/Moreira-Edu/4f0d763d307c8f883da1156c7766c534/raw/8610809034c3c878cfa500a46d32ba4ffdb898ad/casasTrairas",
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
      backgroundColor: "black",
      legend: { position: "labeled", textStyle: { color: "white" } },
      height: [altura],
      width: [largura],
      pieHole: 0.4,
      hAxis: { textStyle: { color: "white" } },
      vAxis: { textStyle: { color: "white" } },
    });
    visualization.draw(tabela, options);
  }
  let options = {
    backgroundColor: "black",
    height: [altura],
    width: [largura],
    pieHole: 0.4,
    legend: { position: "labeled", textStyle: { color: "white" } },
    slices: {
      0: { color: "#898989" },
      1: { color: "#898989" },
      2: { color: "#7F7F7F" },
      3: { color: "#898989" },
      4: { color: "#898989" },
    },
    hAxis: { textStyle: { color: "white" } },
    vAxis: { textStyle: { color: "white" } },
  };
  visualization.draw(tabela, options);
}

function desenharColuna2() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/266c4e0c9543bb438b889a44922a879d/raw/54a85a60d04c4855635b7eaa0ca04a06c7d6a576/maioresAssassinos",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.ColumnChart(
    document.getElementById("grafico-coluna2")
  );

  let options = {
    backgroundColor: "black",
    animation: {
      startup: true,
      duration: 3500,
      easing: "out",
    },
    legend: "none",
    tooltip: { isHtml: true },
    annotations: { alwaysOutside: true },
    height: [altura],
    width: [largura],
    vAxis: {
      minValue: 0,
      maxValue: 1000,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    hAxis: { textStyle: { color: "white" } },
  };
  tabela.setCell(
    0,
    3,
    personagem(
      "https://i.postimg.cc/YCzF5f1R/Daenerys.jpg",
      "Daenerys Targaryen"
    )
  );
  tabela.setCell(
    1,
    3,
    personagem("https://i.postimg.cc/tChn6tmb/Cersei.webp", "Cersei Lannister")
  );
  tabela.setCell(
    2,
    3,
    personagem("https://i.postimg.cc/Y2Fvcz7F/Arya.jpg", "Arya Stark")
  );
  tabela.setCell(
    3,
    3,
    personagem("https://i.postimg.cc/FRLH4NMv/wight.jpg", "Wight")
  );
  tabela.setCell(
    4,
    3,
    personagem("https://i.postimg.cc/vTwH8CyV/Tormund.jpg", "Tormund")
  );
  tabela.setCell(
    5,
    3,
    personagem("https://i.postimg.cc/8zzkCh2t/Ramsay.webp", "Ramsay Bolton")
  );
  tabela.setCell(
    6,
    3,
    personagem("https://i.postimg.cc/1twsdMF5/Brienne.jpg", "Brienne of Tarth")
  );
  tabela.setCell(
    7,
    3,
    personagem("https://i.postimg.cc/NjFYtQXn/Pyat.webp", "Pyat Pree")
  );
  tabela.setCell(
    8,
    3,
    personagem("https://i.postimg.cc/x1Xr7tDD/Yara.webp", "Yara Greyjoy")
  );
  tabela.setCell(
    9,
    3,
    personagem("https://i.postimg.cc/0NST5jyV/Stannis.jpg", "Stannis Baratheon")
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
    url: "https://gist.githubusercontent.com/Moreira-Edu/8baef37b22b651cd4949b605f61fccb0/raw/b29acf00ad01f8dfe234293634974227bd5e1af4/popularidade",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BubbleChart(
    document.getElementById("grafico-bolha")
  );
  let options = {
    backgroundColor: "black",
    animation: {
      startup: true,
      duration: 4000,
      easing: "out",
    },
    colorAxis: {
      legend: { position: "none", color: "white", textStyle: "white" },
      colors: ["red", "yellow", "green"],
      textStyle: { color: "white" },
      d: { stroke: { color: "#ffffff" } },
    },
    height: [altura],
    width: [largura],
    bubble: { textStyle: { color: "transparent" } },
    vAxis: {
      textStyle: { color: "white" },
      minValue: 0,
      maxValue: 1100000,
      gridlines: { color: "transparent" },
    },
    hAxis: {
      minValue: 0,
      maxValue: 100,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
  };
  visualization.draw(tabela, options);
}

function desenharArea() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/9945e924940f53b543abbdffc9e19f8e/raw/631dd1c64452ada8fb6ec91c7fec785d07e6a8d4/casasPorRegiao",
    dataType: "json",
    async: false,
  }).responseText;

  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.AreaChart(
    document.getElementById("grafico-area")
  );

  let options = {
    backgroundColor: "black",
    colors: ["#BCBCBC"],
    height: [altura],
    width: [largura],
    animation: {
      startup: true,
      duration: 4000,
      easing: "out",
    },
    vAxis: {
      minValue: 0,
      maxValue: 75,
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    hAxis: {
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
  };

  visualization.draw(tabela, options);
}

function desenhar() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/30b0dd38f754fd5ed4a6c9afcc42399a/raw/e8beac15e68595c325feb4147dfad9e4c7dd285d/personagensParticipativos",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BarChart(
    document.getElementById("grafico-teste")
  );

  let options = {
    backgroundColor: "black",
    colors: ["green"],
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    bar: { groupWidth: "65%" },
    height: [altura],
    width: [largura],
    vAxis: { minValue: 0, maxValue: 80, textStyle: { color: "white" } },
    hAxis: {
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
    legend: { textStyle: { color: "white" } },
  };
  visualization.draw(tabela, options);
}

function desenharbarra3() {
  let dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/Moreira-Edu/4c2722ce027560bb1208ff27a26de589/raw/86214cec60a02093ff28959f58406f941fedff85/metodosMaisUtilizados",
    dataType: "json",
    async: false,
  }).responseText;
  let tabela = new google.visualization.DataTable(dadosJson);
  let visualization = new google.visualization.BarChart(
    document.getElementById("grafico-barra3")
  );

  let options = {
    backgroundColor: "black",
    colors: ["#750103"],
    animation: {
      startup: true,
      duration: 3000,
      easing: "out",
    },
    bar: { groupWidth: "75%" },
    height: [altura],
    width: [largura],
    vAxis: { minValue: 0, maxValue: 80, textStyle: { color: "white" } },
    hAxis: {
      gridlines: { color: "transparent" },
      textStyle: { color: "white" },
    },
  };
  visualization.draw(tabela, options);
}
function mediaQ() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    google.charts.setOnLoadCallback(desenharPizza);
    google.charts.setOnLoadCallback(desenharBarra);
    google.charts.setOnLoadCallback(desenharLinha);
    google.charts.setOnLoadCallback(desenharColuna);
    google.charts.setOnLoadCallback(desenharDonut);
    google.charts.setOnLoadCallback(desenharColuna2);
    google.charts.setOnLoadCallback(desenharBolha);
    google.charts.setOnLoadCallback(desenharArea);
    google.charts.setOnLoadCallback(desenhar);
    google.charts.setOnLoadCallback(desenharbarra3);
    altura = 600;
    largura = 1100;
  } else {
    google.charts.setOnLoadCallback(desenharPizza);
    google.charts.setOnLoadCallback(desenharBarra);
    google.charts.setOnLoadCallback(desenharLinha);
    google.charts.setOnLoadCallback(desenharColuna);
    google.charts.setOnLoadCallback(desenharDonut);
    google.charts.setOnLoadCallback(desenharColuna2);
    google.charts.setOnLoadCallback(desenharBolha);
    google.charts.setOnLoadCallback(desenharArea);
    google.charts.setOnLoadCallback(desenhar);
    google.charts.setOnLoadCallback(desenharbarra3);
    altura = 350;
    largura = 350;
  }
}
