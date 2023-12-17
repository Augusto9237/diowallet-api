import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function update(req, res) {
  const { id: transactionId } = req.params;
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.updateTransiction(
      transactionId,
      body,
      id
    );
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function deletedTransaction(req, res) {
  const { id } = req.params;
  try {
    const deleteTransaction = await transactionService.deleteTransaction(id);

    if (!deleteTransaction) {
      return res.status(404).json({ message: "Transação não encontrada" });
    }

    res.status(201).json({ message: "Transação excluída com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

async function findAllByUser(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const transactions = await transactionService.findAllByUser(id);
    return res.send(transactions);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default { create, findAllByUser, deletedTransaction, update };
