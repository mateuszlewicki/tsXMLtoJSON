#!/usr/bin/env node
import yargs = require('yargs/yargs')
import {XMLParser} from 'fast-xml-parser';
const fs = require('fs');

const argv = yargs(process.argv.slice(2)).
    options({
	output:{
	    alias: "o",
	    type:"string",
	    description:"OutputFile"
	},
	input:{
	    alias:"i",
	    type: "string",
	    description:"InputFile"
	}
    })
	.example("Usage $0 -i file.xml -o file.json","Convert XML to JSON")
	.usage("Usage $0 -i <inputXMLFile> -o <outputJSONFile>")
	.describe('i','input XML file')
	.describe('o','output JSON file')
	.demandOption(['i','o'])
	.help()
	.alias('h','help')
	.epilog('Copyright Mateusz Lewicki 2021')
	.parseSync();



const parser = new XMLParser();

if (argv.o && argv.i){
    fs.readFile(argv.i, 'utf8', (readErr: Error , data:string) => {
	if (readErr) throw readErr;
	var jsonData = JSON.stringify(parser.parse(data,true),null,2);


	fs.writeFile(argv.o, jsonData, (writeErr:Error) => {
	    if (writeErr) throw writeErr;
	    console.log("File written successfully");
	});

    });
}




