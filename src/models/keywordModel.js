const { Schema, models, model } = require("mongoose");

const keywordSchema = new Schema({
    domain: { type: String, required: true },
    keyword: { type: String, required: true },
    owner: { type: String, required: true }
}, { timestamps: true })

export const keywordModel = models?.Keyword || model("Keyword", keywordSchema);