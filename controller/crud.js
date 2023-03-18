const crudSchema = require('../model/crud')

async function postData(req, res) {
  try {
    var data = await crudSchema(req.body)
    await data.save()
    res.json({
      status: true,
      message: "Data Inserted!"
    })
  } catch (e) {
    res.json({
      status: false,
      message: "Duplicate Found!"
    })
  }
}

async function getAllData(req, res) {
  var data = await crudSchema.find()
  res.json(data)
}

async function getData(req, res) {
  var data = await crudSchema.findOne({email: req.params.email})
  res.json(data)
}

async function updateData(req, res) {
  var data = await crudSchema.updateOne({ email: req.body.email }, req.body)
  if (data.modifiedCount > 0) {
    res.json({
      status: true,
      message: "Data Updated!"
    })
  } else {
    res.json({
      status: false,
      message: "Data Not Updated!"
    })
  }
}

function deleteData(req, res) {
  var data = crudSchema.deleteOne({ email: req.body.email})
  if (data.deletedCount > 0) {
    res.json({
      status: true,
      message: "Data Deleted!"
    })
  } else {
    res.json({
      status: false,
      message: "Data Not Deleted!"
    })
  }
}

module.exports = {
  postData,
  getAllData,
  getData,
  updateData,
  deleteData
}