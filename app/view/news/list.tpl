<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in findUser %}
        <li class="item">
          <a href="{{ item.id }}">{{ item.name }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>