# Dev Tag Bot

## 1. Web scrapping

At the first page, you can see the "Articles of". If you select the tag, it will be sent to the server and server runs the puppeteer that crawls the site <a href="https://www.surfit.io/">surfit</a> which is developer, designer's blog content archive site. 

One thing important is that, you should wait some timer for the response from the server. As server is runnign the headless chrome and traversing all the DOM object from the page, it will take some time for the crawling. After waiting seconds, you can watch the contents from surfit.

## 2. JSON Tokenizer, Lexer and Parser

We also made a custom tokenizer and lexer for validating JSON format and a parser using library "nearley" which is a library that works similar to lex and yacc.

Path to find the parser 
    : "root -> server -> src -> jsonParser -> grammar.ne & grammar.js"

Path to find the Tokenizer and Lexer
    : "root -> client -> src -> util -> JSON-validating -> Tokenizing & Lexical Analysis & ErrorHandling directories and more."

## 3. JSON Visualizer

So after making a parser, we plan to create a JSON visualizer to visualize the json format on client side rendering. 

In this section, writing a json format in string and pushing the parse! button will send the input to the server and the parser we made will parse and send parsed json in response. 

As the client receives the response, it will render the parsed json inside a root array.

# Way for execution

1. Download the zip file and open two terminals.

2. Go inside the server and client directories on each terminal.

3. Run command "yarn" at each terminal to install the libraries for using it in the local environment. 
   - Just type **"yarn"** at the terminal.

4. Run command "yarn dev" at each terminal to run the client and server. 
   - Just type **"yarn dev"** at each terminal.

5. Go to the "localhost:5173" or just click the link on the client terminal and enjoy our project!

🤔
If you are having some problems on finding codes or execution, please email us : "ehcws333@gm.gist.ac.kr"

