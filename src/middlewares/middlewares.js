exports.middlewareGlobal = (req, res, next) => {
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
};
  
exports.outroMiddleware = (req, res, next) => {
  next();
};
  
exports.checkCsrfError = (err, req, res, next) => {
  if(err) console.log(err) 
  return res.render('404');
    
};
  
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}; 