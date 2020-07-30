<html>
  <head>
    <title>MySql Users</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in userList %}
        <li class="item">
          <p>{{ item.name }}</p>
          <span>{{ item.id }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>