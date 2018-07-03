
const BRANDS = {
  'viventura': 1,
  'puraventura': 2,
  'japaventura': 3,
  'innoventura': 4,
}

module.exports = {
  /*
   * Validate/set the brands and locales per each request
   */
  setBrand: async function(req, res, next) {
    const project = req.get('x-ventura-project') || 'viventura';
    const locale = req.get('x-ventura-locale') || 'de_DE';

    if(!project || !locale) {
      res
        .status(502)
        .send({error: 'x-ventura-* header is missing'});
    }

    // set Locale id
    req.locale_id =  locale;
    // set Project id
    req.project_id = BRANDS[project]
    next();
  }
};
