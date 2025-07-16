// const sum=require('./calculator/sum')
// const sub=require('./calculator/sub')
// const mult=require('./calculator/mult')

const { sum, sub, mult } = require("./calculator"); // whenever we go inside a folder and don't put the file name it will look into the index file first, this is the default rule.

sum(7, 3);
sub(7, 3);
mult(7, 3);
