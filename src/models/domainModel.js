import { model, models, Schema } from "mongoose";

const domainSchema = new Schema({
    domainTitle: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const domainModel = models?.Domain || model("Domain", domainSchema)