import { Entity } from "../../core/entities/entitiy"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {}