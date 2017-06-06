const app = require('express')()

app.use(express.static( __dirname + '/public'));
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), ()=>{
    console.log('App listening at',  app.get('port'))
})