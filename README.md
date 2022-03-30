# <h1>GAME OF THRONES</h1>

<p>Projeto final do módulo 3 da formação em Desenvolvimento Web Full Stack da Resilia Educação.</p>

Link para a página [aqui](https://moreira-edu.github.io/Projeto-M3/)

# Tecnologias utilizadas:
- [x] MYSQL.
- [x] HTML5.
- [x] CSS3.
- [x] Bootstrap5.
- [x] JavaScript.
- [x] Jquery.
- [x] Google Charts.



  ![Página inicial](https://github.com/Moreira-Edu/Projeto-M3/blob/main/assets/img/readme.png)
  
  ## Mortes por casa
  
```mysql
     SELECT
    allegiance as Casa, COUNT(*) as mortes
FROM
    deaths
WHERE
    allegiance LIKE %house%
GROUP BY allegiance
ORDER BY COUNT (*) DESC;
```
    
  ## Quantas mortes por temporada
  
```mysql
   SELECT
    season as Temporada, COUNT (*) as Mortes
FROM
    deaths
GROUP BY season
ORDER BY season;
```
    
  ## Mortes por armas e métodos
  
```mysql
   SELECT
    Method AS Método, COUNT (*) AS Vezes
FROM
    deaths
GROUP BY method
ORDER BY COUNT (*) DESC
LIMIT 10;
```
  
  ## Qual familia matou mais
    
```mysql
   SELECT
    killers_house as Casa, COUNT(*) as Assassinatos
FROM
    deaths
WHERE
    killers_house <> 'none'
GROUP BY killers_house
ORDER BY count(*) desc
limit 10;  
```
  
  ## Qual familia matou mais entre si/mais se matou
  
```mysql
   SELECT
    killers_house as Casa, COUNT(*) as Assassinatos
FROM
    deaths
WHERE
    killers_house <> 'none'
GROUP BY killers_house
ORDER BY count(*) desc
limit 10;
```
    
  ## Mortes Por Região
  
   
```mysql
SELECT
    location, COUNT(*) AS mortes
FROM
    deaths
GROUP BY location
ORDER BY COUNT(*) DESC;
```
   
   ## Os personagens que mais mataram por casa
  
```mysql
   SELECT
    killer as Personagem, assassinatos
FROM
    (SELECT
         COUNT (*) AS assassinatos, killer, killers_house
    FROM
        deaths
    GROUP BY killer
    ORDER BY COUNT(*) DESC) melhores_de_sua_casa
WHERE
    killer NOT LIKE %soldier%
        AND killer NOT LIKE '%brother%'
        AND killer NOT LIKE '%agent%'
        AND killer NOT LIKE '%man%"
        AND killer NOT LIKE '%none%
GROUP BY killers_house
```
   
## As temporadas mais populares de got
  
```mysql
   SELECT
Season as Temporada, FORMAT( sum(rating), 'N', en-us') as Score, SUM(votes) as Votos
FROM
episodes
GROUP BY season;
```

## Quantidades de casa por região
  
```mysql
   SELECT
    region as Região, COUNT(*) as Casas
FROM
    houses
GROUP BY region
ORDER BY COUNT (*) DESC
limit 10;
```
   
## Rank de personagens que mais participaram de episodios
  
```mysql
   SELECT
    `character` as Personagens, episodes_appeared as Episódios
FROM
    `characters`
ORDER BY Episodes_appeared DESC
limit 10;
```

# Equipe:
 * [Edu Moreira](https://www.linkedin.com/in/edu-moreira-aa9304226/)
 * [Fernanda Pereira](https://www.linkedin.com/in/fernandapereiradasilva/)
 * [Kaio Novais](https://www.linkedin.com/in/kaio-novais-1085a9200)
 * [Luciana Vivarelli](https://www.linkedin.com/in/luciana-vivarelli-valgode-34640815a/)
 * [Patricia Milane](https://www.linkedin.com/in/patmilane/)
 * [Raphael Vicentini](https://www.linkedin.com/in/raphael-victor-pereira-vicentini-10a81272)
