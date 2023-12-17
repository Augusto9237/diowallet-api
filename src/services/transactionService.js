import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.create({ ...body, userId: id });
}

async function updateTransiction(transactionId, body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.update(transactionId, {
    ...body,
    userId: id,
  });
}

async function findAllByUser(id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.findAllByUser(id);
}

async function deleteTransaction(id) {
  if (!id) throw new Error("Transiction id is required");
  return await transactionRepository.deleteById(id);
}

export default { create, findAllByUser, deleteTransaction, updateTransiction };
