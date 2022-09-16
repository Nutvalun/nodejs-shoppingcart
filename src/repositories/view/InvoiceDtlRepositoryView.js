const models = require("../../../models");

async function findAll() {
  return await models.InvoiceH.findAll(
    {
      attributes: ['product_id', 'quantity','unitPrice']
    }
  );
}

async function findById(id) {
  return await models.InvoiceDtl.findAll(
    {
      where:{
        'id': id
      }
    }
  );
}

async function findByInvoiceHId(id) {
  return await models.InvoiceDtl.findAll(
    {
      where:{
        'invoiceH_id': id
      }
    }
  );
}

module.exports = {
  findAll,
  findById,
  findByInvoiceHId
}