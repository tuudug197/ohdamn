exports.userActionValidator = ( req, res, next) => {
    const { gmail, password } = req.body
    if( !gmail || !password ) return res.send("gmail or password is required")
    next()
}