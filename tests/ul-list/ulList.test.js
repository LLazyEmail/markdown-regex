// import { resolve } from 'path';
const { resolve } = require('path')
const { readFileSync } = require('fs');
const { REGEXP_UL_LIST } = require('../../src/index');


const root = resolve(__dirname, '');

const markdown = readFileSync(`${root}/content.md`, { encoding: 'utf-8' });

describe('RegEx: REGEXP_UL_LIST', () => {

    
    // console.log(markdown) ;

    // console.log(REGEXP_UL_LIST.test(markdown)) ;
    console.log(markdown.match(REGEXP_UL_LIST) ) ;
    

    test('should match the expected ...', () => {

    //     let result = 


    });
    
   // test('', () => {
   // });
   // test('', () => {
   // });
});