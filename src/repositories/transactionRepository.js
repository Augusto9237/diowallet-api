import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
  return TransactionSchema.create(data);
}

async function update(id, data) {
  try {
    const transaction = await TransactionSchema.findOne({
      _id: id,
    });

    if (!transaction) {
      throw new Error("Transação não encontrada");
    }

    const transactionUpdate = await TransactionSchema.updateOne(
      {
        _id: id,
      },
      data
    );

    return transactionUpdate;
  } catch (error) {
    throw error;
    console.log(error);
  }
}

async function findAllByUser(id) {
  return await TransactionSchema.find({ userId: id });
}

async function deleteById(transactionId) {
  try {
    const transaction = await TransactionSchema.findOne({
      _id: transactionId,
    });

    if (!transaction) {
      throw new Error("Transação não encontrada");
    }

    const deletedTransaction = await TransactionSchema.findByIdAndDelete(
      transactionId
    );

    return deletedTransaction;
  } catch (error) {
    throw error;
  }
}

export default { create, update, findAllByUser, deleteById };
