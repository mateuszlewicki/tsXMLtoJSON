# tsXMLtoJSON
projectType |> 4FLP ( for fun learning project)

usedModules |> 
	yargs, 
	fast-xml-parser

compilingInstructions |>
	1. npm i typescript yargs fast-xml-parser
	2. tsc main.js
	3. [node] main.js -i inputXMLFile -o outputJSONFile
	
usage |>
```
Usage main.js -i <inputXMLFile> -o <outputJSONFile>

Options:
      --version  Show version number                                 [boolean]
  -o, --output   output JSON file                          [string] [required]
  -i, --input    input XML file                            [string] [required]
  -h, --help     Show help                                           [boolean]

Examples:
  Usage main.js -i file.xml -o file.json  Convert XML to JSON

Copyright Mateusz Lewicki 2021
```
