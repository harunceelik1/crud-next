import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
    // createdAt ve updatedAt. createdAt alanı, bir dokümanın oluşturulduğu tarihi ve saati tutar. updatedAt alanı ise doküman her güncellendiğinde güncellenen tarihi ve saati tutar. Bu alanlar, belirli bir konunun oluşturulma ve güncelleme zamanlarını takip etmek için kullanılabilir.createdAt ve updatedAt. createdAt alanı, bir dokümanın oluşturulduğu tarihi ve saati tutar. updatedAt alanı ise doküman her güncellendiğinde güncellenen tarihi ve saati tutar. Bu alanlar,
    // belirli bir konunun oluşturulma ve güncelleme zamanlarını takip etmek için kullanılabilir.
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
