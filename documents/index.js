
module.exports = ({name}) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          
       </head>
       <body>
          <div>My name is :${name}</div>
       </body>
    </html>
    `;
};
