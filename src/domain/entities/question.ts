import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entitiy"
import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {}
