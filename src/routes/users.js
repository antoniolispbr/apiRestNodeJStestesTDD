module.exports = (app) => {
    const findAll = (req, res, next) => {
        app.services.user.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => next(err))
    };
    
    const create = async (req, res, next) => {
        try{
            console.log('try')
            const result = await app.services.user.save(req.body);
            return res.status(201).json(result[0]);
        } catch (err) {
            console.log('catch')
            res.status(400).json({ error: err.message});
        }
        
    };

    return {findAll, create}
}