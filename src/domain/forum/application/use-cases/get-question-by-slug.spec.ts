import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityID } from '@/core/entities/value-objects/unique-entity-id'
import { Question } from '../../enterprise/entities/question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
      slug: Slug.create('nova-pergunta'),
    })

    inMemoryQuestionsRepository.items.push(newQuestion)

    const { question } = await sut.execute({
      slug: 'nova-pergunta',
    })

    expect(question.id).toBeTruthy()
  })
})
