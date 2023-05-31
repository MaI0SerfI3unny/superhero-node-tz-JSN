const checkStructHero = (req, _, next) => {
  const { hero } = req.body
  if (hero.nickname === undefined ||
        hero.real_name === undefined ||
        hero.origin_description === undefined ||
        hero.superpowers === undefined ||
        hero.catch_phrase === undefined ||
        hero.Images === undefined) {
    throw new Error(JSON.stringify({
      status: 403,
      message: 'No required params'
    }))
  }
  next()
}

module.exports = checkStructHero
