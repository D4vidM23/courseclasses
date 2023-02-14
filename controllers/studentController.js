const {Student} = require('../models')

module.exports.viewAll = async function (req, res) {
    const students = await Student.findAll();
    res.render('student/view_all', {students});
}
