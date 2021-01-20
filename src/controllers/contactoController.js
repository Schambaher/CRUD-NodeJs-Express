const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contactos', (err, contactos) =>{
            if(err){
                res.json(err);
            }
            res.render('contactos', {
                data:contactos
            });
        })
    })
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contactos set ?', [data], (err, contacto)=> {
            res.redirect('/');
        });
    })
}

controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contactos WHERE id = ?', [id], (err, contacto) => {
            res.render('contactos_edit', {
                data: contacto[0]
            })
        })
    })
}

controller.update = (req, res) => {
    const {id} = req.params;
    const newContacto = req.body;
    req.getConnection((err, conn) => {
        conn.query('update contactos set ? where id = ?', [newContacto, id], (err, rows)=> {
            res.redirect('/');
        })
    })
}

controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM contactos WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
}

module.exports = controller;