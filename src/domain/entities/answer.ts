import { Entity } from "../../core/entities/entitiy"
import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
  questionId: UniqueEntityID
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID) {
    return new Answer({
      ...props,
      createdAt: new Date(),
    }, id)
  }

  get content() {
    return this.props.content
  }
}
