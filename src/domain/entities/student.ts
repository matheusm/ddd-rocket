import { Entity } from "../../core/entities/entitiy"

interface StudentProps {
  name: string
}

class Student extends Entity<StudentProps> {}