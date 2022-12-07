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

## Test Cases for JSON-Visualizer

### success_case

- examples from **[json.org](http://json.org)**
    
    ```json
    {"menu": {"id": "file","value": "File","popup": {"menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},{"value": "Open", "onclick": "OpenDoc()"},{"value": "Close", "onclick": "CloseDoc()"}]}}}
    ```
    
    ```json
    {"widget": { "debug": "on", "window": { "title": "Sample Konfabulator Widget", "name": "main_window", "width": 500, "height": 500 }, "image": { "src": "Images/Sun.png", "name": "sun1", "hOffset": 250, "vOffset": 250, "alignment": "center" }, "text": { "data": "Click Here", "size": 36, "style": "bold", "name": "text1", "hOffset": 250, "vOffset": 100, "alignment": "center", "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;" } }}
    ```
    
    ```json
    {"web-app": { "servlet": [ { "servlet-name": "cofaxCDS", "servlet-class": "org.cofax.cds.CDSServlet", "init-param": { "configGlossary:installationAt": "Philadelphia, PA", "configGlossary:adminEmail": "ksm@pobox.com", "configGlossary:poweredBy": "Cofax", "configGlossary:poweredByIcon": "/images/cofax.gif", "configGlossary:staticPath": "/content/static", "templateProcessorClass": "org.cofax.WysiwygTemplate", "templateLoaderClass": "org.cofax.FilesTemplateLoader", "templatePath": "templates", "templateOverridePath": "", "defaultListTemplate": "listTemplate.htm", "defaultFileTemplate": "articleTemplate.htm", "useJSP": false, "jspListTemplate": "listTemplate.jsp", "jspFileTemplate": "articleTemplate.jsp", "cachePackageTagsTrack": 200, "cachePackageTagsStore": 200, "cachePackageTagsRefresh": 60, "cacheTemplatesTrack": 100, "cacheTemplatesStore": 50, "cacheTemplatesRefresh": 15, "cachePagesTrack": 200, "cachePagesStore": 100, "cachePagesRefresh": 10, "cachePagesDirtyRead": 10, "searchEngineListTemplate": "forSearchEnginesList.htm", "searchEngineFileTemplate": "forSearchEngines.htm", "searchEngineRobotsDb": "WEB-INF/robots.db", "useDataStore": true, "dataStoreClass": "org.cofax.SqlDataStore", "redirectionClass": "org.cofax.SqlRedirection", "dataStoreName": "cofax", "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver", "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon", "dataStoreUser": "sa", "dataStorePassword": "dataStoreTestQuery", "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';", "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log", "dataStoreInitConns": 10, "dataStoreMaxConns": 100, "dataStoreConnUsageLimit": 100, "dataStoreLogLevel": "debug", "maxUrlLength": 500}}, { "servlet-name": "cofaxEmail", "servlet-class": "org.cofax.cds.EmailServlet", "init-param": { "mailHost": "mail1", "mailHostOverride": "mail2"}}, { "servlet-name": "cofaxAdmin", "servlet-class": "org.cofax.cds.AdminServlet"}, { "servlet-name": "fileServlet", "servlet-class": "org.cofax.cds.FileServlet"}, { "servlet-name": "cofaxTools", "servlet-class": "org.cofax.cms.CofaxToolsServlet", "init-param": { "templatePath": "toolstemplates/", "log": 1, "logLocation": "/usr/local/tomcat/logs/CofaxTools.log", "logMaxSize": "", "dataLog": 1, "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log", "dataLogMaxSize": "", "removePageCache": "/content/admin/remove?cache=pages&id=", "removeTemplateCache": "/content/admin/remove?cache=templates&id=", "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder", "lookInContext": 1, "adminGroupID": 4, "betaServer": true}}], "servlet-mapping": { "cofaxCDS": "/", "cofaxEmail": "/cofaxutil/aemail/*", "cofaxAdmin": "/admin/*", "fileServlet": "/static/*", "cofaxTools": "/tools/*"}, "taglib": { "taglib-uri": "cofax.tld", "taglib-location": "/WEB-INF/tlds/cofax.tld"}}}
    ```
    
    ```json
    { "glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": [ "GML", "XML" ] }, "GlossSee": "markup" } } } } }
    ```
    
- examples from **[opensource.adobe.com](http://opensource.adobe.com)** (nested structures)
    
    ```json
    { "id": "0001", "type": "donut", "name": "Cake", "ppu": 0.55, "batters": { "batter": [ { "id": "1001", "type": "Regular" }, { "id": "1002", "type": "Chocolate" }, { "id": "1003", "type": "Blueberry" }, { "id": "1004", "type": "Devil's Food" } ] }, "topping": [ { "id": "5001", "type": "None" }, { "id": "5002", "type": "Glazed" }, { "id": "5005", "type": "Sugar" }, { "id": "5007", "type": "Powdered Sugar" }, { "id": "5006", "type": "Chocolate with Sprinkles" }, { "id": "5003", "type": "Chocolate" }, { "id": "5004", "type": "Maple" } ] }
    ```
    
    ```json
    [ { "id": "0001", "type": "donut", "name": "Cake", "ppu": 0.55, "batters": { "batter": [ { "id": "1001", "type": "Regular" }, { "id": "1002", "type": "Chocolate" }, { "id": "1003", "type": "Blueberry" }, { "id": "1004", "type": "Devil's Food" } ] }, "topping": [ { "id": "5001", "type": "None" }, { "id": "5002", "type": "Glazed" }, { "id": "5005", "type": "Sugar" }, { "id": "5007", "type": "Powdered Sugar" }, { "id": "5006", "type": "Chocolate with Sprinkles" }, { "id": "5003", "type": "Chocolate" }, { "id": "5004", "type": "Maple" } ] }, { "id": "0002", "type": "donut", "name": "Raised", "ppu": 0.55, "batters": { "batter": [ { "id": "1001", "type": "Regular" } ] }, "topping": [ { "id": "5001", "type": "None" }, { "id": "5002", "type": "Glazed" }, { "id": "5005", "type": "Sugar" }, { "id": "5003", "type": "Chocolate" }, { "id": "5004", "type": "Maple" } ] }, { "id": "0003", "type": "donut", "name": "Old Fashioned", "ppu": 0.55, "batters": { "batter": [ { "id": "1001", "type": "Regular" }, { "id": "1002", "type": "Chocolate" } ] }, "topping": [ { "id": "5001", "type": "None" }, { "id": "5002", "type": "Glazed" }, { "id": "5003", "type": "Chocolate" }, { "id": "5004", "type": "Maple" } ] } ]
    ```
    

### fail_cases

**Tokenizer**

- unexpected token error
	- check spells of words | ex) false, null, true …
	- filter words which are not tokens

```json
{"isTrue":falseee}
```

```json
{"isTrue":trrue}
```

```json
{"null_value": nulll}
```

- multiple decimal points error
	- number should contain only one decimal points

```json
{"number": 33..3}
```

- **limitation
	-** tokenizer cannot tokenize **natural number e
	-** tokenizer cannot tokenize **line break**

```json
{"number": 123.456e-789}
```

```json
{
	"number": 123.456e-789
}
```

**Lexical Analyzer**

- array, object depth error
	- check balance of arrays and objects

```json
{"array": [1,2,[3]}
```

- colon key, value error
	- check pair of key and value

```json
{"key":}"value"}
```

```json
{500:"value"}
```

- separator error
	- check if separator is between elements (using first and follow of separator)

```json
{"key":"value",}
```

- **limitation
	-** lexical analyzer cannot check **balance of string quote
	-** only use first and follow of **colon and separator**

```json
{"key":"value}
```

```json
{"key": "value", "value2"}
```
