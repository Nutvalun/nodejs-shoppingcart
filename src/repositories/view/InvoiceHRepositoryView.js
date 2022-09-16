const models = require("../../../models");

async function findAll() {
  return await models.InvoiceH.findAll(
    {
      attributes: ['id', 'userId','invoiceNo','unitPrice']
    }
  );
}

async function findById(id) {
  return await models.InvoiceH.findAll(
    {
      where:{
        'id': id
      }
    }
  );
}

async function findByUserId(id) {
  return await models.InvoiceH.findAll(
    {
      where:{
        'userId': id
      }
    }
  );
}

module.exports = {
  findAll,
  findById,
  findByUserId
}