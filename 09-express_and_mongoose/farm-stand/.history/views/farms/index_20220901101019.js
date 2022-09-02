<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>All Products</title>
  </head>
  <body>
    <h1>
      <%=category ? `${category[0].toUpperCase() +
      category.slice(1).toLowerCase()}s` : 'All Products' %>
    </h1>
    <ul>
      <% for(let product of products){ %>

      <li><a href="/products/<%=product._id  %> "><%=product.name %></a></li>

      <%} %>
    </ul>

    <a href="/products/new">Create New Product</a>
  </body>
</html>