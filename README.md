# Testing different Express template engines

## Each templating engine is being sent this:

        app.get('/home', (req, res) => {
          let animals = [
            { name: 'Alligator' },
            { name: 'Crocodile' }
          ];
          res.render('home', { animals: animals });
        });

## Pug

        ul
          for animal in animals
            li= animal.name

## EJS

        <ul>
          <% animals.forEach((animal) => { %>
          <li><%= animal.name %></li>
          <% }); %>
        </ul>

## Mustache

        <ul>
        {{#animals}}
          <li>{{name}}</li>
        {{/animals}}
        </ul>


