
/*
 * GET home page.
 */

exports = function(app){
    app.get('/',function(req,res){
        res.render('index', { title: 'Express' });      
    });
};