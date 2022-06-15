import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ObjetivoSchema = new Schema(
  {
    descricao: { type: String, required: true, unique: true },
    valor: { type: Number, required: true },
    atingido: { type: Boolean, required: true },
  },
  { versionKey: false },
);

const Objetivo = model('objetivo', ObjetivoSchema);

export default Objetivo;
