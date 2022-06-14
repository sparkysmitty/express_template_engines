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

## Notes:

An oft-mentioned challenge is making sure data from the user that may be
injected into a template has to be "escaped" to prevent an XSS attack.  
Some template engines automatically do it, others have special codes to use.

Some other possible features are the ability to use the template engine in multiple
platforms (e.g., php and not just node/express), or to have a CLI interface for 
manually building pages (presumably via a script).

This is an interesting read on how the author of express-handlebars explains his 
rationale for building it: https://github.com/express-handlebars/express-handlebars


