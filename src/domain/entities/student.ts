import { Entity } from "../../core/entities/entitiy"
import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface StudentProps {
  name: string
}

class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    return new Student(props, id)
  }
}