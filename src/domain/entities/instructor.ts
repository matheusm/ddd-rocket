import { Entity } from "../../core/entities/entitiy"
import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    return new Instructor(props, id)
  }
}