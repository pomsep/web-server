module.exports = {
   requireAuthentication: function (req, res, next) {
      console.log('private route hit');
      next();
   }
}