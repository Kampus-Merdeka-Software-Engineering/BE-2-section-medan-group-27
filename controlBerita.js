const berita = require('./modelberita')

function getBerita(req, res, next){
    berita.findAll()
    .then(function(berita){
        res.status(200).json(berita)
    })
    .catch(err=> console.error(err));
}

function getBeritaById(req, res, next) {
    const beritaId = req.params.id; // Anggap bahwa id berita diteruskan sebagai parameter rute

    berita.findOne({
        where: {
            ID_berita: beritaId
        }
    })
    .then(function (berita) {
        if (!berita) {
            // Handle jika berita tidak ditemukan
            res.status(404).json({ message: 'Berita tidak ditemukan' });
        } else {
            res.status(200).json(berita);
        }
    })
    .catch(err => console.error(err));
}

module.exports = {
    getBeritaById, getBerita
};
