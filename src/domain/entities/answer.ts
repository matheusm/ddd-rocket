import { Entity } from "../../core/entities/entitiy"
import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"

interface AnswerProps {
  questionId: UniqueEntityID
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}
