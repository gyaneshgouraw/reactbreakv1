exports.authenticate = (req, res) => {
    
    return res.status(200).json({ code: 200, message: 'Authenticated' });
    
    };